// Header.js
import React from 'react';

/**
 * Header:
 * - Displays the header component.
 * @returns The header component for the application.
 */

const Header = () => {
  return (
    <header className='app-header' style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#0d253f', color: '#fff' }}>
      <h1>Movie Explorer</h1>
    </header>
  );
};

export default Header;
