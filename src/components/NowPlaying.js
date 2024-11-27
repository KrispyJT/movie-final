// NowPlaying.js

// NowPlaying.js
// import React from 'react';
// import MovieList from './MovieList';
// import useFetchMovies from '../hooks/useFetchMovies';

// const NowPlaying = () => {
//   const { movies, error } = useFetchMovies();

//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Now Playing in Theaters</h2>
//       <MovieList movieList={movies} />
//     </div>
//   );
// };

// export default NowPlaying;



// NowPlaying.js
import React from 'react';
import MovieList from './MovieList';
import useFetchMovies from './useFetchMovies';

const NowPlaying = () => {
  const { movies, error } = useFetchMovies();

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Now Playing in Theaters</h2>
      <MovieList movieList={movies} />
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