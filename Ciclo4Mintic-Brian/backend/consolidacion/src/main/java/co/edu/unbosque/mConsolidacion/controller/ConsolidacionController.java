package co.edu.unbosque.mConsolidacion.controller;

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

import co.edu.unbosque.mConsolidacion.modelo.Venta;
import co.edu.unbosque.mConsolidacion.repository.VentaRepository;

@CrossOrigin(origins = "*", methods = { RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT,RequestMethod.DELETE })

@RestController
@RequestMapping("/ventas")
public class ConsolidacionController {
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
		// clientRepo.findByCedula(ced).is;
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

}
