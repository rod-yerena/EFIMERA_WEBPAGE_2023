
import React, { useState } from 'react'
import Navbar from '../nav_footer/Navbar'
import Footer from '../nav_footer/Footer'
import "../estilos/proyectos.css"

import portada from "../imagenes/portada_proyectos.png"
import c50 from "../proyectos/C50/c50_1.jpg"
import enso from "../proyectos/ENSO_A54/enzo_1.jpg"
import rlp from "../proyectos/CASA_RLP/rlp_1.jpg"
import meriden from "../proyectos/MERIDEN/meriden_1.png"
import legal_mid from "../proyectos/LEGAL_MID/legal_1.png"
import mia_mamma from "../proyectos/MIA_MAMMA/mia_mamma_1.jpg"
import torre_uno from "../proyectos/TORRE_UNO/torre_uno_1.jpg"


const Proyectos = () => {

    return (
        <div>
            <Navbar/>
            <div className='div_portada_proyectos'>
                <img src={portada} className="imagen_portada" alt="EFIMERA" />
                <h1 className='title_proyectos'>Espacios y Creaciones</h1>
            </div>
            <div className='div_proyectos_main_container'>

                <h1>Descrubre nuestros espacios y creaciones sensoriales:</h1>

               <div className='flujo_proyectos_div'>
                    <div className='block_one'>

                        <div className='bloc_prjct_one'>
                            <a href="#" className='link_prjct_one'>
                                <img src={enso} alt="EFIMERA" />
                            </a>
                            <p>Enso A54</p>
                        </div>
                        <div className='bloc_prjct_one'>
                            <a href="#" className='link_prjct_one'>
                                <img src={c50} alt="EFIMERA" />
                            </a>
                            <p>C50</p>
                        </div>

                    </div>
                    <div className='block_two'>
                        <div className='bloc_prjct_two'>
                            <a href="/torre_uno" className='link_prjct_two'>
                                <img src={torre_uno} alt="EFIMERA" />
                            </a>
                            <p>Torre Uno</p>
                        </div>
                    </div>
               </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default Proyectos;
