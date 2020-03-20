import React from 'react';
import { Link } from 'react-router-dom';


const PhotosGalleriesPage = (props) => {
    return (
        <Link to={`galeria/${props.name}`}>
            <h5>{props.name}</h5>
            <img src={props.src} alt={props.alt} />
        </Link>
    );
}

export default PhotosGalleriesPage;