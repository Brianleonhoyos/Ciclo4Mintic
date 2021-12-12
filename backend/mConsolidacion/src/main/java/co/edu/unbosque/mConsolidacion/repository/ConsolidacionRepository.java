package co.edu.unbosque.mConsolidacion.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.unbosque.mConsolidacion.modelo.Consolidacion;


public interface ConsolidacionRepository extends MongoRepository<Consolidacion, String>{

	List<Consolidacion> findByCiudad (String ciud);
}
