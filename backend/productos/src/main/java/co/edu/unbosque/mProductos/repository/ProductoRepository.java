package co.edu.unbosque.mProductos.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.mProductos.modelo.Producto;

public interface ProductoRepository extends MongoRepository<Producto, String> {
	Optional<Producto> findByNitProveedor (Integer nit);
	List<Producto> findByCodigo (Integer codigo);
	void deleteByCodigo(Integer codigo);
}
