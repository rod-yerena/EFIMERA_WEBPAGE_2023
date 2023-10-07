
import React, { useState } from 'react'
import Navbar from '../nav_footer/Navbar'
import Footer from '../nav_footer/Footer'
import Modal from '../carrusel/Modal'
import "../estilos/proyectos.css"

import portada from "../imagenes/portada_proyectos.png"

import c50_1 from "../proyectos/C50/c50_1.jpg"
import c50_2 from "../proyectos/C50/c50_2.jpg"
import c50_3 from "../proyectos/C50/c50_3.jpg"
import c50_4 from "../proyectos/C50/c50_4.jpg"
import c50_5 from "../proyectos/C50/c50_5.jpg"
import c50_6 from "../proyectos/C50/c50_6.jpg"
import c50_7 from "../proyectos/C50/c50_7.jpg"
import c50_8 from "../proyectos/C50/c50_8.jpg"
import c50_9 from "../proyectos/C50/c50_9.jpg"
import c50_10 from "../proyectos/C50/c50_10.jpg"
import c50_11 from "../proyectos/C50/c50_11.jpg"

import enso_1 from "../proyectos/ENSO_A54/enzo_1.jpg"
import enso_2 from "../proyectos/ENSO_A54/enzo_2.jpg"
import enso_3 from "../proyectos/ENSO_A54/enzo_3.jpg"
import enso_4 from "../proyectos/ENSO_A54/enzo_4.jpg"
import enso_5 from "../proyectos/ENSO_A54/enzo_5.jpg"
import enso_6 from "../proyectos/ENSO_A54/enzo_6.jpg"
import enso_7 from "../proyectos/ENSO_A54/enzo_7.png"
import enso_8 from "../proyectos/ENSO_A54/enzo_8.jpg"
import enso_9 from "../proyectos/ENSO_A54/enzo_9.png"
import enso_10 from "../proyectos/ENSO_A54/enzo_10.jpg"
import enso_11 from "../proyectos/ENSO_A54/enzo_11.jpg"

import rlp_1 from "../proyectos/CASA_RLP/rlp_1.jpg"
import rlp_2 from "../proyectos/CASA_RLP/rlp_2.jpg"
import rlp_3 from "../proyectos/CASA_RLP/rlp_3.jpg"
import rlp_4 from "../proyectos/CASA_RLP/rlp_4.jpg"
import rlp_5 from "../proyectos/CASA_RLP/rlp_5.jpg"
import rlp_6 from "../proyectos/CASA_RLP/rlp_6.jpg"
import rlp_7 from "../proyectos/CASA_RLP/rlp_7.jpg"
import rlp_8 from "../proyectos/CASA_RLP/rlp_8.jpg"
import rlp_9 from "../proyectos/CASA_RLP/rlp_9.jpg"

import legal_1 from "../proyectos/LEGAL_MID/legal_1.png"
import legal_2 from "../proyectos/LEGAL_MID/legal_2.png"
import legal_3 from "../proyectos/LEGAL_MID/legal_3.png"
import legal_4 from "../proyectos/LEGAL_MID/legal_4.png"
import legal_5 from "../proyectos/LEGAL_MID/legal_5.png"
import legal_6 from "../proyectos/LEGAL_MID/legal_6.png"

import meriden_1 from "../proyectos/MERIDEN/meriden_1.png"
import meriden_2 from "../proyectos/MERIDEN/meriden_2.jpeg"
import meriden_3 from "../proyectos/MERIDEN/meriden_3.png"
import meriden_4 from "../proyectos/MERIDEN/meriden_4.jpeg"
import meriden_5 from "../proyectos/MERIDEN/meriden_5.png"
import meriden_6 from "../proyectos/MERIDEN/meriden_6.png"
import meriden_7 from "../proyectos/MERIDEN/meriden_7.png"
import meriden_8 from "../proyectos/MERIDEN/meriden_8.png"
import meriden_9 from "../proyectos/MERIDEN/meriden_9.png"
import meriden_10 from "../proyectos/MERIDEN/meriden_10.png"
import meriden_11 from "../proyectos/MERIDEN/meriden_11.png"
import meriden_12 from "../proyectos/MERIDEN/meriden_12.png"
import meriden_13 from "../proyectos/MERIDEN/meriden_13.png"
import meriden_14 from "../proyectos/MERIDEN/meriden_14.png"
import meriden_15 from "../proyectos/MERIDEN/meriden_15.png"
import meriden_16 from "../proyectos/MERIDEN/meriden_16.png"

import mia_mamma_1 from "../proyectos/MIA_MAMMA/mia_mamma_1.jpg"
import mia_mamma_2 from "../proyectos/MIA_MAMMA/mia_mamma_2.jpg"
import mia_mamma_3 from "../proyectos/MIA_MAMMA/mia_mamma_3.jpg"
import mia_mamma_4 from "../proyectos/MIA_MAMMA/mia_mamma_4.jpg"
import mia_mamma_5 from "../proyectos/MIA_MAMMA/mia_mamma_5.jpg"
import mia_mamma_6 from "../proyectos/MIA_MAMMA/mia_mamma_6.jpg"
import mia_mamma_7 from "../proyectos/MIA_MAMMA/mia_mamma_7.jpg"
import mia_mamma_8 from "../proyectos/MIA_MAMMA/mia_mamma_8.jpg"
import mia_mamma_9 from "../proyectos/MIA_MAMMA/mia_mamma_9.jpg"
import mia_mamma_10 from "../proyectos/MIA_MAMMA/mia_mamma_10.jpg"
import mia_mamma_11 from "../proyectos/MIA_MAMMA/mia_mamma_11.jpg"

import showroom_1 from "../proyectos/SHOWROOM/showroom_1.jpg"
import showroom_2 from "../proyectos/SHOWROOM/showroom_2.jpg"
import showroom_3 from "../proyectos/SHOWROOM/showroom_3.jpg"
import showroom_4 from "../proyectos/SHOWROOM/showroom_4.jpg"

const Proyectos = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState([]); // Estado para las imágenes del carrusel actual

    const handleModalOpen = (images) => {
        setCurrentImages(images);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const imagesC50 = [c50_1, c50_2, c50_3, c50_4, c50_5, c50_6, c50_7, c50_8, c50_9, c50_10, c50_11];
    const imagesEnso = [enso_1, enso_2, enso_3, enso_4, enso_5, enso_6, enso_7, enso_8, enso_9, enso_10, enso_11];
    const imagesRLP = [rlp_1, rlp_2, rlp_3, rlp_4, rlp_5, rlp_6, rlp_7, rlp_8, rlp_9];
    const imagesLegal = [legal_1, legal_2, legal_3, legal_4, legal_5, legal_6]
    const imagesMeriden = [meriden_1, meriden_2, meriden_3, meriden_4, meriden_5, meriden_6, meriden_7, meriden_8, meriden_9, meriden_10, meriden_11, meriden_12, meriden_13, meriden_14, meriden_15, meriden_16]
    const imagesMiaMamma = [mia_mamma_1, mia_mamma_2, mia_mamma_3, mia_mamma_4, mia_mamma_5, mia_mamma_6, mia_mamma_7, mia_mamma_8, mia_mamma_9, mia_mamma_10, mia_mamma_11]
    const imagesShowroom = [showroom_1, showroom_2, showroom_3, showroom_4]

    return (
        <div>
            <Navbar/>
            <div className='div_portada_proyectos'>
                <img src={portada} className="imagen_portada" alt="EFIMERA" />
                <h1 className='title_proyectos'>Creaciones</h1>
            </div>
            <div className='proyectos_list_main_container'>
                <h1>Descubre nuestros espacios y creaciones sensoriales:</h1>
                <div className='proyecto_list_div'>
                    <a href="#" className='link_to_carousel_project' onClick={() => handleModalOpen(imagesC50)}>
                        <img src={c50_1} alt="EFIMERA" />
                        <h2>Cantina 50</h2>
                    </a>
                    <a href="#" className='link_to_carousel_project' onClick={() => handleModalOpen(imagesEnso)}>
                        <img src={enso_1} alt="EFIMERA" />
                        <h2>Enso A54</h2>
                    </a>
                    <a href="#" className='link_to_carousel_project' onClick={() => handleModalOpen(imagesRLP)}>
                        <img src={rlp_1} alt="EFIMERA" />
                        <h2>Casa RLP</h2>
                    </a>
                </div>
                <div className='proyecto_list_div'>
                    <a href="#" className='link_to_carousel_project' onClick={() => handleModalOpen(imagesLegal)}>
                        <img src={legal_1} alt="EFIMERA" />
                        <h2>Legal Mid</h2>
                    </a>
                    <a href="#" className='link_to_carousel_project' onClick={() => handleModalOpen(imagesMeriden)}>
                        <img src={meriden_1} alt="EFIMERA" />
                        <h2>Meriden</h2>
                    </a>
                    <a href="#" className='link_to_carousel_project' onClick={() => handleModalOpen(imagesMiaMamma)}>
                        <img src={mia_mamma_1} alt="EFIMERA" />
                        <h2>Mia Mamma</h2>
                    </a>
                </div>
                <div className='proyecto_list_div'>
                    <a href="#" className='link_to_carousel_project' onClick={() => handleModalOpen(imagesShowroom)}>
                        <img src={showroom_1} alt="EFIMERA" />
                        <h2>Showroom</h2>
                    </a>
                </div>
                <Modal isOpen={isModalOpen} onClose={handleModalClose} images={currentImages} />
            </div>
            <Footer/>
        </div>
    );
}

export default Proyectos;
