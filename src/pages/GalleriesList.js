import React from 'react';
import '../css/GalleriesPage.css';

import img01 from '../images/gallery_photos/01_marcel.jpg';
import img02 from '../images/gallery_photos/02_pregnancy.jpg';
import img03 from '../images/gallery_photos/03_kids.jpg';
import img04 from '../images/gallery_photos/03_portrait.jpg';
import img05 from '../images/gallery_photos/15_family.jpg';

import PhotosGalleriesPage from '../components/PhotosGalleriesPage'

const galleries = [
    {
        id: 1,
        src: img01,
        alt: "baby boy",
        name: "niemowlaki"
    },
    {
        id: 2,
        src: img02,
        alt: "pregnant belly and a little girl with big eyes",
        name: "ciąża",
    },
    {
        id: 3,
        src: img03,
        alt: "little girl laughing in the grass",
        name: "dzieci",
    },
    {
        id: 4,
        src: img04,
        alt: "little girl with bunch of autumn leaves",
        name: "portrety",
    },
    {
        id: 5,
        src: img05,
        alt: "parents with a baby boy in mummys hands ",
        name: "rodziny"
    }
]

const GalleriesList = () => {

    const list = galleries.map(gallery => (
        <>
            <PhotosGalleriesPage key={gallery.id} {...gallery} />
        </>
    ))

    return (
        <div className="galleriesPage">
            <h1>galerie</h1>
            <div className="navScrollToPage galleries">
                {list}
            </div>
        </div>
    );
}

export default GalleriesList;