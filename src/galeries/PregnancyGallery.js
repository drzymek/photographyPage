import React from 'react';

import img01 from '../images/gallery_photos/pregnancy/01_pregnancy.jpg'
import img02 from '../images/gallery_photos/pregnancy/02_pregnancy.jpg'
import img03 from '../images/gallery_photos/pregnancy/03_pregnancy.jpg'
import img04 from '../images/gallery_photos/pregnancy/04_pregnancy.jpg'

const gallery = [
    {
        id: 1,
        src: img01,
        alt: "pregnant belly "
    },
    {
        id: 2,
        src: img02,
        alt: "pregnant belly and a girl with big eyes"
    },
    {
        id: 3,
        src: img03,
        alt: "pregnant women doing yoga"
    },
    {
        id: 4,
        src: img04,
        alt: "pregnant women reading baby book"
    }
]

const PregnancyGallery = () => {
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

export default PregnancyGallery;