package co.edu.unbosque.mClientes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.mClientes.modelo.Cliente;


public interface ClienteRepository extends MongoRepository<Cliente, String> {
	Optional<Cliente> findByCedulaO(long cedula);
	List<Cliente> findByCedula (long cedula);
	void deleteByCedula(long cedula);

}
