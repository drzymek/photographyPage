import React from 'react';
import "../css/HomePage.css"

import img01 from '../images/main_page_photos/mainPagePhoto_01.jpg';
import img02 from '../images/main_page_photos/mainPagePhoto_02.jpg';
import img03 from '../images/main_page_photos/mainPagePhoto_03.jpg';
import img04 from '../images/main_page_photos/mainPagePhoto_04.jpg';
import img05 from '../images/main_page_photos/mainPagePhoto_05.jpg';
import img06 from '../images/main_page_photos/mainPagePhoto_06.jpg';
import img07 from '../images/main_page_photos/mainPagePhoto_07.jpg';
import img08 from '../images/main_page_photos/mainPagePhoto_08.jpg';
import img09 from '../images/main_page_photos/mainPagePhoto_09.jpg';

import PhotosMainPage from '../components/PhotosMainPage';

const mainPagePhotos = [
    {
        id: 1,
        src: img01,
        alt: "dad and daughter lie in the grass"
    },
    {
        id: 2,
        src: img02,
        alt: "dad throw daughter"
    },
    {
        id: 3,
        src: img03,
        alt: "dad and daughter cuddle"
    },
    {
        id: 4,
        src: img04,
        alt: "cuddle couple"
    },
    {
        id: 5,
        src: img05,
        alt: "women in a hood"
    },
    {
        id: 6,
        src: img06,
        alt: "little girl sitting on window sill with mum"

    },
    {
        id: 7,
        src: img07,
        alt: "parents play with baby boy"
    },
    {
        id: 8,
        src: img08,
        alt: "parents cuddle baby boy"
    },
    {
        id: 9,
        src: img09,
        alt: "family photo, parents with baby boy"
    }
]

const HomePage = () => {
    const photos = mainPagePhotos.map((photo) => (
        <PhotosMainPage key={photo.id} {...photo} />
    ))
    return (
        <div className="homePage navScrollToPage">
            {photos}
        </div >
    );
}

export default HomePage;