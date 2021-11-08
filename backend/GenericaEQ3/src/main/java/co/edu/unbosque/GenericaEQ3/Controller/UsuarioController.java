package co.edu.unbosque.GenericaEQ3.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unbosque.GenericaEQ3.Modelo.Usuario;
import co.edu.unbosque.GenericaEQ3.Repository.UsuarioRepository;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class UsuarioController {
	
	@Autowired
	  UsuarioRepository usuarioRepository;

	@GetMapping("/usuarios/{usuario}")
	  public ResponseEntity<Usuario> BuscarxUsuario(@PathVariable("usuario") String usuario) {
		  Optional<Usuario> usuarioData = Optional.empty();

		  if (usuarioData.isPresent()) {
		    return new ResponseEntity<>(usuarioData.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	  }

	  @PostMapping("/Usuarios")
	  public ResponseEntity<Usuario> createUsuario(@RequestBody Usuario usuario) {
		  try {
			  Usuario _usuario = usuarioRepository.save(new Usuario(usuario.getUsuario(),usuario.getPassword()));
			    return new ResponseEntity<>(_usuario, HttpStatus.CREATED);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	  } 

}
