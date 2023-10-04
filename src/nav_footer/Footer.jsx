import React from 'react'

import logo_efimera from "../imagenes/logo_black.png"
import "../estilos/footer.css"

const Footer = () => {
  return (
    <div className='footer_div'>
        <a href="/">
            <img src={logo_efimera} alt="EFIMERA" />
        </a>
        <p>Av García Lavín Calle 27 No. 318 Local 15 97113 Mérida, México</p>
        <p>efimerastudiointeriorismo@gmail.com</p>
        <p>EFÍMERA Studio Interiorismo &copy;2023. Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer
