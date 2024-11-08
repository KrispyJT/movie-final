// MovieImage.js

import React from 'react';

const MovieImage = ({ src, alt, width = '100%', height = 'auto' }) => {
  return (
    <div
      style={{
        width,
        height,
        maxWidth: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        marginTop: '15px'
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain' // Contain will scale down the image to fit fully
        }}
      />
    </div>
  );
};

export default MovieImage;
