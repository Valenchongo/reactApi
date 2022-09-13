import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import React from "react"
import { personaje_particualar,volver } from "../funciones/funciones"

const Personaje = ()=>{
    const [personaje,setPersonaje] = useState(null)
    const {id} = useParams()
    const {page} = useParams()
    useEffect(()=>{
       personaje_particualar(id,setPersonaje)
    },[])
    return(
        <div className="boton_pj">
            {
               personaje != null ?(
                  <div className="personaje_contenedor">
                    <img className="img_pj" src={personaje.image} alt="" />
                    <div className={personaje.status === "Alive"? "status_color_alive" : personaje.status === "Dead"? "status_color_dead": "status_color_unknown"}></div>
                     <h2>{personaje.name}</h2>

                     <div className="cont_info">
                      <div className="specie"> <h3>Species : {personaje.species} </h3></div>
                      <div className="specie"> <h3>Gender : {personaje.gender} </h3></div>
                      <div className="specie"> <h3>Type : { personaje.type ==""?("unknown"):personaje.type} </h3></div>
                      <div className="specie"> <h3>Origin : {personaje.origin.name} </h3></div>
                     
                     </div>
    
                   </div>
               ):(
                "no hay pj"
               ) 
            }
             <button onClick={()=>{volver(page)}} className="volver"> Back</button>
        </div>
    )
}

export default Personaje