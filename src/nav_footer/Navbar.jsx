import React from 'react'

import logo from "../imagenes/logo_white.png"
import facebook_icon from "../iconos/facebook.svg"
import instagram_icon from "../iconos/instagram.svg"
import pinterest_icon from "../iconos/pinterest.svg"
import tiktok_icon from "../iconos/tiktok.svg"
import "../estilos/navbar.css"

const Navbar = () => {
  return (
    <div className='efimera_navbar'>
       <a href="/">
        <img src={logo} alt="EFIMERA" />
       </a>
        <div className='div_nav_links'>
            <a href="/about">Nosotros</a>
            <a href="/">Espacios</a>
            <a href="/">Creaciones</a>
            <a href="/">Contacto</a>
            <div className='div_social_medias'>
              <a href="/" className='link_icon'>
                <img src={facebook_icon} alt="facebook" />
              </a>
              <a href="/" className='link_icon'>
                <img src={instagram_icon} alt="instagram" />
              </a>
              <a href="/" className='link_icon'>
                <img src={pinterest_icon} alt="pinterest" />
              </a>
              <a href="/" className='link_icon'>
                <img src={tiktok_icon} alt="tiktok" />
              </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar