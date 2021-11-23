package co.edu.unbosque.mVentas.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.mVentas.modelo.Venta;

public interface VentaRepository extends MongoRepository<Venta, String>{
	
	List<Venta> findByCodigoVenta(Integer codigo);

	boolean existsByCodigoVenta(Integer codigo);

	void deleteByCodigoVenta(Integer codigo);

}
