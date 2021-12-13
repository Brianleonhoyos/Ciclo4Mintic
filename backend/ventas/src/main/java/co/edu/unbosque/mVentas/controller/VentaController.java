package co.edu.unbosque.mVentas.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unbosque.mVentas.modelo.Reporte;
import co.edu.unbosque.mVentas.modelo.Venta;
import co.edu.unbosque.mVentas.repository.VentaRepository;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, 
		RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/ventas")
public class VentaController {
	@Autowired
	VentaRepository ventaRepo;

	@PostMapping("/guardar")
	public ResponseEntity<Venta> createVenta(@RequestBody Venta vent) {
		try {
			if (ventaRepo.existsByCodigoVenta(vent.getCodigoVenta())) {
				return new ResponseEntity<>(null, HttpStatus.FOUND);
			} else {
				Venta venta = ventaRepo.save(new Venta(vent.getCedulaCliente(), vent.getCodigoVenta(),
						vent.getDetalleVenta(), vent.getIvaVenta(), vent.getTotalVenta(), vent.getVolorVenta()));
				return new ResponseEntity<>(venta, HttpStatus.CREATED);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/listar")
	public ResponseEntity<List<Venta>> getAllVentas(@RequestParam(required = false) Integer codigodeVenta) {
		try {
			List<Venta> ventas = new ArrayList<Venta>();

			if (codigodeVenta == null)
				ventaRepo.findAll().forEach(ventas::add);
			else
				ventaRepo.findByCodigoVenta(codigodeVenta).forEach(ventas::add);

			if (ventas.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(ventas, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/actualizar/{codigoVenta}")
	public ResponseEntity<Venta> updateVenta(@PathVariable("codigoVenta") Integer codigodeVenta, @RequestBody Venta venta) {
		List<Venta> ventas = ventaRepo.findByCodigoVenta(codigodeVenta);
		if (ventas.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		} else {

			Venta vent = ventas.get(0);
			//System.out.print(vent);

			vent.setCedulaCliente(venta.getCedulaCliente());
			vent.setCodigoVenta(venta.getCodigoVenta());
			vent.setDetalleVenta(venta.getDetalleVenta());
			vent.setIvaVenta(venta.getIvaVenta());
			vent.setTotalVenta(venta.getTotalVenta());
			vent.setVolorVenta(venta.getVolorVenta());
			return new ResponseEntity<>(ventaRepo.save(vent), HttpStatus.OK);
		}
	}
	
	@DeleteMapping("/eliminar/{codigoVenta}")
	public ResponseEntity<HttpStatus> deleteVenta(@PathVariable("codigoVenta") Integer codigo) {
		try {
			ventaRepo.deleteByCodigoVenta(codigo);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/eliminarTodos")
	public ResponseEntity<HttpStatus> deleteAllVentas() {
		try {
			ventaRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/reporteClientes")
	public ResponseEntity <List<Reporte>> getReporteCliente() {

		List<Reporte> reportes = new ArrayList<Reporte>();
		List<Venta> ventas = ventaRepo.findAll();
		List<Double> totalventas = new ArrayList<Double>();
		double SumaVentas = 0;

		for (int i = 0; i < ventas.size(); i++) {
			Venta vent = ventas.get(i);
			i = i + 1;
			Double suma = vent.getTotalVenta();
			for (int j = 0; j < ventas.size(); j++) {
				j = j + 1;
				Venta ve = ventas.get(j);
				if (vent.getCedulaCliente() == ve.getCedulaCliente()) {
					Reporte reporte = new Reporte();
					suma = suma + ve.getTotalVenta();
					int cedula = vent.getCedulaCliente();
					reporte.setCedula(cedula);
					reporte.setValorTotal(suma);
					totalventas.add(suma);
					reportes.add(reporte);
				}
				
			}
			
		}
		for (int k = 0; k < totalventas.size(); k++) {
			SumaVentas += totalventas.get(k);
		}
		System.out.print(reportes);
		//System.out.print(totalventas);
		//for (int i = 0; i < totalventas.size(); i++) {
		//	SumaVentas += totalventas.get(i);
		//}
		// reportes.add(SumaVentas);
		System.out.print("TotalVentas: " + SumaVentas);
		// System.out.print(reportes);
		return new ResponseEntity<>(reportes, HttpStatus.OK);
	}

}
