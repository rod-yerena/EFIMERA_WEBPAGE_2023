import React from 'react'
import Navbar from '../nav_footer/Navbar'

import portada from "../imagenes/pic_portada.jpeg"
import logo_efimera from "../imagenes/efimera_studio_white.png"
import "../estilos/home.css"
import Footer from '../nav_footer/Footer'

const Home = () => {
  return (
    <div>

      <Navbar/>
      <div className='div_main_container'>
        <img src={portada} className="imagen_portada" alt="EFIMERA" />
        <img src={logo_efimera} className="logo_efimera"alt="EFIMERA" />
      </div>

      <div className='descript_efimera'>
        <p>
          Somos una firma especializada en crear experiencias
          sensoriales y captar la belleza de aquello que no dura
          para siempre, pero que deja una huella constante en
          nuestras vidas
        </p>
        <p>SE HIZO UN CAMBIO</p>
      </div>

      <Footer/>

    </div>
  )
}

export default Home