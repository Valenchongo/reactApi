import {BrowserRouter, Routes, Route,HashRouter} from "react-router-dom"
import './App.css';
import Personaje from "./components/personaje"
import Inicio from "./components/inicio"
import Logo from "./imagenes/logo.png"

function App() {
  return (
    <div >
    <HashRouter hashType="hashbang">
    <header> <div className="logo"> <img className="logo" src={Logo}  /></div></header>
     <Routes>
      <Route path="/:pagina" element={<Inicio></Inicio>}> </Route>
   
      <Route path="/personajes/:id/:page" element={<Personaje></Personaje>}> </Route>
     </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
