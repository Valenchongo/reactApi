import axios from "axios"


const todos_Personajes = async (state,page) => {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  state(peticion.data.results)
}

const personaje_particualar = async (id,state)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data);
}

const siguiente = (state,pag) =>{
    if (pag<42){
        if(isNaN(pag)){
            pag=1
            pag++
            state(pag)   
            console.log(pag)
            window.location.href =`/${pag}`
        }else{
    pag++
    state(pag)   
    console.log(pag)
    window.location.href =`/${pag}`;
}    
}
}

const atras = (state,pag) =>{
    if (pag>1){
    pag--
    state(pag)   
    console.log(pag)
    window.location.href =`/${pag}`;
}
}
const volver = (pag) =>{
    window.location.href =`/${pag}`;
}
export {
    todos_Personajes,
    personaje_particualar,
    siguiente,
    atras,
    volver
    
}
