package co.edu.unbosque.mClientes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.mClientes.modelo.Cliente;


public interface ClienteRepository extends MongoRepository<Cliente, String> {
	public boolean existsByCedula(Integer ced);
	//Optional<Cliente> findByCedu(Integer ced);
	List<Cliente> findByCedula (Integer ced);
	void deleteByCedula(Integer ced);

}
