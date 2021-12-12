package co.edu.unbosque.mConsolidacion.modelo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "consolidacion")
public class Consolidacion {
	@Id
	private String id;

	private String ciudad;
	private Integer totalVentas;

	public Consolidacion() {

	}

	public Consolidacion(String ciudad, Integer totalVentas) {
		this.ciudad = ciudad;
		this.totalVentas = totalVentas;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public Integer getTotalVentas() {
		return totalVentas;
	}

	public void setTotalVentas(Integer totalVentas) {
		this.totalVentas = totalVentas;
	}

	@Override
	public String toString() {
		return "Consolidacion [id=" + id + ", ciudad=" + ciudad + ", totalVentas=" + totalVentas + "]";
	}

}
