package co.edu.unbosque.mProveedores.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

import co.edu.unbosque.mProveedores.modelo.Proveedor;
import co.edu.unbosque.mProveedores.repository.ProveedorRepository;

// Muchos errores, ya se quitaron
// Segundo ensayo 
@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT,RequestMethod.DELETE })


@RequestMapping("/proveedores")
public class ProveedorController {

	@Autowired
	ProveedorRepository proveRepo;

	@PostMapping("/guardar")
	public ResponseEntity<Proveedor> createProveedor(@RequestBody Proveedor provee) {
		try {
			if (proveRepo.existsByNit(provee.getNit())) {
				return new ResponseEntity<>(null, HttpStatus.FOUND);
			} else {
				Proveedor proveedor = proveRepo.save(new Proveedor(provee.getNit(), provee.getNombre(),
						provee.getDireccion(), provee.getTelefono(), provee.getCiudad()));
				return new ResponseEntity<>(proveedor, HttpStatus.CREATED);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/listar")
	public ResponseEntity<List<Proveedor>> getAllProveedores(@RequestParam(required = false) Integer nit) {
		try {
			List<Proveedor> proveedores = new ArrayList<Proveedor>();

			if (nit == null)
				proveRepo.findAll().forEach(proveedores::add);
			else
				proveRepo.findByNit(nit).forEach(proveedores::add);

			if (proveedores.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(proveedores, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/actualizar/{nit}")
	public ResponseEntity<Proveedor> updateProveedor(@PathVariable("nit") Integer nit,
			@RequestBody Proveedor proveedor) {
		// Optional<Proveedor> proveeData = proveRepo.findByNitO(nit);
		List<Proveedor> proveedores = new ArrayList<Proveedor>();
		if (proveedores.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			Proveedor provee = proveedores.get(0);

			provee.setNit(proveedor.getNit());
			provee.setNombre(proveedor.getNombre());
			provee.setDireccion(proveedor.getDireccion());
			provee.setTelefono(proveedor.getTelefono());
			provee.setCiudad(proveedor.getCiudad());
			return new ResponseEntity<>(proveRepo.save(provee), HttpStatus.OK);

		}
	}

	@DeleteMapping("/eliminar/{nit}")
	public ResponseEntity<HttpStatus> deleteProveedor(@PathVariable("nit") Integer nit) {
		try {
			proveRepo.deleteByNit(nit);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/eliminarTodos")
	public ResponseEntity<HttpStatus> deleteAllProveedores() {
		try {
			proveRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
