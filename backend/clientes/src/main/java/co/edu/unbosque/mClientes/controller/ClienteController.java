package co.edu.unbosque.mClientes.controller;

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

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ClienteController {

	@Autowired
	ClienteRepository clientRepo;

	@PostMapping("/clientes")
	public ResponseEntity<Cliente> createCliente(@RequestBody Cliente client) {
		try {
			Cliente cliente = clientRepo.save(new Cliente(client.getCedula(), client.getNombre(), client.getDireccion(),
					client.getTelefono(), client.getCorreo()));
			return new ResponseEntity<>(cliente, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/clientes")
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

	@PutMapping("/clientes/{cedula}")
	public ResponseEntity<Cliente> updateCliente(@PathVariable("cedula") Integer ced, @RequestBody Cliente cliente) {
		Optional<Cliente> clienteData = clientRepo.findByCedulaO(ced);
		if (clienteData.isEmpty()) {
			Cliente client = clienteData.get();
			client.setCedula(cliente.getCedula());
			client.setNombre(cliente.getNombre());
			client.setDireccion(cliente.getDireccion());
			client.setTelefono(cliente.getTelefono());
			client.setCorreo(cliente.getCorreo());

			return new ResponseEntity<>(clientRepo.save(client), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/clientes/{cedula}")
	public ResponseEntity<HttpStatus> deleteCliente(@PathVariable("cedula") Integer cedula) {
		try {
			clientRepo.deleteByCedula(cedula);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/clientes")
	public ResponseEntity<HttpStatus> deleteAllClientes() {
		try {
			clientRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
