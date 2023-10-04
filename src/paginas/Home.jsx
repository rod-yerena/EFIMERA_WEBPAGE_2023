import React from 'react'
import Navbar from '../nav_footer/Navbar'

import portada from "../imagenes/pic_portada.jpeg"
import logo_efimera from "../imagenes/efimera_studio_white.png"
import "../estilos/home.css"
import Footer from '../nav_footer/Footer'

import vela from "../imagenes/vela.png"
import interiorismo from "../imagenes/casa_moderna.png"
import arquitectura from "../imagenes/arquitectura.png"
import mesa from "../imagenes/img_mesa.jpeg"

const Home = () => {
  return (
    <div>

      <Navbar/>
      <div className='div_main_container'>
        <img src={portada} className="imagen_portada" alt="EFIMERA" />
        <img src={logo_efimera} className="logo_efimera"alt="EFIMERA" />
      </div>

      <div className='descript_efimera'>
        <p>Nuestra firma se define con elementos como:</p>
        <div className='services_container'>
          <div className='service_box'>
            <img src={vela} alt="EFIMERA" />
            <h2>Elementos sensoriales</h2>
          </div>
          <div className='service_box'>
            <img src={interiorismo} alt="EFIMERA" />
            <h2>Interiorismo exquisito</h2>
          </div>
          <div className='service_box'>
            <img src={arquitectura} alt="EFIMERA" />
            <h2>Arquitectura vanguardista</h2>
          </div>
        </div>
      </div>

      <div className='offers_container'>
        <img src={mesa} alt="EFIMERA" />
        <div className='div_offers_text'>
          <h2>Que ofrecemos:</h2>
          <ul className='list_offers'>
            <li>Asesoría de diseño durante el desarrollo de tu proyecto</li>
            <li>Transformación de tus ideas a un proyecto conceptual</li>
            <li>Diseño de anteproyecto previo al desarrollo de la obra</li>
            <li>Diseño de proyecto ejecutivo</li>
            <li>Cotización de la obra</li>
            <li>Ejecución y supervisión de la obra</li>
          </ul>
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default Home