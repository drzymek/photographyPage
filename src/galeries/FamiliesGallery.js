import React from 'react';

import img01 from '../images/gallery_photos/families/01_family.jpg';
import img02 from '../images/gallery_photos/families/02_family.jpg';
import img03 from '../images/gallery_photos/families/03_family.jpg';
import img04 from '../images/gallery_photos/families/04_family.jpg';
import img05 from '../images/gallery_photos/families/05_family.jpg';
import img06 from '../images/gallery_photos/families/06_family.jpg';
import img07 from '../images/gallery_photos/families/07_family.jpg';
import img08 from '../images/gallery_photos/families/08_family.jpg';
import img09 from '../images/gallery_photos/families/09_family.jpg';
import img10 from '../images/gallery_photos/families/10_family.jpg';
import img11 from '../images/gallery_photos/families/11_family.jpg';
import img12 from '../images/gallery_photos/families/12_family.jpg';
import img13 from '../images/gallery_photos/families/13_family.jpg';
import img14 from '../images/gallery_photos/families/14_family.jpg';
import img15 from '../images/gallery_photos/families/15_family.jpg';
import img16 from '../images/gallery_photos/families/16_family.jpg';
import img17 from '../images/gallery_photos/families/17_family.jpg';
import img18 from '../images/gallery_photos/families/18_family.jpg';

const gallery = [
    {
        id: 1,
        src: img01,
        alt: ""
    },
    {
        id: 2,
        src: img02,
        alt: ""
    },
    {
        id: 3,
        src: img03,
        alt: ""
    },
    {
        id: 4,
        src: img04,
        alt: ""
    },
    {
        id: 5,
        src: img05,
        alt: ""
    },
    {
        id: 6,
        src: img06,
        alt: ""
    },
    {
        id: 7,
        src: img07,
        alt: ""
    },
    {
        id: 8,
        src: img08,
        alt: ""
    },
    {
        id: 9,
        src: img09,
        alt: ""
    },
    {
        id: 10,
        src: img10,
        alt: ""
    },
    {
        id: 11,
        src: img11,
        alt: ""
    },
    {
        id: 12,
        src: img12,
        alt: ""
    },
    {
        id: 13,
        src: img13,
        alt: ""
    },
    {
        id: 14,
        src: img14,
        alt: ""
    },
    {
        id: 15,
        src: img15,
        alt: ""
    },
    {
        id: 16,
        src: img16,
        alt: ""
    },
    {
        id: 17,
        src: img17,
        alt: ""
    },
    {
        id: 18,
        src: img18,
        alt: ""
    },
]



const FamiliesGallery = () => {
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

export default FamiliesGallery;