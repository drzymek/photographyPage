import React from 'react';

import img01 from '../images/gallery_photos/portrait/01_portrait.jpg';
import img02 from '../images/gallery_photos/portrait/02_portrait.jpg';
import img03 from '../images/gallery_photos/portrait/03_portrait.jpeg';
import img04 from '../images/gallery_photos/portrait/04_portrait.jpeg';
import { SRLWrapper } from 'simple-react-lightbox';

const gallery = [
    {
        id: 1,
        src: img01,
        alt: "woman in a hood"
    },
    {
        id: 2,
        src: img02,
        alt: "pregnant women in a pale blue sweater"
    },
    {
        id: 3,
        src: img03,
        alt: "a girl with an autumn bunch of leaves"
    },
    {
        id: 4,
        src: img04,
        alt: "girl with closed eyes cuddle baby doll"
    },
]

const PortraitsGallery = () => {
    const list = gallery.map(photo => (
        <div className="singlePhoto">
            <img src={photo.src} alt={photo.alt} />
        </div>
    ))
    return (
        <SRLWrapper>
            <div className="singleGallery">
                {list}
            </div>
        </SRLWrapper>
    );
}

export default PortraitsGallery;