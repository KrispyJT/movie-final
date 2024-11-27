// Favorites.js
import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <h2 className="text-center mb-4">Your Favorites</h2>
      <MovieList movieList={favorites} />
    </div>
  );
};

export default Favorites;
