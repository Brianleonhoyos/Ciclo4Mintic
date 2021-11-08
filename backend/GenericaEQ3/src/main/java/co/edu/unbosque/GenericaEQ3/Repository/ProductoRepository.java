package co.edu.unbosque.GenericaEQ3.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.GenericaEQ3.Modelo.Producto;


public interface ProductoRepository extends MongoRepository<Producto, String>{
	List<Producto> findByCodigo(long codigo);
	Optional<Producto> findByNitproveedor(String nitproveedor);
}
