package co.edu.unbosque.mClientes.controller;

import java.io.Console;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unbosque.mClientes.modelo.Cliente;
import co.edu.unbosque.mClientes.repository.ClienteRepository;
//import jdk.internal.misc.FileSystemOption;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/clientes")
public class ClienteController {

	@Autowired
	ClienteRepository clientRepo;

	@PostMapping("/guardar")
	public ResponseEntity<Cliente> createCliente(@RequestBody Cliente client) {
		try {
			if (clientRepo.existsByCedula(client.getCedula())) {
				return new ResponseEntity<>(null, HttpStatus.FOUND);
			} else {
				Cliente cliente = clientRepo.save(new Cliente(client.getCedula(), client.getNombre(),
						client.getDireccion(), client.getTelefono(), client.getCorreo()));
				return new ResponseEntity<>(cliente, HttpStatus.CREATED);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/listar")
	public ResponseEntity<List<Cliente>> getAllClientes(@RequestParam(required = false) Integer cedula) {
		try {
			List<Cliente> clientes = new ArrayList<Cliente>();

			if (cedula == null)
				clientRepo.findAll().forEach(clientes::add);
			else
				clientRepo.findByCedula(cedula).forEach(clientes::add);

			if (clientes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(clientes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/actualizar/{cedula}")
	public ResponseEntity<Cliente> updateCliente(@PathVariable("cedula") Integer ced, @RequestBody Cliente cliente) {
		List<Cliente> clientes = clientRepo.findByCedula(ced);
		//clientRepo.findByCedula(ced).is;
		if (clientes.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		} else {
		
			Cliente client = clientes.get(0);
			System.out.print(client);
			
					
			client.setCedula(cliente.getCedula());
			client.setNombre(cliente.getNombre());
			client.setDireccion(cliente.getDireccion());
			client.setTelefono(cliente.getTelefono());
			client.setCorreo(cliente.getCorreo());
			return new ResponseEntity<>(clientRepo.save(client), HttpStatus.OK);
		}
	}


	@DeleteMapping("/eliminar/{cedula}")
	public ResponseEntity<HttpStatus> deleteCliente(@PathVariable("cedula") Integer cedula) {
		try {
			clientRepo.deleteByCedula(cedula);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/eliminarTodos")
	public ResponseEntity<HttpStatus> deleteAllClientes() {
		try {
			clientRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
