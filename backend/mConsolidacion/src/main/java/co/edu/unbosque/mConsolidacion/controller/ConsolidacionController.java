package co.edu.unbosque.mConsolidacion.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unbosque.mConsolidacion.modelo.Consolidacion;
import co.edu.unbosque.mConsolidacion.repository.ConsolidacionRepository;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, 
		RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/consolidacion")
public class ConsolidacionController {
	@Autowired
	ConsolidacionRepository consolRepo;

	@PostMapping("/guardar")
	public ResponseEntity<Consolidacion> createConsolidacion(@RequestBody Consolidacion consol) {
		try {
			Consolidacion consolida = consolRepo.save(new Consolidacion(consol.getCiudad(), consol.getTotalVentas()));
			return new ResponseEntity<>(consolida, HttpStatus.CREATED);

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/listar")
	public ResponseEntity<List<Consolidacion>> getAllConsolidacion(@RequestParam(required = false) String ciudad) {
		try {
			List<Consolidacion> consols = new ArrayList<Consolidacion>();

			if (ciudad == null)
				consolRepo.findAll().forEach(consols::add);
			else
				consolRepo.findByCiudad(ciudad).forEach(consols::add);

			if (consols.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(consols, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/actualizar/{ciudad}")
	public ResponseEntity<Consolidacion> updateConsolidacion(@PathVariable("ciudad") String ciud, @RequestBody Consolidacion consol) {
		List<Consolidacion> consols = consolRepo.findByCiudad(ciud);
	
		if (consols.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		} else {
		
			Consolidacion consoli = consols.get(0);
			System.out.print(consoli);
			
					
			consoli.setCiudad(consol.getCiudad());
			consoli.setTotalVentas(consol.getTotalVentas());
			return new ResponseEntity<>(consolRepo.save(consoli), HttpStatus.OK);
		}
	}
	
	@DeleteMapping("/eliminar/{id}")
	public ResponseEntity<HttpStatus> deleteConsolidacion(@PathVariable("id") String id) {
		try {
			consolRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/eliminarTodo")
	public ResponseEntity<HttpStatus> deleteAllConsolidacion() {
		try {
			consolRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
