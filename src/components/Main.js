import React from "react";
import Hotelinfo from './Hotelinfo.js';
import Welcome from './Welcome.js';
import Experiences from './Experiences.js';

const Main = () => {

    return (
        <main id="wrapper">
            < Welcome />
            < Experiences />
            < Hotelinfo />
        </main>
    );
}

export default Main;