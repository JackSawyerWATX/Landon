import React from 'react';
const imageRoot = 'https://www.landonhotel.com/images/hotel/';
const rooms = [
  ['Piccadilly', 'Compact comfort for days spent exploring.'],
  ['Cambridge', 'A king bed and a calm, warm palette.'],
  ['Westminster', 'King or double beds, with luxurious linens.'],
  ['Oxford', 'Romantic suites with canopy beds.'],
  ['Victoria', 'Room for the family, with a pullout sofa.'],
  ['Manchester', 'An executive suite with space to work and unwind.']
];
const dining = [
  ['Rooftop Café', 'dining_rooftop.jpg', 'Head upstairs for dinner with a different perspective.'],
  ['Smoothie Bar', 'dining_smoothiebar.jpg', 'Fresh blends, seasonal flavours, and city views.'],
  ['Breakfast & Coffee', 'dining_lattes.jpg', 'Slow mornings start with a good cup.']
];
const Photo = ({src, alt, className = ''}) => <img className={className} src={imageRoot + src} alt={alt} loading="lazy" />;
const Experiences = () => <>
  <section className="rooms-section scene" id="rooms" aria-labelledby="rooms-title">
    <div className="section-heading"><div><p className="eyebrow">YOUR OWN CORNER OF LONDON</p><h2 id="rooms-title">Stay a little.<br /><em>Dream a little.</em></h2></div><p>Find your favourite place to return to.</p></div>
    <div className="room-grid">{rooms.map(([name, description], index) => <article className="room-card" key={name}>
      <div className="room-photo"><Photo src={`rooms_${name.toLowerCase()}.jpg`} alt={`${name} guest room at the Landon Hotel`} /><span className="photo-number">0{index + 1}</span></div>
      <div className="room-caption"><h3>{name}</h3><p>{description}</p></div>
    </article>)}</div>
  </section>
  <section className="dining-section scene" id="dining" aria-labelledby="dining-title">
    <div className="section-heading"><div><p className="eyebrow">SAVOUR THE MOMENT</p><h2 id="dining-title">Good taste.<br /><em>Great company.</em></h2></div><p>From the first coffee to the last conversation.</p></div>
    <div className="dining-grid">{dining.map(([name, src, description]) => <article key={name}><Photo src={src} alt={name + ' at the Landon Hotel'} /><h3>{name}</h3><p>{description}</p></article>)}</div>
    <div className="dining-note"><span className="eyebrow">TAKE IT SLOW</span><p>Prefer a quiet night in? Room service brings the dining experience to you.</p></div>
  </section>
  <section className="events-section scene" id="events" aria-labelledby="events-title">
    <div className="section-heading"><div><p className="eyebrow">COME TOGETHER</p><h2 id="events-title">For the moments<br /><em>that matter.</em></h2></div></div>
    <div className="event-grid"><article><Photo src="events_conference.jpg" alt="Hotel conference and meeting space" /><div><span className="eyebrow">MAKE ROOM FOR IDEAS</span><h3>Meet in London.</h3><p>A setting for focused meetings and fresh thinking.</p></div></article><article><Photo src="events_wedding.jpg" alt="A wedding celebration at the hotel" /><div><span className="eyebrow">MAKE IT A MEMORY</span><h3>Celebrate together.</h3><p>Weddings and gatherings, with a personal touch.</p></div></article></div>
  </section>
  <section className="neighbourhood-section" id="attractions" aria-labelledby="attractions-title"><Photo src="attractions.jpg" alt="London West End streets and local attractions" /><div className="neighbourhood-copy"><p className="eyebrow">STEP OUT. DISCOVER MORE.</p><h2 id="attractions-title">The West End.<br /><em>At your doorstep.</em></h2><p>Theatre, shopping, and unhurried walks. Make the city your own.</p><a className="button light-button" href="#arrivalinfo">Find your way here <span aria-hidden="true">↗</span></a></div></section>
</>;
export default Experiences;
