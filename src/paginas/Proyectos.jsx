
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
import torre_uno from "../proyectos/TORRE_UNO/torre_uno_portada.png"

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

                <div className='div_inline_proyectos'>
                    <div className='block_proyectos_div'>
                        <img src={c50} alt="EFIMERA" />
                        <a href="/" className='link_to_proyecto'>
                            <button>Cantina 50</button>
                        </a>
                    </div>
                    <div className='block_proyectos_div'>
                        <img src={enso} alt="EFIMERA" />
                        <a href="/" className='link_to_proyecto'>
                            <button>Enso A54</button>
                        </a>
                    </div>
                    <div className='block_proyectos_div'>
                        <img src={rlp} alt="EFIMERA" />
                        <a href="/" className='link_to_proyecto'>
                            <button>Casa RLP</button>
                        </a>
                    </div>
                </div>
                <div className='div_inline_proyectos'>
                    <div className='block_proyectos_div'>
                        <img src={meriden} alt="EFIMERA" />
                        <a href="/" className='link_to_proyecto'>
                            <button>Meriden</button>
                        </a>
                    </div>
                    <div className='block_proyectos_div'>
                        <img src={legal_mid} alt="EFIMERA" />
                        <a href="/" className='link_to_proyecto'>
                            <button>Legal MID</button>
                        </a>
                    </div>
                    <div className='block_proyectos_div'>
                        <img src={mia_mamma} alt="EFIMERA" />
                        <a href="/" className='link_to_proyecto'>
                            <button>Mia Mamma</button>
                        </a>
                    </div>
                </div>
                <div className='div_inline_proyectos'>
                    <div className='block_proyectos_div'>
                        <img src={torre_uno} alt="EFIMERA" />
                        <a href="/torre_uno" className='link_to_proyecto'>
                            <button>Torre Uno</button>
                        </a>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default Proyectos;
