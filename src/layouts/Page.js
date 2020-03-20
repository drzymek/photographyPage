import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
// import GalleriesPage from '..pages/GalleriesPage';
import GalleriesList from '../pages/GalleriesList';
import StoriesPage from '../pages/StoriesPage';
import ContactPage from '../pages/ContactPage';

const Page = () => {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/galleries" component={GalleriesList} />
            <Route path="/stories" component={StoriesPage} />
            <Route path="/contact" component={ContactPage} />
        </>
    );
}

export default Page;