import React from 'react';
import useFetch from './useFetch';
import MovieList from './MovieList';


const NowPlaying = ({ selectedGenres, onStatusChange }) => {
  const { movies } = useFetch(); // Fetch now-playing movies from useFetch

  if (!movies) return <p>Loading movies...</p>;

  // Filter movies based on selected genres
  const filteredMovies = selectedGenres.length
    ? movies.filter((movie) => movie.genre_ids.some((id) => selectedGenres.includes(id)))
    : movies;

  return (
    <div>
      <h3>Now Playing</h3>
      <MovieList movies={filteredMovies} onStatusChange={onStatusChange} />
    </div>
  );
};

export default NowPlaying;
