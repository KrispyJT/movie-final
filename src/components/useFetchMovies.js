

import { useState, useEffect } from 'react';
import { myToken } from '../mykey';

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${myToken}`,
        },
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const data = await response.json();

        console.log('Fetched Movie Attributes:', data.results); // Log all attributes for inspection
        setMovies(data.results || []);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  return { movies, error };
};

export default useFetchMovies;


// import { useState, useEffect } from 'react';
// import { myToken } from '../mykey';

// const useFetchMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: `Bearer ${myToken}`,
//         },
//       };

//       try {
//         // Check localStorage for cached movies
//         const cachedMovies = localStorage.getItem('nowPlayingMovies');
//         if (cachedMovies) {
//           setMovies(JSON.parse(cachedMovies)); // Parse and set cached data
//           return;
//         }

//         // Fetch from the API if no cached data exists
//         const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
//         const data = await response.json();

//         // Store the movies in localStorage
//         localStorage.setItem('nowPlayingMovies', JSON.stringify(data.results));
//         setMovies(data.results || []);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return { movies, error };
// };

// export default useFetchMovies;



























// // useFetchMovies.js
// import { useState, useEffect } from 'react';
// import { myToken } from '../mykey';

// const useFetchMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: `Bearer ${myToken}`,
//         },
//       };

//       try {
//         const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
//         const data = await response.json();
//         setMovies(data.results || []);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return { movies, error };
// };

// export default useFetchMovies;
