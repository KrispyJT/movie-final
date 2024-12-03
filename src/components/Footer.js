// Footer.js
import React from 'react';


/**
 * Footer:
 * - Displays the footer with a link to the TMDB API.
 * - Provides attribution to TMDB for the movie data.
 * @returns the footer component for the application.
 * 
 * Logos & Attribution: https://www.themoviedb.org/about/logos-attribution
 * 
 */


const Footer = () => (
  <footer className='app-footer' style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#0d253f', color: '#fff' }}>
    <p>Data provided by:</p>
    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
        alt="The Movie Database (TMDB)"
        style={{ width: '200px' }}
      />
    </a>
    <p style={{ fontSize: '16px' }}>This project uses the TMDB API.</p>
  </footer>
);

export default Footer;

