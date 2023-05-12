import React, { useState, useEffect } from "react";
import Hotelinfo from './Hotelinfo.js';
import Welcome from './Welcome.js';
import galleryImagesData from './data/gallery_images.json'

const Main = () => {
    const [menuLinksData, setMenuLinksData] = useState([]);

    const loadMenuLinksData = async () => {
        //Query the API gateway
        const response = await fetch('https://4qd4obh5f3.execute-api.us-east-1.amazonaws.com/Production/services, https://4qd4obh5f3.execute-api.us-east-1.amazonaws.com/Production/accessibilities')
        let jsonData = await response.json();
        //Assign response data to the state variable
        setMenuLinksData(jsonData);
    }
    useEffect(() => {
        // load the menuLinks data from the API gateway
        loadMenuLinksData();
    }, []);

    return (
        <main id="wrapper">
            < Welcome />
            < Hotelinfo />
        </main>
    );
}

export default Main;