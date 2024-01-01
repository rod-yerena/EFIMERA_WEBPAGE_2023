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

//PARA VISUALIZACION DE PROYECTOS:
import project_1 from "../proyectos/TORRE_UNO/torre_uno_portada.png"
import project_2 from "../proyectos/ENSO_A54/enzo_1.jpg"
import project_3 from "../proyectos/CASA_RLP/rlp_1.jpg"

const Home = () => {
  return (
    <div>

      <Navbar/>
      <div className='div_main_container'>
        <img src={portada} className="imagen_portada" alt="EFIMERA" />
        <img src={logo_efimera} className="logo_efimera"alt="EFIMERA" />
      </div>

      <div className='descript_efimera'>
        <p>Somos una firma especializada en crear experiencias sensoriales y captar 
            la belleza de aquello que no dura para siempre pero que deja una huella 
            constante en nuestras vidas.</p>
      </div>

      <div className='offers_container'>
        <div className='offer_div_1'>
          <img src={mesa} alt="EFIMERA" />
          <p>Te ofrecemos asesoría de diseño durante el desarrollo de tu proyecto</p>
        </div>
        <div className='offer_div_2'>
          <img src={mesa} alt="EFIMERA" />
          <p>Transformamos tu ideas a un proyecto conceptual</p>
        </div>
        <div className='offer_div_1'>
          <img src={mesa} alt="EFIMERA" />
          <p>Realizamos tu anteproyecto previo al desarrollo de la obra</p>
        </div>
        <div className='offer_div_2'>
          <img src={mesa} alt="EFIMERA" />
          <p>Armamos y creamos tu diseño de proyecto ejecutivo</p>
        </div>
        <div className='offer_div_1'>
          <img src={mesa} alt="EFIMERA" />
          <p>Calculamos y realizamos la cotización de tu obra</p>
        </div>
        <div className='offer_div_2'>
          <img src={mesa} alt="EFIMERA" />
          <p>Ejecutamos y damos supervisión a tu obra</p>
        </div>
      </div>

      <div className='projects_preview_home'>
        <h1>Nuestros proyectos:</h1>

        <div className='project_home_main_container'>
          
          <div className='block_proyect_preview'>
            <a href="/torre_uno" className='imgLinkToProjectHome'>
              <img src={project_1} alt="EFIMERA" />
            </a>
            <p>Torre Uno</p>
          </div>
          <div className='block_proyect_preview'>
            <a href="/torre_uno" className='imgLinkToProjectHome'>
              <img src={project_2} alt="EFIMERA" />
            </a>
            <p>Enso A54</p>
          </div>
          <div className='block_proyect_preview'>
            <a href="/torre_uno" className='imgLinkToProjectHome'>
              <img src={project_3} alt="EFIMERA" />
            </a>
            <p>Casa RLP</p>
          </div>

        </div>

        <div className='see_more_projects'>
          <a href="/projects" className='link_ver_mas_proyectos' >
            <button>Ver más proyectos</button>
          </a>
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default Home