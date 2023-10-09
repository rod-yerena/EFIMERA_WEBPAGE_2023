
import React from 'react'
import Navbar from '../nav_footer/Navbar'
import Footer from '../nav_footer/Footer'
import "../estilos/blog.css"

import portada from "../imagenes/portada_blog.png"

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <div className='div_portada_proyectos'>
            <img src={portada} className="imagen_portada" alt="EFIMERA" />
            <h1 className='title_blog'>Blog</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog

