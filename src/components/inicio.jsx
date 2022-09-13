import React,{useState,useEffect} from "react"
import {Link,useParams} from "react-router-dom"
import { todos_Personajes,siguiente,atras} from "../funciones/funciones"

const Inicio = ()=>{
    const {pagina}  = useParams()
    const [personajes,setPersonajes] = useState(null)
    const [page, setPage] = useState(pagina)
    const [vivo, setVivo] = useState("")
    
    useEffect(()=>{
      todos_Personajes(setPersonajes,page)          
    },[])

    return(
        <div>
        <div className="contenedor_personajes">
          {personajes != null ?(
             personajes.map(personaje =>( 
                <div className="contenedor_pj" key={personaje.id}>
                    <img className="imagen_pj" src={personaje.image}  />
                    <h2 className="h2_pj"> {personaje.name}</h2>
                    <div className="status">
                    <div className={personaje.status === "Alive"? "status_color_alive" : personaje.status === "Dead"? "status_color_dead": "status_color_unknown"}></div>
                    </div>
                    <h2 className="status_h2"> status: {personaje.status} </h2>
                    
                    <Link to={`/personajes/${personaje.id}/${page}`}>more info</Link> </div>
                    
                    
             ))
          ):(
           "no hay pj"
          )}
                
        </div>

        <div className="contenedor_botones">
        <button className="next" type="sumbit" onClick={()=>{atras(setPage,page); }}> atras
         </button>

         <button className="back" type="sumbit" onClick={()=>{siguiente(setPage,page); }}> siguiente
         </button>
         
         </div>  
        </div>
    )
}

export default Inicio