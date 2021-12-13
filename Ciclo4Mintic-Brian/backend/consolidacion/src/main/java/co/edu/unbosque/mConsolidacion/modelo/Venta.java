package co.edu.unbosque.mConsolidacion.modelo;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ventas")
public class Venta {

	@Id
	private String id;

	private Integer cedulaCliente;
	private Integer codigoVenta;
	private ArrayList<DetalleVenta> detalleVenta= new ArrayList<DetalleVenta>();
	private Double ivaVenta;
	private Double  totalVenta;
	private Double  volorVenta;

	public Venta() {

	}

	public Venta(Integer cedulaCliente, Integer codigoVenta, ArrayList<DetalleVenta> detalleVenta, Double  ivaVenta, Double  totalVenta,
			Double  volorVenta) {
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

	public ArrayList<DetalleVenta> getDetalleVenta() {
		return detalleVenta;
	}

	public void setDetalleVenta(ArrayList<DetalleVenta> detalleVenta) {
		this.detalleVenta = detalleVenta;
	}

	public Double  getIvaVenta() {
		return ivaVenta;
	}

	public void setIvaVenta(Double  ivaVenta) {
		this.ivaVenta = ivaVenta;
	}

	public Double  getTotalVenta() {
		return totalVenta;
	}

	public void setTotalVenta(Double  totalVenta) {
		this.totalVenta = totalVenta;
	}

	public Double  getVolorVenta() {
		return volorVenta;
	}

	public void setVolorVenta(Double  volorVenta) {
		this.volorVenta = volorVenta;
	}

	@Override
	public String toString() {
		return "Venta [id=" + id + ", cedulaCliente=" + cedulaCliente + ", codigoVenta=" + codigoVenta
				+ ", detalleVenta=" + detalleVenta + ", ivaVenta=" + ivaVenta + ", totalVenta=" + totalVenta
				+ ", volorVenta=" + volorVenta + "]";
	}

	
}
