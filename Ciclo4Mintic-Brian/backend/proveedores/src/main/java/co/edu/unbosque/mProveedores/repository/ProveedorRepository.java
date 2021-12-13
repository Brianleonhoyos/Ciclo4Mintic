package co.edu.unbosque.mProveedores.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.mProveedores.modelo.Proveedor;

public interface ProveedorRepository extends MongoRepository<Proveedor, String> {
	public boolean existsByNit(Integer nit);
	//Optional<Proveedor> findByNitO (Integer nit);
	List<Proveedor> findByNit (Integer nit);
	void deleteByNit(Integer nit);
}
