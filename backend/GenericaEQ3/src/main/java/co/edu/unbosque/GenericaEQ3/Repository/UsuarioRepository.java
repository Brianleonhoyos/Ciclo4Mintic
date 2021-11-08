package co.edu.unbosque.GenericaEQ3.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.GenericaEQ3.Modelo.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{
		List<Usuario> findByUsuario(String usuario);
		List<Usuario> findByPassword(String password);	
}

