// // MovieList.js

// import { useState, useEffect } from 'react';
// import {myToken} from '../mykey';


// const MovieList = () => {
//     const [movies, setMovies] = useState([]);
  
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${myToken}`
//       }
//     };
  
//     useEffect(() => {
//       // Step 1: Fetch the list of recently changed movie IDs
//       fetch('https://api.themoviedb.org/3/movie/changes?language=en', options)
//         .then(res => res.json())
//         .then(data => {
//           const movieIds = data.results.slice(0, 3).map(movie => movie.id);
//           return movieIds;
//         })
//         .then(movieIds => {
//           // Step 2: Fetch details for each movie ID
//           const movieDetailPromises = movieIds.map(id =>
//             fetch(`https://api.themoviedb.org/3/movie/${id}`, {
//               headers: {
//                 accept: 'application/json',
//                 Authorization: `Bearer ${myToken}`
//               }
//             }).then(res => res.json())
//           );
  
//           // Step 3: Resolve all promises to get movie details
//           return Promise.all(movieDetailPromises);
//         })
//         .then(movieDetails => {
//           setMovies(movieDetails); // Update state with detailed movie data
//         })
//         .catch(err => console.error("Fetch Error:", err));
//     }, []);
  
//     return (
//       <div>
//         <h2>Recently Changed Movies</h2>
//         <div>
//           {movies.length > 0 ? (
//             movies.map(movie => (
//               <div key={movie.id}>
//                 <h3>{movie.title}</h3>
//                 <p>Release Date: {movie.release_date}</p>
//                 <p>Overview: {movie.overview}</p>
//                 {/* Add more details as needed */}
//               </div>
//             ))
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </div>
//     );
//   };
//   export default MovieList;



import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;

