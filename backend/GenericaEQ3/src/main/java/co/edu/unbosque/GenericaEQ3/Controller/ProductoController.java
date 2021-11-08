package co.edu.unbosque.GenericaEQ3.Controller;

import java.util.*;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import co.edu.unbosque.GenericaEQ3.Modelo.Producto;
import co.edu.unbosque.GenericaEQ3.Repository.ProductoRepository;



/**
 * @author Brian Leon
 *
 */
@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ProductoController {

	@Autowired
	  ProductoRepository productoRepository;

	  @GetMapping("/Productos")
	  public ResponseEntity<List<Producto>> getAllProductos(@RequestParam(required = false) long codigo) {
		  try {
			    List<Producto> productos = new ArrayList<Producto>();

			    if (codigo == 0) //Objects.isNull(longValue)
			      productoRepository.findAll().forEach(productos::add);
			    else
			      productoRepository.findByCodigo(codigo).forEach(productos::add);

			    if (productos.isEmpty()) {
			      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			    }

			    return new ResponseEntity<>(productos, HttpStatus.OK);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	  }
	  
	  @PostMapping("/Productos")
	  public ResponseEntity<Producto> createProducto(@RequestBody Producto producto) {
		  try {
			  Producto _producto = productoRepository.save(new Producto(producto.getCodigo(),producto.getNombre_producto(),producto.getNitproveedor(),producto.getPrecio_compra(),producto.getIvacompra(),producto.getPrecio_venta()));
			    return new ResponseEntity<>(_producto, HttpStatus.CREATED);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	  }

	  private String filename;
	    //Save the uploaded file to this folder
	  private static String UPLOADED_FOLDER = "/GenericaEQ3/src/Archivos";
	 
	    /*
	    ** Página de carga de archivos
	    */
	 
	    @GetMapping("/upload")
	    public String upload(){
	        return "upload";
	    }
	 
	    @PostMapping("/upload")
	    public String singleFileUpload(@RequestParam("file") MultipartFile file,
	                                   RedirectAttributes redirectAttributes) {
	 
	        if (file.isEmpty()) {
	            redirectAttributes.addFlashAttribute("message", "¡El archivo está vacío! ¡Seleccione un archivo no vacío para cargar!");
	            return "redirect:/uploadStatus";
	        }
	 
	        try {
	            // Obtenga el archivo y guárdelo en la carpeta especificada
	            byte[] bytes = file.getBytes();
	            filename = file.getOriginalFilename();
	            Path path = Paths.get(UPLOADED_FOLDER + filename);
	            Files.write(path, bytes);
	 
	            redirectAttributes.addFlashAttribute("message", "Has subido correctamente" + filename + "', el tamaño del archivo es aproximadamente" +bytes.length/1024+" KB.");
	 
	        }
	        catch (IOException e) {
	            e.printStackTrace();
	        }
	 
	        return "redirect:/uploadStatus";
	    }
	 
	    /*
	         ** Página de procesamiento de información de carga de archivos
	     */
	    @GetMapping("/uploadStatus")
	    public String uploadStatus(){
	        return "uploadStatus";
	    }
}
