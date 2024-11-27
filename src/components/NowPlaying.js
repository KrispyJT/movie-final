// NowPlaying.js

import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { myToken } from '../mykey'; 

const NowPlaying = ({ selectedGenres }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`, // Replace with your TMDB token
      },
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then((response) => response.json())
      .then((data) => {
        console.log('Now Playing Movies:', data.results);
        setMovies(data.results || []);
      })
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  // Filter movies based on selected genres
  const filteredMovies = selectedGenres.length
    ? movies.filter((movie) => movie.genre_ids.some((id) => selectedGenres.includes(id)))
    : movies;

  return (
    <div>
      <h3>Now Playing</h3>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default NowPlaying;





















// OLD CODE
// import React, { useState, useEffect } from 'react';
// import {myToken} from '../mykey';
// import MovieAccordion from './MovieAccordian';
// import FilterBar from './FilterBar';


// const NowPlaying = () => {
//     const [movies, setMovies] = useState([]);
//     const [filteredMovies, setFilteredMovies] = useState([]);
//     const [selectedGenre, setSelectedGenre] = useState('');
  
//     useEffect(() => {
//       const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: `Bearer ${myToken}`
//         }
//       };
  
//       fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
//         .then(res => res.json())
//         .then(data => {
//           setMovies(data.results || []); // Update state with the list of now-playing movies
//         })
//         .catch(err => console.error("Fetch Error:", err));
//     }, []);
  
//     return (
//         <div>
//           <h2>Now Playing in Theaters</h2>
//           <MovieAccordion movies={movies} />
//         </div>
//       );
//   };
  
//   export default NowPlaying;