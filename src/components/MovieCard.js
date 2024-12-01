
// MovieCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


/**
 * MovieCard Component:
 * - Displays movie details (title, release date, rating, overview).
 * - Includes buttons to categorize movies as Seen It, Want to See, or Not Interested.
 * 
 * @param {Object} movie - Movie data to display
 * @param {Function} onStatusChange - Callback function to handle status changes
 * 
 * See: https://react-bootstrap.netlify.app/docs/components/cards/
 * See: https://developer.themoviedb.org/docs/image-basics
 */


const MovieCard = ({ movie, onStatusChange }) => {
  const { title, overview, poster_path, release_date, vote_average } = movie;

  // Creates the poster URL using the base URL and poster path
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={posterUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Release Date:</strong> {release_date} <br />
          <strong>Rating:</strong> {vote_average} / 10 <br />
          {overview.substring(0, 100)}...
        </Card.Text>
        <div>
          <Button variant="success" onClick={() => onStatusChange(title, 'Seen It')} className="m-1">
            Seen It
          </Button>
          <Button variant="primary" onClick={() => onStatusChange(title, 'Want to See')} className="m-1">
            Want to See
          </Button>
          <Button variant="secondary" onClick={() => onStatusChange(title, 'Not Interested')} className="m-1">
            Not Interested
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;



