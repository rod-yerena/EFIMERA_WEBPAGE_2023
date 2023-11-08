import React from 'react'
import Navbar from '../nav_footer/Navbar'
import Footer from '../nav_footer/Footer'
import Carousel from '../carrusel/Carousel'
import "../estilos/torre_uno.css"

import portada from "../proyectos/TORRE_UNO/torre_uno_portada.png"
import torre_uno_1 from "../proyectos/TORRE_UNO/torre_uno_1.jpg"
import torre_uno_2 from "../proyectos/TORRE_UNO/torre_uno_2.png"
import torre_uno_3 from "../proyectos/TORRE_UNO/torre_uno_3.png"
import torre_uno_4 from "../proyectos/TORRE_UNO/torre_uno_4.png"
import torre_uno_5 from "../proyectos/TORRE_UNO/torre_uno_5.png"
import torre_uno_6 from "../proyectos/TORRE_UNO/torre_uno_6.png"

const Torre_Uno = () => {

  //const arrayImages = [torre_uno_1, torre_uno_2, torre_uno_3, torre_uno_4, torre_uno_5, torre_uno_6]

  return (
    <div>
        <Navbar/>
        <div className='div_portada_torre_uno'>
            <img src={portada} className='imagen_portada' alt="EFIMERA" />
            <div className='subdiv_portada_torre_uno_titles'>
              <h1>Torre Uno</h1>
              <p>Elevando la elegancia minimalística de Mérida Yucatán</p>
            </div>
        </div>
        <div className='div_info_torre_uno'>

          <div className='div_section_torre_uno'>
            <p>Efimera Studio Interiorismo, tuvo el privilegio de participar en el emocionante proyecto comercial 
              llamado "Torre Uno Oficina 902" en Mérida. Desde el principio, nos propusimos brindar una sensación 
              única y sumamente elegante a este espacio tan especial.</p>
            <img src={torre_uno_1} alt="EFIMERA" />
          </div>
          <div className='div_section_torre_uno'>
            <img src={torre_uno_2} alt="EFIMERA" />
            <p>Durante varios meses de arduo trabajo y dedicación, nuestro equipo se entregó por completo para hacer 
              realidad la visión de los clientes. Cada elección de diseño, cada elemento decorativo, fue meticulosamente 
              seleccionado para crear una atmósfera lujosa y sofisticada.</p>
          </div>
          <div className='div_section_torre_uno'>
            <p>Trabajamos de cerca con los clientes para entender sus necesidades y gustos únicos. Con esto en mente, 
              creamos un diseño que fusionara elementos modernos. Utilizamos materiales de alta calidad, como mármol, 
              vidrio, madera y metales preciosos, para realzar la elegancia del espacio.</p>
            <img src={torre_uno_3} alt="EFIMERA" />
          </div>
          <div className='div_section_torre_uno'>
            <img src={torre_uno_4} alt="EFIMERA" />
            <p>La iluminación desempeñó un papel crucial en la creación de una sensación única en Torre Uno. Cada rincón 
              fue cuidadosamente iluminado, con luces direccionales resaltando características arquitectónicas y creando 
              atmósferas cálidas y acogedoras. El juego de luces y sombras añadió profundidad y dimensión al diseño, 
              creando una experiencia visualmente impactante.</p>
          </div>
          <div className='div_section_torre_uno'>
            <p>El resultado final del proyecto Torre Uno en Mérida es un espacio que transmite una elegancia sofisticada 
              y única. Cada detalle ha sido cuidadosamente pensado y ejecutado, reflejando la calidad y dedicación que nos 
              caracteriza en Efimera Studio Interiorismo.</p>
            <img src={torre_uno_5} alt="EFIMERA" />
          </div>
          <div className='div_section_torre_uno'>
            <img src={torre_uno_6} alt="EFIMERA" />
            <p>Estamos inmensamente orgullosos del trabajo que hemos realizado y agradecidos por la confianza depositada en 
              nosotros. Esperamos que este espacio brinde a sus visitantes una experiencia única.
              En Efimera Studio Interiorismo, seguimos comprometidos con la creación de proyectos singulares y elegantes 
              que superen las expectativas de nuestros clientes</p>
          </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Torre_Uno

