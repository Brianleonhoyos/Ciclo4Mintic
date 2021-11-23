package co.edu.unbosque.mVentas.modelo;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ventas")
public class Venta {

	@Id
	private String id;

	private Integer cedulaCliente;
	private Integer codigoVenta;
	private ArrayList detalleVenta;
	private Number ivaVenta;
	private Number totalVenta;
	private Number volorVenta;

	public Venta() {

	}

	public Venta(Integer cedulaCliente, Integer codigoVenta, ArrayList detalleVenta, Number ivaVenta, Number totalVenta,
			Number volorVenta) {
		this.cedulaCliente = cedulaCliente;
		this.codigoVenta = codigoVenta;
		this.detalleVenta = detalleVenta;
		this.ivaVenta = ivaVenta;
		this.totalVenta = totalVenta;
		this.volorVenta = volorVenta;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getCedulaCliente() {
		return cedulaCliente;
	}

	public void setCedulaCliente(Integer cedulaCliente) {
		this.cedulaCliente = cedulaCliente;
	}

	public Integer getCodigoVenta() {
		return codigoVenta;
	}

	public void setCodigoVenta(Integer codigoVenta) {
		this.codigoVenta = codigoVenta;
	}

	public ArrayList getDetalleVenta() {
		return detalleVenta;
	}

	public void setDetalleVenta(ArrayList detalleVenta) {
		this.detalleVenta = detalleVenta;
	}

	public Number getIvaVenta() {
		return ivaVenta;
	}

	public void setIvaVenta(Number ivaVenta) {
		this.ivaVenta = ivaVenta;
	}

	public Number getTotalVenta() {
		return totalVenta;
	}

	public void setTotalVenta(Number totalVenta) {
		this.totalVenta = totalVenta;
	}

	public Number getVolorVenta() {
		return volorVenta;
	}

	public void setVolorVenta(Number volorVenta) {
		this.volorVenta = volorVenta;
	}

	@Override
	public String toString() {
		return "Venta [id=" + id + ", cedulaCliente=" + cedulaCliente + ", codigoVenta=" + codigoVenta
				+ ", detalleVenta=" + detalleVenta + ", ivaVenta=" + ivaVenta + ", totalVenta=" + totalVenta
				+ ", volorVenta=" + volorVenta + "]";
	}

	
}
