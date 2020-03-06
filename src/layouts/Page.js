import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import GalleryPage from '../pages/GalleryPage';
import StoriesPage from '../pages/StoriesPage';
import ContactPage from '../pages/ContactPage';

const Page = () => {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/gallery" component={GalleryPage} />
            <Route path="/stories" component={StoriesPage} />
            <Route path="/contact" component={ContactPage} />
        </>
    );
}

export default Page;