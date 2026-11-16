import React, { useState, useEffect } from 'react';
import galleryImages from './data/gallery_images.json';

const Welcome = () => {
  const [galleryImagesData, setGalleryImagesData] = useState(galleryImages);

  const loadGalleryImagesData = async() => {
    // Query the API Gateway
    const resp = await fetch('https://a6lnno41t7.execute-api.us-east-1.amazonaws.com/Production/gallery_images');
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setGalleryImagesData(jsonData);
  }

  useEffect(() => {
    // Load the gallery images data from the API Gateway
    loadGalleryImagesData().catch(() => {});
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery" id="gallery" aria-label="A glimpse of the Landon">
          {
            galleryImagesData.map((image) =>
            <img key={image.src} loading="lazy" className={image.className} src={image.src} alt={image.alt} />
            )
          }
        </div>
        <div className="welcome-copy"><p className="eyebrow">THE CITY OUTSIDE. YOUR SANCTUARY WITHIN.</p><h2>London, with a<br /><em>personal touch.</em></h2>
        <p>The original Landon Hotel has welcomed guests to the heart of West London for 50 years. The West End neighbourhood has something for everyone, from theatre and dining to historic sights. Our Rooftop Café is a welcoming place for travellers and locals to enjoy drinks, food, and good conversation. To learn more about the Landon Hotel, browse our website and <a href="https://www.landonhotel.com/files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p><a className="text-link" href="#hotelinfo">Make yourself at home <span aria-hidden="true">↗</span></a></div>
      </article>
    </div>
  );
}

export default Welcome;