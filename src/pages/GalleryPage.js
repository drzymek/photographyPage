import React from 'react';
import { Link } from 'react-router-dom';

import Gallery from '../components/Gallery'

import '../css/GalleryPage.css';



const GalleryPage = ({ match }) => {

    return (
        <div className="navScrollToPage">
            <Gallery id={match.params.id} />
            <Link to="/galerie">
                <button>Powrót</button>
            </Link>

        </div>
    );
}

export default GalleryPage;