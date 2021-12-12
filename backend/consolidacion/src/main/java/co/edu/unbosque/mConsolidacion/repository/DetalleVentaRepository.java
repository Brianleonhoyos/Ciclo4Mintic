package co.edu.unbosque.mConsolidacion.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.mConsolidacion.modelo.DetalleVenta;


public interface DetalleVentaRepository extends MongoRepository<DetalleVenta, String> {
	

}
