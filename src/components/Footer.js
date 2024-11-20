// Footer.js
import React from 'react';

const Footer = () => (
  <footer style={{ padding: '10px', textAlign: 'center', backgroundColor: '#0d253f', color: '#fff' }}>
    <p>Data provided by:</p>
    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
        alt="The Movie Database (TMDB)"
        style={{ width: '120px' }}
      />
    </a>
    <p style={{ fontSize: '12px' }}>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
  </footer>
);

export default Footer;
