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
import project_1 from "../proyectos/C50/c50_1.jpg"
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

      <div className='projects_preview_home'>
        <h1>Nuestros proyectos:</h1>

        <div className='proyectos_de_vista_previa'>
          <div className='projects_div_home'>
            <div className='project_container'>
              <a href="/" className='projects_container_link'>
                <img src={project_1} alt="EFIMERA" />
                <h2>Cantina 50</h2>
              </a>
            </div>
          </div>
          <div className='projects_div_home'>
            <div className='project_container'>
              <a href="/" className='projects_container_link'>
                <img src={project_2} alt="EFIMERA" />
                <h2>Enzo A54</h2>
              </a>
            </div>
          </div>
          <div className='projects_div_home'>
            <div className='project_container'>
              <a href="/" className='projects_container_link'>
                <img src={project_3} alt="EFIMERA" />
                <h2>Casa RLP</h2>
              </a>
            </div>
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