
import React, { useState } from 'react'
import Navbar from '../nav_footer/Navbar'
import Footer from '../nav_footer/Footer'
import "../estilos/proyectos.css"

import portada from "../imagenes/portada_proyectos.png"

import c50 from "../proyectos/C50/c50_1.jpg"

const Proyectos = () => {

  return (
    <div>
        <Navbar/>

        <div className='div_portada_proyectos'>
            <img src={portada} className='imagen_portada' alt="EFIMERA" />
            <h1 className='title_proyectos'>Creaciones</h1>
        </div>
        <div className='proyectos_list_main_container'>
            <h1>Descubre nuestros espacios y creaciones sensoriales:</h1>

            <div className='proyecto_list_div'>
                <a href="#" className='link_to_carousel_project' >
                    <img src={c50} alt="EFIMERA" />
                    <h2>Cantina 50</h2>
                </a>
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Proyectos
