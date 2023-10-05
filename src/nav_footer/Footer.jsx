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
            <a href="https://www.facebook.com/profile.php?id=100089363600823">Facebook</a>
            <a href="https://www.instagram.com/efimerastudio/">Instagram</a>
            <a href="https://www.pinterest.com.mx/efimerastudiointeriorismo/?invite_code=41cf5551a9894f12bade93ba2180eb8c&sender=408138922389026731">Pinterest</a>
            <a href="https://www.tiktok.com/@efimerastudio?_t=8dZwe6TExtd&_r=1">Tiktok</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
