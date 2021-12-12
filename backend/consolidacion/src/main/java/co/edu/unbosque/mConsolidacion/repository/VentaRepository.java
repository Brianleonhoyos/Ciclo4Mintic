package co.edu.unbosque.mConsolidacion.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.mConsolidacion.modelo.Venta;

public interface VentaRepository extends MongoRepository<Venta, String>{
	
	List<Venta> findByCodigoVenta(Integer codigo);

	boolean existsByCodigoVenta(Integer codigo);

	void deleteByCodigoVenta(Integer codigo);

}
