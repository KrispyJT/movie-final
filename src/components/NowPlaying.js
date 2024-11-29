import React from 'react';
import useFetch from './useFetch';
import MovieList from './MovieList';


const NowPlaying = ({ selectedGenres, onStatusChange }) => {
  const { movies } = useFetch(); //  Call useFetch to get movies from the Now Playing API url

  if (!movies) return <p>Loading movies...</p>; // Loading

  // Filter movies based on selected genres
  const filteredMovies = selectedGenres.length
    ? movies.filter((movie) => movie.genre_ids.some((id) => selectedGenres.includes(id)))
    : movies;

  return (
    <div className='now-playing-section'>
      <h3>Now Playing</h3>
      <MovieList movies={filteredMovies} onStatusChange={onStatusChange} />
    </div>
  );
};

export default NowPlaying;

