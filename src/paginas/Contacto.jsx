import React from 'react'
import Navbar from '../nav_footer/Navbar'
import Footer from '../nav_footer/Footer'
import "../estilos/contacto.css"

import portada from "../imagenes/portada_contacto.png"
import mapa from "../imagenes/mapa_efimera.png"
import telefono from "../imagenes/telefono.png"
import email from "../imagenes/email.png"
import pin from "../imagenes/pin.png"
import reloj from "../imagenes/reloj.png"

const Contacto = () => {
  return (
    <div className='contacto_main_container'>
        <Navbar/>

        <div className='div_portada_contacto'>
            <img src={portada} className='imagen_portada' alt="EFIMERA" />
            <h1 className='title_contacto'>Contacto</h1>
        </div>
        <div className='div_map_and_info_main_container'>
            <h1>A un paso de descubrir nuestro mundo sensorial:</h1>
            <div className='div_contact_second_container'>
                <a href="https://maps.app.goo.gl/e6KyWYmnX4EfQUZA7" className='link_mapa'>
                    <img src={mapa} alt="MAPA GOOGLE MAPS EFIMERA" />
                </a>
                <div className='div_adress_email_phone'>
                    <div className='div_info_contact'>
                        <img src={telefono} alt="EFIMERA" />
                        <p>+52 999 122 8679</p>
                    </div>
                    <div className='div_info_contact'>
                        <img src={email} alt="EFIMERA" />
                        <p>efimerastudiointeriorismo@gmail.com</p>
                    </div>
                    <div className='div_info_contact'>
                        <img src={pin} alt="EFIMERA" />
                        <p>Av García Lavín Calle 27 No. 318 Local 15 97113 Mérida, México</p>
                    </div>
                    <div className='div_info_contact'>
                        <img src={reloj} alt="EFÍMERA" />
                        <ul className='schedule_list'>
                            <li>Lunes: 9:00 - 14:00 / 15:00 - 18:00</li>
                            <li>Martes: 9:00 - 14:00 / 15:00 - 18:00</li>
                            <li>Miércoles: 9:00 - 14:00 / 15:00 - 18:00</li>
                            <li>Jueves: 9:00 - 14:00 / 15:00 - 18:00</li>
                            <li>Viernes: 9:00 - 14:00 / 15:00 - 18:00</li>
                            <li>Sábado: 9:00 - 14:00</li>
                            <li>Domingo: Cerrado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Contacto