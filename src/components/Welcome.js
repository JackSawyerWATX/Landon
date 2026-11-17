import React from 'react';
import galleryImages from './data/gallery_images.json';

const Welcome = () => {
  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery" id="gallery" aria-label="A glimpse of the Landon">
          {
            galleryImages.map((image) =>
            <img key={image.src} loading="lazy" className={image.className} src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
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