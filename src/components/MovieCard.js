
// MovieCard.js


import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const MovieCard = ({ movie, onStatusChange }) => {
  const { title, overview, poster_path, release_date, vote_average } = movie;

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



// const MovieCard = ({ movie, onStatusChange }) => {
//   const { title, overview, poster_path, release_date, vote_average } = movie;

//   const posterUrl = poster_path
//     ? `https://image.tmdb.org/t/p/w500${poster_path}`
//     : 'https://via.placeholder.com/500x750?text=No+Image';

//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <Card.Img variant="top" src={posterUrl} alt={title} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//           <strong>Release Date:</strong> {release_date} <br />
//           <strong>Rating:</strong> {vote_average} / 10 <br />
//           {overview.substring(0, 100)}...
//         </Card.Text>
//         <div>
//           <Button variant="success" onClick={() => onStatusChange(title, 'Seen It')} className="m-1">
//             Seen It
//           </Button>
//           <Button variant="primary" onClick={() => onStatusChange(title, 'Want to See')} className="m-1">
//             Want to See
//           </Button>
//           <Button variant="secondary" onClick={() => onStatusChange(title, 'Not Interested')} className="m-1">
//             Not Interested
//           </Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default MovieCard;



// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// // MovieCard.js

// const MovieCard = ({ movie }) => {
//   const { title, overview, poster_path, release_date } = movie;
//   const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`; // TMDB poster path

//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <Card.Img variant="top" src={imageUrl} alt={title} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//           <strong>Release Date:</strong> {release_date}
//           <br />
//           <strong>Overview:</strong> {overview.length > 100
//             ? `${overview.substring(0, 100)}...` // Limit text length
//             : overview}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default MovieCard;





// // const MovieCard = ({ movie }) => {
// //     return (
// //         <div className="movie-card">
// //             <h2>{movie.title}</h2>
// //         </div>
// //     );
// // }

// // export default MovieCard;


// // EXAMPLE CODE 
// // function BasicExample() {
// //   return (
// //     <Card style={{ width: '18rem' }}>
// //       <Card.Img variant="top" src="holder.js/100px180" />
// //       <Card.Body>
// //         <Card.Title>Card Title</Card.Title>
// //         <Card.Text>
// //           Some quick example text to build on the card title and make up the
// //           bulk of the card's content.
// //         </Card.Text>
// //       </Card.Body>
// //     </Card>
// //   );
// // }


