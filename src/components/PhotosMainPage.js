import React from 'react';

const PhotosMainPage = (props) => {
    return (
        <img src={props.src} alt={props.alt} />
    );
}

export default PhotosMainPage;