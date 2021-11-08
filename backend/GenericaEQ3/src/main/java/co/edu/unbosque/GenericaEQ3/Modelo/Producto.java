package co.edu.unbosque.GenericaEQ3.Modelo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="productos")
public class Producto {
	@Id
	private String id;
	
	private long codigo;
	
	private String nombre_producto;
	
	private String nitproveedor;
	
	private double precio_compra;
	
	private double ivacompra;
	
	private double precio_venta;

	public long getCodigo() {
		return codigo;
	}

	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}

	public String getNombre_producto() {
		return nombre_producto;
	}

	public void setNombre_producto(String nombre_producto) {
		this.nombre_producto = nombre_producto;
	}

	public String getNitproveedor() {
		return nitproveedor;
	}

	public void setNitproveedor(String nitproveedor) {
		this.nitproveedor = nitproveedor;
	}

	public double getPrecio_compra() {
		return precio_compra;
	}

	public void setPrecio_compra(double precio_compra) {
		this.precio_compra = precio_compra;
	}

	public double getIvacompra() {
		return ivacompra;
	}

	public void setIvacompra(double ivacompra) {
		this.ivacompra = ivacompra;
	}

	public double getPrecio_venta() {
		return precio_venta;
	}

	public void setPrecio_venta(double precio_venta) {
		this.precio_venta = precio_venta;
	}

	public Producto(long codigo, String nombre_producto, String nitproveedor, double precio_compra, double ivacompra,
			double precio_venta) {
		this.codigo = codigo;
		this.nombre_producto = nombre_producto;
		this.nitproveedor = nitproveedor;
		this.precio_compra = precio_compra;
		this.ivacompra = ivacompra;
		this.precio_venta = precio_venta;
	}

	public Producto() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Producto [id=" + id + ", codigo=" + codigo + ", nombre_producto=" + nombre_producto + ", nitproveedor="
				+ nitproveedor + ", precio_compra=" + precio_compra + ", ivacompra=" + ivacompra + ", precio_venta="
				+ precio_venta + "]";
	}
	
}
