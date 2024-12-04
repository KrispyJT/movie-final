// MovieList.js 

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

/**
 * MovieList Component:
 * - Displays the list of movies in a grid layout using Row and Col.
 * - Each movie is represented by a MovieCard component.
 * - Passes movie data to the MovieCard for rendering.
 * - Handles status changes for each movie using the onStatusChange callback.
 * - Uses the movies array to render the list of movies.
 * 
 * @param {Array} movies - List of movies to display
 * @param {Function} onStatusChange - Callback function to handle status changes
 * 
 */


const MovieList = ({ movies, onStatusChange }) => (                 // Destructuring movies and onStatusChange from props
  <Row className="movie-list">
    {movies.map((movie) => (                                     // Maps over the movies array and displays each movie
      <Col
        key={movie.id}                                          // Unique key for each movie
        xs={12}   
        sm={6}
        md={4}
        lg={3}
      >
        <MovieCard movie={movie} onStatusChange={onStatusChange} /> {/* Passes movie data and onStatusChange callback to MovieCard */}
      </Col>
    ))}
  </Row>
);

export default MovieList;
