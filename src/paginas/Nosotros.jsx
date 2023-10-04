import React from 'react'
import Navbar from '../nav_footer/Navbar'
import Footer from '../nav_footer/Footer'

import portada from "../imagenes/pic_portada.jpeg"
import "../estilos/nosotros.css"

const Nosotros = () => {
  return (
    <div>
      <Navbar/>
      <div className='div_main_container'>
        <img src={portada} className="imagen_portada" alt="EFIMERA" />
        <h1 className='title_nosotros'>Nosotros</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Nosotros
