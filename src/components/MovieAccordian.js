import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const MovieAccordion = ( { seenIt, wantToSee, notInterested } ) => {
  return (
    <>
    <div className="mt-5">
      <h2>Your Movies</h2>
      <Accordion>
        {/* "Seen It" Section */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Seen It ({seenIt.length})
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              {seenIt.length > 0 ? (
                seenIt.map((title) => <li key={title}>{title}</li>)
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
              {wantToSee.length > 0 ? (
                wantToSee.map((title) => <li key={title}>{title}</li>)
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
              {notInterested.length > 0 ? (
                notInterested.map((title) => <li key={title}>{title}</li>)
              ) : (
                <p>No movies in this category yet.</p>
              )}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </>
  );
};

export default MovieAccordion;
