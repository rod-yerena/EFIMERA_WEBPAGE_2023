import React from 'react'
import Navbar from '../nav_footer/Navbar'
import Footer from '../nav_footer/Footer'

import portada from "../imagenes/portada_nosotros.png"
import img_mesa from "../imagenes/img_mesa.jpg"
import img_vela from "../imagenes/img_vela.png"
import img_casa from "../imagenes/img_casa.png"
import img_cuarto from "../imagenes/img_cuarto.png"
import "../estilos/nosotros.css"

const Nosotros = () => {
  return (
    <div>
      <Navbar/>

      <div className='div_main_container_nosotros'>
        <img src={portada} className="imagen_portada" alt="EFIMERA" />
        <h1 className='title_nosotros'>Nosotros</h1>
      </div>

      <div className='div_about_us_text_left'>
          <p>Somos una firma especializada en crear experiencias sensoriales y captar 
            la belleza de aquello que no dura para siempre pero que deja una huella 
            constante en nuestras vidas.</p>
          <img src={img_mesa} alt="EFIMERA" />
      </div>
      <div className='div_about_us_text_right'>
          <p>Somos la manifestación de lo fugaz, de lo transitorio. Representamos la idea de que la belleza y la creatividad se pueden 
                encontrar en los momentos breves y fugaces de la vida.</p>
          <img src={img_vela} alt="EFIMERA" />
      </div>
      <div className='div_about_us_text_left'>
          <p>Buscamos llamar la atención a través de nuestra creatividad en el diseño de interiores, enfocados en la búsqueda 
                de despertar emociones y la creación de ambientes cautivadores.</p>
          <img src={img_casa} alt="EFIMERA" />
      </div>
      <div className='div_about_us_text_right'>
          <p>Creemos en la importancia de crear espacios que no solo sean visualmente atractivos, sino que 
                también se sientan acogedores y despierten sensaciones agradables.</p>
          <img src={img_cuarto} alt="EFIMERA" />
      </div>
      

      <Footer/>
    </div>
  )
}

export default Nosotros
