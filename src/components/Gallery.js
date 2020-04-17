import React from 'react';
import { Route } from 'react-router-dom';

import '../css/SingleGallery.css'

import KidsGallery from '../galeries/KidsGallery';
import NewbornGallery from '../galeries/NewbornGallery';
import PregnancyGallery from '../galeries/PregnancyGallery';
import PortraitsGallery from '../galeries/PortraitsGaller';
import FamiliesGallery from '../galeries/FamiliesGallery';


const Gallery = (props) => {

    return (
        <div className="allGaleries">
            <h2>{props.id}</h2>
            <Route path="/galeria/niemowlaki" component={NewbornGallery} />
            <Route path="/galeria/ciąża" component={PregnancyGallery} />
            <Route path="/galeria/dzieci" component={KidsGallery} />
            <Route path="/galeria/portrety" component={PortraitsGallery} />
            <Route path="/galeria/rodziny" component={FamiliesGallery} />
        </div>
    );
}

export default Gallery;