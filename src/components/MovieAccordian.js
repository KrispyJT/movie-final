// MovieAccordian.js 

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import MovieImage from './MovieImage';

const MovieAccordion = ( { movies } ) => {
  return (
    <Accordion>
      {movies.map((movie, index) => (
        <Accordion.Item eventKey={index.toString()} key={movie.id}>
          <Accordion.Header>{movie.title}</Accordion.Header>
          <Accordion.Body>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
            {movie.poster_path && (
              <MovieImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="100%" // Full width of the container
              height="300px" // Adjust the height to fit nicely in the accordion
            />
            )}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default MovieAccordion;
