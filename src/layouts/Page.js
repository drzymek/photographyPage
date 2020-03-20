import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import GalleryPage from '../pages/GalleryPage';
import GalleriesList from '../pages/GalleriesList';
import StoriesPage from '../pages/StoriesPage';
import ContactPage from '../pages/ContactPage';

const Page = () => {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/o_mnie" component={AboutPage} />
            <Route path="/galerie" component={GalleriesList} />
            <Route path="/galeria/:id" component={GalleryPage} />
            <Route path="/historie" component={StoriesPage} />
            <Route path="/kontakt" component={ContactPage} />
        </>
    );
}

export default Page;