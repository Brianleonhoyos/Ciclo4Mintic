package co.edu.unbosque.mProductos.modelo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "productos")
public class Producto {

	@Id
	private String id;

	private Integer codigo;
	private String nombreProducto;
	private Integer nitProveedor;
	private Integer precioCompra;
	private Integer ivaCompra;
	private Integer precioVenta;

	public Producto() {

	}

	public Producto(Integer codigo, String nombreProducto, Integer nitProveedor, Integer precioCompra, Integer ivaCompra,
			Integer precioVenta) {
		this.codigo = codigo;
		this.nombreProducto = nombreProducto;
		this.nitProveedor = nitProveedor;
		this.precioCompra = precioCompra;
		this.ivaCompra = ivaCompra;
		this.precioVenta = precioVenta;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getNombreProducto() {
		return nombreProducto;
	}

	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}

	public Integer getNitProveedor() {
		return nitProveedor;
	}

	public void setNitProveedor(Integer nitProveedor) {
		this.nitProveedor = nitProveedor;
	}

	public Integer getPrecioCompra() {
		return precioCompra;
	}

	public void setPrecioCompra(Integer precioCompra) {
		this.precioCompra = precioCompra;
	}

	public Integer getIvaCompra() {
		return ivaCompra;
	}

	public void setIvaCompra(Integer ivaCompra) {
		this.ivaCompra = ivaCompra;
	}

	public Integer getPrecioVenta() {
		return precioVenta;
	}

	public void setPrecioVenta(Integer precioVenta) {
		this.precioVenta = precioVenta;
	}

	@Override
	public String toString() {
		return "Producto [id=" + id + ", codigo=" + codigo + ", nombreProducto=" + nombreProducto + ", nitProveedor="
				+ nitProveedor + ", precioCompra=" + precioCompra + ", ivaCompra=" + ivaCompra + ", precioVenta="
				+ precioVenta + "]";
	}

}
