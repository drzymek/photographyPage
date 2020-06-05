import React from 'react';
import '../css/About.css';
import photoAbout from '../images/About/AboutMe.jpg';
import ownerPhoto from '../images/About/AboutMeKamila&Laura.jpg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="about navScrollToPage">
            <div className="content">
                <div className="photo">
                    <img src={ownerPhoto} alt="page owner Kamila" />
                    <img src={photoAbout} alt="little girl in the grass" />
                </div>
                <div className="welcome">
                    <h1>Hej! Miło mi Cię widzieć!</h1>
                    <p>Mam na imię Kamila, uwielbiam fotografię i zawsze staram sie opowiadać historię moimi zdjęciami..., uwieczniać momenty, które będzie miło wspominać zarówno teraz jak i po latach. Po prostu utrwalam to co najpiękniejsze.</p>
                    <br></br>
                    <p>Zapraszam do obejrzenia mojej galerii.</p>
                    <button>
                        <Link to="/galerie">Galeria</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;