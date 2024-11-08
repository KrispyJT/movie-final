import React, { useState, useEffect } from 'react';
import { myToken } from '../mykey';

const FilterBar = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    };

    // Fetch genres
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then(res => res.json())
      .then(data => {
        setGenres(data.genres || []);
      })
      .catch(err => console.error("Fetch Error:", err));
  }, []);

  return (
    <div className="filter-bar" style={{ marginBottom: '20px' }}>
      <label htmlFor="genre-select" style={{ marginRight: '10px' }}>Filter by Genre:</label>
      <select
        id="genre-select"
        onChange={(e) => onGenreSelect(e.target.value)}
        style={{ padding: '5px', fontSize: '16px' }}
      >
        <option value="">All Genres</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
