import React from 'react';
import useFetch from './useFetch';
import MovieList from './MovieList';
import { useState } from 'react';


const NowPlaying = ({ selectedGenres, onStatusChange }) => {
  const { movies } = useFetch(); //  Call useFetch to get movies from the Now Playing API url
  const [hoveredMovie, setHoveredMovie] = useState(null); // Track the hovered movie

  if (!movies) return <p>Loading movies...</p>; // Loading

  // Filter movies based on selected genres
  const filteredMovies = selectedGenres.length
    ? movies.filter((movie) => movie.genre_ids.some((id) => selectedGenres.includes(id)))
    : movies;

  const handeMovieHover = (movie) => {
    setHoveredMovie(movie);
  }; 

  return (
    <div className='now-playing-section'>
      <h3>Now Playing</h3>
      <MovieList 
        movies={filteredMovies} 
        onStatusChange={onStatusChange}
        onMovieHover={handeMovieHover} />
        {hoveredMovie && (
         <div className='hover-details'>
          <h4>{hoveredMovie.title}</h4>
          <p>{hoveredMovie.overview}</p>
          </div>
          )}
    </div>
  );
};

export default NowPlaying;



// NowPlaying.js
// import React, { useState } from 'react';
// import useFetch from '../useFetch';
// import MovieList from './MovieList';
// import HoverDetails from './HoverDetails';

// const NowPlaying = ({ selectedGenres, onStatusChange }) => {
//   const { movies } = useFetch();
//   const [hoveredMovie, setHoveredMovie] = useState(null); // Track the hovered movie

//   if (!movies) return <p>Loading movies...</p>;

//   // Filter movies based on selected genres
//   const filteredMovies = selectedGenres.length
//     ? movies.filter((movie) => movie.genre_ids.some((id) => selectedGenres.includes(id)))
//     : movies;

//   return (
//     <div className="now-playing-section">
//       <h3>Now Playing</h3>
//       <MovieList
//         movies={filteredMovies}
//         onStatusChange={onStatusChange}
//         onMovieHover={setHoveredMovie} // Pass hover handler
//       />
//     </div>
//   );
// };

// export default NowPlaying;




// import React from 'react';
// import MovieList from './MovieList';

// const NowPlaying = ({ movies, selectedGenres, onStatusChange }) => {
//   if (!movies) return <p>Loading movies...</p>;

//   const filteredMovies = selectedGenres.length
//     ? movies.filter((movie) => movie.genre_ids.some((id) => selectedGenres.includes(id)))
//     : movies;

//   return (
//     <div className="now-playing-section">
//       <h3>Now Playing</h3>
//       <MovieList movies={filteredMovies} onStatusChange={onStatusChange} />
//     </div>
//   );
// };

// export default NowPlaying;

