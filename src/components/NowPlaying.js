// NowPlaying.js
import React from 'react';
import useFetch from './useFetch';
import MovieList from './MovieList';

/**
 * NowPlaying:
 * - Fetches and displays a list of movies currently playing in theaters using useFetch.
 * - Filters movies based on selected genres.
 * - Sorts movies based on the selected criteria.
 * - Displays a list of sorted and filtered movies using the MovieList.
 *
 * 
 * 
 * See: https://developer.themoviedb.org/reference/movie-now-playing-list
 */

const NowPlaying = ({ selectedGenres, onStatusChange, sortCriteria }) => {
  const { movies } = useFetch(); // Fetch movies from useFetch 

  if (!movies) return <p>Loading movies...</p>;   // Show loading state

  // Filter movies based on selected genres
  const filteredMovies = selectedGenres.length 
    ? movies.filter( (movie) => movie.genre_ids.some((id) => selectedGenres.includes(id)))  
    : movies; 



  const sortedMovies = [...filteredMovies]; // Create a copy to avoid mutating state
  if (sortCriteria === "rating") {
    sortedMovies.sort((a, b) => b.vote_average - a.vote_average);  // Sort by rating
  } else if (sortCriteria === "releaseDate") {
    sortedMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)); // Sort by release date
  } else if (sortCriteria === "popularity") {
    sortedMovies.sort((a, b) => b.popularity - a.popularity); // Sort by popularity
  }

  return (
    <div className="now-playing-section">
      <h3>Now Playing</h3>
      <p>These are movies currently playing in theaters. Select a status to categorize them!</p>
      {sortedMovies.length > 0 ? (                                                   // Conditional rendering based on available movies
        <MovieList movies={sortedMovies} onStatusChange={onStatusChange} />        // Passes sorted movies to MovieList
      ) : (
        <p>No movies available for the selected genre(s).</p>
      )}
    </div>
  );
};

export default NowPlaying;
