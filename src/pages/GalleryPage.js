import React from 'react';
import { Link } from 'react-router-dom';

import Gallery from '../components/Gallery'

import '../css/GalleryPage.css';



const GalleryPage = ({ match }) => {

    return (
        <>
            <Gallery id={match.params.id} />
            <Link to="/galerie">Powrót</Link>

        </>
    );
}

export default GalleryPage;