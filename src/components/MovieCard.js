
// MovieCard.js
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


/**
 * MovieCard Component:
 * - Displays individual movie details (movie poster, title, release date, rating, overview).
 * - Includes buttons in card to categorize movies as Seen It, Want to See, or Not Interested.
 * - Adds a "Show More" button to toggle the full overview.
 * 
 * @param {Object} movie - Movie data to display
 * @param {Function} onStatusChange - Callback function to handle status changes
 * 
 * See: https://react-bootstrap.netlify.app/docs/components/cards/
 * See: https://developer.themoviedb.org/docs/image-basics
 */

const MovieCard = ({ movie, onStatusChange }) => { 
  const { title, overview, poster_path, release_date, vote_average } = movie; // destructuring movie object from MovieList component props

  // Creates the poster URL using the base URL and poster path from the movie object
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}` 
    : 'https://via.placeholder.com/500x750?text=No+Image';

  const [showFullOverview, setShowFullOverview] = useState(false); // State to toggle overview visibility

  // Toggle the overview visibility when the "Show More" button is clicked
  const handleToggleOverview = () => {
    setShowFullOverview((prev) => !prev); // Inverts the current state value using the previous state
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={posterUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Release Date:</strong> {release_date} <br /> 
          <strong>Rating:</strong> {vote_average} / 10 <br /> 
          {showFullOverview ? overview : `${overview.substring(0, 100)}...`} {/* Ternary operator to show full or partial overview */}
        </Card.Text>
        <Button
          variant="link"
          className="p-0"
          onClick={handleToggleOverview}  // Handler to toggle overview visibility
          aria-expanded={showFullOverview} // Accessibility attribute to indicate expanded state
        >
          {showFullOverview ? 'Show Less' : 'Show More'} {/* Conditional button text based on showFullOverview state */}
        </Button>
        <div className="mt-2">
          <Button variant="success" onClick={() => onStatusChange(title, 'Seen It')} className="m-1"> {/* Handler to categorize movie as "Seen It" */}
            Seen It
          </Button> 
          <Button variant="primary" onClick={() => onStatusChange(title, 'Want to See')} className="m-1"> {/* Handler to categorize movie as "Want to See" */}
            Want to See
          </Button>
          <Button variant="secondary" onClick={() => onStatusChange(title, 'Not Interested')} className="m-1"> {/* Handler to categorize movie as "Not Interested" */}
            Not Interested
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;




