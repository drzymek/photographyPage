import React from 'react';

import '../css/Stories.css'

const StoriesPage = () => {
    return (
        <div className="navScrollToPage storiesPage">
            <h1>historie <span className="company">by <em> Circle of Life</em></span></h1>
            <div className="videos">
                <div className="video">
                    <h3>summer 2018</h3>
                    <iframe src="https://player.vimeo.com/video/284954848" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="summer 2018"></iframe>
                </div>
                <div className="video">
                    <h3>tales of summer</h3>
                    <iframe src="https://player.vimeo.com/video/276782608" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="tales of summer"></iframe>
                </div>
            </div>
        </div>
    );
}

// export default StoriesPage;