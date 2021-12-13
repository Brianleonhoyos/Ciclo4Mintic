package co.edu.unbosque.mVentas.modelo;

public class Reporte {

	private Integer cedula;
	private Double valorTotal;

	public Reporte() {

	}

	public Reporte(Integer cedula, Double valorTotal, Double totalVentas) {
		super();
		this.cedula = cedula;
		this.valorTotal = valorTotal;
	}

	public Integer getCedula() {
		return cedula;
	}

	public void setCedula(Integer cedula) {
		this.cedula = cedula;
	}

	public Double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}

	@Override
	public String toString() {
		return "Reporte [cedula=" + cedula + ", valorTotal=" + valorTotal + "]";
	}

}