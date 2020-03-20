import React from 'react';
import { Link } from 'react-router-dom';

const PhotosHeader = (props) => {
    return (
        <Link to="/galerie">
            <img src={props.src} alt={props.alt} />
        </Link>
    );
}

export default PhotosHeader;