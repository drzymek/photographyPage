import React from 'react';

import '../css/Header.css';
import img01 from '../images/header_photos/img01.jpg';
import img02 from '../images/header_photos/img02.jpg';
import img03 from '../images/header_photos/img03.jpg';
import img04 from '../images/header_photos/img04.jpg';
import img05 from '../images/header_photos/img05.jpg';
import img06 from '../images/header_photos/img06.jpg';

const Header = () => {
    const headerImages = [img01, img02, img03, img04, img05, img06];
    const imageIndex = Math.floor(Math.random() * headerImages.length);
    const photo = headerImages[imageIndex];
    return (
        <img src={photo} alt="header" />
    );
}

export default Header;