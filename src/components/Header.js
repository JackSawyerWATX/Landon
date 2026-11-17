import React, { useEffect, useRef } from 'react';

const Header = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = hero.getBoundingClientRect();
      const progress = Math.max(0, Math.min(hero.offsetHeight, -bounds.top));
      content.style.setProperty('--text-offset', `${motion.matches ? 0 : progress * 0.16}px`);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    motion.addEventListener('change', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      motion.removeEventListener('change', schedule);
    };
  }, []);

  return (
  <header id="intro">
    <nav className="navigation" aria-label="Main navigation">
      <a className="wordmark" href="#intro">LANDON<span>HOTEL · LONDON</span></a>
      <div className="nav-links"><a href="#welcome">Our story</a><a href="#rooms">Rooms</a><a href="#dining">Dining</a><a href="#events">Gather</a><a href="#hotelinfo">Your stay</a></div>
      <a className="button nav-button" href="#arrivalinfo">Plan your stay <span aria-hidden="true">↗</span></a>
    </nav>
    <div className="hero" ref={heroRef} style={{ '--hero-photo': `url("${process.env.PUBLIC_URL}/images/hotel/splash_hotelphoto.jpg")` }}>
      <div className="hero-content" ref={contentRef}>
        <p className="eyebrow">AT HOME IN WEST LONDON</p>
        <h1>A London stay.<br /><em>A world away.</em></h1>
        <p className="hero-description">City energy. Rooftop moments. A place to make yourself at home in the heart of the West End.</p>
        <a className="button light-button" href="#welcome">Discover the Landon <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </header>
  );
};
export default Header;
