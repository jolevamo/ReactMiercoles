import { servicioCanciones } from '../services/servicioCanciones.js'

//Necesito usar el hook Usestate
//Para almacenar la respuesta del servicio de forma global

import { useState, useEffect } from 'react'

export function Music(){

    //Creando mi primer Usestate
    
    const[canciones,setCanciones]=useState(null)
    const[estamosCargando, setEstamosCargando]=useState(true)
    //Usando mi primer useefect

    useEffect(function(){
        servicioCanciones()
        .then(function(respuesta){
            setCanciones(respuesta)
            setEstamosCargando(false)
        })
        
    },[])

    console.log(canciones)

    if (estamosCargando==true) {
        

        return(
            <>
            <h1>Estamos cargando....</h1>
            </>
        )
    }else{
        return(
            
            <>
            <h1>Estan listas las canciones</h1>
            <div className="row row-cols-1 row-cols-md-5 g-0 mt-5">
            {
                canciones.tracks.map(function(cancion){
                    return(
                        <>
                        <div className="col mt-3">
                        <div className="card h-100">
                            <img src={cancion.album.images[1].url} alt={cancion.album.name} className="img-fluid w-100"></img>
                            <h5>{cancion.name}</h5>
                            <audio src={cancion.preview_url}controls></audio>                            
                        </div>
                        </div>  
                        </>
                    )
                })
            }
            </div>
            </>
            
        )
    }


}