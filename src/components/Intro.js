import React from 'react';
import makeup from '../assets/images/makeup.webp';

const Intro = () => (
  <section className="intro-section">
    <div className="intro">
      <img src={makeup} alt="makeup" className="makeup-gif" />
      <div className="intro-desc">
        <h2>Your lasting Beauty!</h2>
        <p>Want to stay attractive ? Checkout your favourite makeups here.</p>
      </div>
    </div>
  </section>
);

export default Intro;
