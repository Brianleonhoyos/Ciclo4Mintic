package co.edu.unbosque.GenericaEQ3.Modelo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "usuarios")
public class Usuario {
		
		@Id
		private String id;
		private String usuario;
		private String password;
		
		
		public Usuario() {
		}


		public Usuario(String usuario, String password) {
			this.usuario = usuario;
			this.password = password;
		}


		public String getUsuario() {
			return usuario;
		}


		public void setUsuario(String usuario) {
			this.usuario = usuario;
		}


		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;
		}

}		

