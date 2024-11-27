import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <Row>
    {movies.map((movie) => (
      <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
        <MovieCard movie={movie} />
      </Col>
    ))}
  </Row>
);

export default MovieList;
