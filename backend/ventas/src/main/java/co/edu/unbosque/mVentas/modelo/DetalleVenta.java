package co.edu.unbosque.mVentas.modelo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "detalleVentas")
public class DetalleVenta {
	@Id
	private String id;

	private Integer cantidadProducto;
	private Integer codigoProducto;
	private Double valorTotal;
	private Double valorVenta;
	private Double valorIva;

	public DetalleVenta() {

	}

	public DetalleVenta(Integer cantidadProducto, Integer codigoProducto, Double valorTotal, Double valorVenta,
			Double valorIva) {
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

	public Double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public Double getValorVenta() {
		return valorVenta;
	}

	public void setValorVenta(Double valorVenta) {
		this.valorVenta = valorVenta;
	}

	public Double getValorIva() {
		return valorIva;
	}

	public void setValorIva(Double valorIva) {
		this.valorIva = valorIva;
	}

	@Override
	public String toString() {
		return "DetalleVenta [id=" + id + ", cantidadProducto=" + cantidadProducto + ", codigoProducto="
				+ codigoProducto + ", valorTotal=" + valorTotal + ", valorVenta=" + valorVenta + ", valorIva="
				+ valorIva + "]";
	}

	
}
