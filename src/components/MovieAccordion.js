// MovieAccordion.js

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

/**
 * MovieAccordion Component:
 * - Displays the categories of movies: "Seen It", "Want to See", and "Not Interested". 
 * - Each category is an accordion panel with a title and shows number of movies in the category.
 * - Allows users to clear all categories with the "Clear All" button.
 * 
 * @param {Array} seenIt - List of movies the user has seen
 * @param {Array} wantToSee - List of movies the user wants to see
 * @param {Array} notInterested - List of movies the user is not interested in
 * @param {Function} onClearAll - Callback function to clear all movie categories
 *  
 * Accordian: https://react-bootstrap.netlify.app/docs/components/accordion/
 * 
 */

const MovieAccordion = ({ seenIt, wantToSee, notInterested, onClearAll }) => {
  return (
    <div className="mt-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center">
        <h2>Your Movies</h2>
        <button
          className="btn btn-danger btn-sm"
          aria-label="Clear all movie categories"
          onClick={onClearAll} // Handler to clear all movie categories when button is clicked
        >
          Clear All
        </button>
      </div>

      {/* Description Section */}
      <p className="text-muted mt-2">
        View and manage your categorized movies here.
      </p>

      {/* Accordion Section */}
      <Accordion>
        {/* "Seen It" Section */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Seen It ({seenIt.length})
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              {seenIt.length > 0 ? (                                // Conditional rendering based on the length of seenIt array
                seenIt.map((title) => <li key={title}>{title}</li>) // Maps over the seenIt array and displays each movie title
              ) : (
                <p>No movies in this category yet.</p> 
              )}
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* "Want to See" Section */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Want to See ({wantToSee.length})
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              {wantToSee.length > 0 ? (                           // Conditional rendering based on the length of wantToSee array
                wantToSee.map((title) => <li key={title}>{title}</li>)  // Maps over the wantToSee array and displays each movie title
              ) : (
                <p>No movies in this category yet.</p>
              )}
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* "Not Interested" Section */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Not Interested ({notInterested.length})
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              {notInterested.length > 0 ? (                     // Conditional rendering based on the length of notInterested array
                notInterested.map((title) => <li key={title}>{title}</li>)    // Maps over the notInterested array and displays each movie title
              ) : (
                <p>No movies in this category yet.</p>
              )}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default MovieAccordion;
