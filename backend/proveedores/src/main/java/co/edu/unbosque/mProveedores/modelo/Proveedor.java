package co.edu.unbosque.mProveedores.modelo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "proveedores")
public class Proveedor {

	@Id
	private String id;

	private Integer nit;
	private String nombre;
	private String direccion;
	private String telefono;
	private String ciudad;

	public Proveedor() {

	}

	public Proveedor(Integer nit, String nombre, String direccion, String telefono, String ciudad) {
		this.nit = nit;
		this.nombre = nombre;
		this.direccion = direccion;
		this.telefono = telefono;
		this.ciudad = ciudad;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getNit() {
		return nit;
	}

	public void setNit(Integer nit) {
		this.nit = nit;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	@Override
	public String toString() {
		return "Proveedor [id=" + id + ", nit=" + nit + ", nombre=" + nombre + ", direccion=" + direccion
				+ ", telefono=" + telefono + ", ciudad=" + ciudad + "]";
	}

}
