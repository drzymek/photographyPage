import React from 'react';


import img01 from '../images/gallery_photos/babies/01_marcel.jpg';
import img02 from '../images/gallery_photos/babies/02_baby.jpg';
import img03 from '../images/gallery_photos/babies/03_baby.jpg';
import img04 from '../images/gallery_photos/babies/04_baby.jpg';
import img05 from '../images/gallery_photos/babies/05_baby.jpg';

const gallery = [
    {
        id: 1,
        src: img01,
        alt: "baby boy"
    },
    {
        id: 2,
        src: img02,
        alt: "sleeping baby boy"
    },
    {
        id: 3,
        src: img03,
        alt: "smailing baby boy"
    },
    {
        id: 4,
        src: img04,
        alt: "yawning baby boy"
    },
    {
        id: 5,
        src: img05,
        alt: "baby boy"
    }
]
const NewbornGallery = () => {
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
    )
}

export default NewbornGallery;