import React from 'react';

import img01 from '../images/gallery_photos/kids/01_kids.jpg';
import img02 from '../images/gallery_photos/kids/02_kids.jpg';
import img03 from '../images/gallery_photos/kids/03_kids.jpg';
import img04 from '../images/gallery_photos/kids/04_kids.jpg';

const gallery = [
    {
        id: 1,
        src: img01,
        alt: "two smiling girls hugging each other"
    },
    {
        id: 2,
        src: img02,
        alt: "two girls in tulip field"
    },
    {
        id: 3,
        src: img03,
        alt: "smiling girl lie in grass"
    },
    {
        id: 4,
        src: img04,
        alt: "two kids pose for photo"
    }
]

const KidsGallery = () => {
    const list = gallery.map(photo => (
        <div className="singlePhoto">
            <a href="">
                <img src={photo.src} alt={photo.alt} />
            </a>
        </div>
    ))
    return (
        <div className="singleGallery">
            {list}
        </div>
    );
}

export default KidsGallery;