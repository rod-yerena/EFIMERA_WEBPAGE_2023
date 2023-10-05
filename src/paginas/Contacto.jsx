import React from 'react'
import Navbar from '../nav_footer/Navbar'
import Footer from '../nav_footer/Footer'
import "../estilos/contacto.css"

import portada from "../imagenes/portada_contacto.png"
import mapa from "../imagenes/mapa_efimera.png"
import telefono from "../imagenes/telefono.png"
import email from "../imagenes/email.png"
import pin from "../imagenes/pin.png"

const Contacto = () => {
  return (
    <div className='contacto_main_container'>
        <Navbar/>

        <div className='div_portada_contacto'>
            <img src={portada} className='imagen_portada' alt="EFIMERA" />
            <h1 className='title_contacto'>Contacto</h1>
        </div>

        <div className='contact_main_div_info'>
            <h2>Estás a un paso de conocer nuestro mundo sensorial:</h2>
            <div className='contact_map_div'>
                <a href="https://maps.app.goo.gl/CEVzV1CPUaCpCdxAA">
                    <img src={mapa} className='img_mapa_efimera' alt="EFIMERA MAPA" />
                </a>
                <div className='contact_text_and_adress_info'>
                    <div className='svg_div_text'>
                        <img src={telefono} className="pin_adress" alt="EFIMERA" />
                        <p>+52 999 122 8679</p>
                    </div>
                    <div className='svg_div_text'>
                        <img src={email} className="pin_adress" alt="EFIMERA" />
                        <p>efimerastudiointeriorismo@gmail.com</p>
                    </div>
                    <div className='svg_div_text'>
                        <img src={pin} className="pin_adress" alt="EFIMERA" />
                        <p>Av García Lavín Calle 27 No. 318 Local 15, Mérida, Mexico, 97113</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Contacto