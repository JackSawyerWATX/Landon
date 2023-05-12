import React from "react";
import Hotelinfo from './Hotelinfo.js';
import Welcome from './Welcome.js';
// import galleryImagesData from './data/gallery_images.json'

const Main = () => {

    return (
        <main id="wrapper">
            < Welcome />
            < Hotelinfo />
        </main>
    );
}

export default Main;