package co.edu.unbosque.mVentas.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.mVentas.modelo.DetalleVenta;


public interface DetalleVentaRepository extends MongoRepository<DetalleVenta, String> {
	

}
