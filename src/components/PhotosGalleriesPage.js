import React from 'react';
import { Link } from 'react-router-dom';


const PhotosGalleriesPage = (props) => {
    return (
        <Link to={`gallery/${props.name}`}>
            <h3>{props.name}</h3>
            <img src={props.src} alt={props.alt} />
        </Link>
    );
}

export default PhotosGalleriesPage;