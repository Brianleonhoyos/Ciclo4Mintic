import logo from './logo.svg';
import './App.css';
import Main from './Rutas/MainRutas';
import { useAuth0 } from '@auth0/auth0-react';


import Rutas from './Rutas/Rutas';


function App() {
  const {isAuthenticated} = useAuth0();
  
  return (
    //Fuera del div es zona javascript, dentro es zona html

    <div className="App">
      <header className="App-header">
        
        {isAuthenticated ? <>
        <Rutas/>
        </>:<Main/>
        }
        
      </header>
    </div>
  );
}

export default App;
