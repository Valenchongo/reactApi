import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Personaje from "./components/personaje"
import Inicio from "./components/inicio"
import Logo from "./imagenes/logo.png"

function App() {
  return (
    <div >
    <BrowserRouter>
    <header> <div className="logo"> <img className="logo" src={Logo}  /></div></header>
     <Routes>
      <Route path="/:pagina" element={<Inicio></Inicio>}> </Route>
   
      <Route path="/personajes/:id/:page" element={<Personaje></Personaje>}> </Route>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
