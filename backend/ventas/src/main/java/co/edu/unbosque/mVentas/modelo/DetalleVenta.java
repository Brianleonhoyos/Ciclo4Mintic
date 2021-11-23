package co.edu.unbosque.mVentas.modelo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "detalleVentas")
public class DetalleVenta {
	@Id
	private String id;

	private Integer cantidadProducto;
	private Integer codigoProducto;
	private Number valorTotal;
	private Number valorVenta;
	private Number valorIva;

	public DetalleVenta() {

	}

	public DetalleVenta(Integer cantidadProducto, Integer codigoProducto, Number valorTotal, Number valorVenta,
			Number valorIva) {
		this.cantidadProducto = cantidadProducto;
		this.codigoProducto = codigoProducto;
		this.valorTotal = valorTotal;
		this.valorVenta = valorVenta;
		this.valorIva = valorIva;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getCantidadProducto() {
		return cantidadProducto;
	}

	public void setCantidadProducto(Integer cantidadProducto) {
		this.cantidadProducto = cantidadProducto;
	}

	public Integer getCodigoProducto() {
		return codigoProducto;
	}

	public void setCodigoProducto(Integer codigoProducto) {
		this.codigoProducto = codigoProducto;
	}

	public Number getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(Number valorTotal) {
		this.valorTotal = valorTotal;
	}

	public Number getValorVenta() {
		return valorVenta;
	}

	public void setValorVenta(Number valorVenta) {
		this.valorVenta = valorVenta;
	}

	public Number getValorIva() {
		return valorIva;
	}

	public void setValorIva(Number valorIva) {
		this.valorIva = valorIva;
	}

	@Override
	public String toString() {
		return "DetalleVenta [id=" + id + ", cantidadProducto=" + cantidadProducto + ", codigoProducto="
				+ codigoProducto + ", valorTotal=" + valorTotal + ", valorVenta=" + valorVenta + ", valorIva="
				+ valorIva + "]";
	}

	
}
