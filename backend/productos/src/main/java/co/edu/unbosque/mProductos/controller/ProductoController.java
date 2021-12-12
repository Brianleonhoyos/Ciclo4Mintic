package co.edu.unbosque.mProductos.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

import co.edu.unbosque.mProductos.modelo.Producto;
import co.edu.unbosque.mProductos.repository.ProductoRepository;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, 
		RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/productos")
public class ProductoController {
	
	@Autowired
	ProductoRepository producRepo;
	
	@PostMapping("/guardar")
	  public ResponseEntity<Producto> createProducto(@RequestBody Producto produc) {
		  try {
			    Producto producto = producRepo.save(new Producto(produc.getCodigo(), produc.getNombreProducto(), 
			    		produc.getNitProveedor(), produc.getPrecioCompra(), produc.getIvaCompra(), produc.getPrecioVenta()));
			    return new ResponseEntity<>(producto, HttpStatus.CREATED);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	  }
	
	 @GetMapping("/listar")
	  public ResponseEntity<List<Producto>> getAllProductos(@RequestParam(required = false) Integer codigo) {
		  try {
			    List<Producto> productos = new ArrayList<Producto>();

			    if (codigo == null)
			    	producRepo.findAll().forEach(productos::add);
			    else
			    	producRepo.findByCodigo(codigo).forEach(productos::add);

			    if (productos.isEmpty()) {
			      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			    }

			    return new ResponseEntity<>(productos, HttpStatus.OK);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	  }
	 
	 @PutMapping("/actualizar/{nit}")
	  public ResponseEntity<Producto> updateProducto(@PathVariable("nit") Integer nit, @RequestBody Producto producto) {
		  Optional<Producto> productoData = producRepo.findByNitProveedor(nit);    
		  if (productoData.isEmpty()) {
			  Producto produc = productoData.get();
			    produc.setCodigo(producto.getCodigo());
			    produc.setNombreProducto(producto.getNombreProducto());
			    produc.setNitProveedor(producto.getNitProveedor());
			    produc.setPrecioCompra(producto.getPrecioCompra());
			    produc.setIvaCompra(producto.getIvaCompra());
			    produc.setPrecioVenta(producto.getPrecioCompra());
			    return new ResponseEntity<>(producRepo.save(produc), HttpStatus.OK);
		 } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);		    
		  }
	  }

	 @DeleteMapping("/eliminar/{codigo}")
	 public ResponseEntity<HttpStatus> deleteProducto(@PathVariable("codigo") Integer codigo) {
	   try {
		   producRepo.deleteByCodigo(codigo);
	     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	   } catch (Exception e) {
	     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	   }
	 }

	 @DeleteMapping("/eliminar")
	 public ResponseEntity<HttpStatus> deleteAllProductos() {
	   try {
		   producRepo.deleteAll();
	     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	   } catch (Exception e) {
	     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	   }
	 }
	 
	 @PostMapping("/guardarArchivo")
	 public ResponseEntity<String> saveCSV (@RequestBody List<Producto> productos){
		 try {
			if(productos.isEmpty()) {
				return new ResponseEntity<String>("El archivo esta vacio", HttpStatus.NOT_FOUND);
			}else {
				deleteAllProductos();
				producRepo.saveAll(productos);
				return new ResponseEntity<String>("Carga exitosa", HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	 }
	 
}
