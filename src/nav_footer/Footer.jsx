import React from 'react'

import logo_efimera from "../imagenes/logo_black.png"
import "../estilos/footer.css"

const Footer = () => {
  return (
    <div className='footer_div'>
        <a href="/">
            <img src={logo_efimera} alt="EFIMERA" />
        </a>
        <div className='footer_info_container'>
          <div className='footer_info_texts'>
            <p>Av García Lavín Calle 27 No. 318 Local 15 97113 Mérida, México</p>
            <p>efimerastudiointeriorismo@gmail.com</p>
            <p>EFÍMERA Studio Interiorismo &copy;2023. Todos los derechos reservados.</p>
          </div>
          <div className='footer_social_medias'>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Pinterest</a>
            <a href="/">Tiktok</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
