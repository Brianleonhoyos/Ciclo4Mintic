
import './App.css';
import Rutas from './Rutas';

import Navbar from "./Componentes/Navbar";




function App() {
  return (
    <div className="App">
      {/* <div><Navbar/></div> */}
      <header className="header">
        <Navbar />
      </header>
      <div>
        <Rutas />
      </div>
      <div class="pt-3 mt-4 text-center border-top">
        Equipo 3 Ciclo 4A Misión Tic - © 2021
      </div>
    </div>
  );
}

export default App;
