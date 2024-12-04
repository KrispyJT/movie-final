// useFetch.js

import { useState, useEffect, useRef } from 'react';
import { myToken } from '../mykey'; 

/**
 * useFetch:
 * - Fetches genres and movies from The Movie Database (TMDb) API.
 * - Uses the API token for authorization.
 * - Ensures data is fetched only once to prevent re-fetching.
 * - Returns genres and movies data.
 * 
 * 
 * @returns {Object} - { genres, movies }
 * genres: Array of genre objects
 * movies: Array of movie objects
 * 
 * References:
 * TMDb API Now Playing: https://developer.themoviedb.org/reference/movie-now-playing-list
 * TMDb API Genre List: https://developer.themoviedb.org/reference/genre-movie-list
 * 
 */

const useFetch = () => {
  // States to store genres and movies data
  const [genres, setGenres] = useState(null);  // list of genres
  const [movies, setMovies] = useState(null); // list of movies
  const isFetched = useRef(false); // useRef to track if data is fetched

 // Helper function to fetch data from the API
  const fetchData = (url, setter, responseKey) => {
    fetch(url, {
      headers: {
        accept: 'application/json',         // specifies the format of the response 
        Authorization: `Bearer ${myToken}`, // uses the API for authorization
      },
    })
      .then((response) => response.json())
      .then((data) => setter(data[responseKey] || [])) 
      .catch((err) => console.error(`Error fetching ${responseKey}:`, err));
    };


  // Fetch genres and movies on initial render only 
    useEffect(() => {
      if (!isFetched.current) {
        fetchData('https://api.themoviedb.org/3/genre/movie/list?language=en-US', setGenres, 'genres'); // fetches genres and sets the state
        fetchData('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', setMovies, 'results'); // fetches movies and sets the state
        isFetched.current = true; // marks data as fetched to prevent re-fetching
      }
    }, []);  // dependency array ensures the effect runs only once during the initial render

/**
  Why use useRef here?
  * - isFetched ensures the API requests are made only once during the component's lifecycle.
  * - Unlike state, useRef doesn't trigger a re-render when its value changes.
  * - This is crucial here because we want to avoid re-fetching data unnecessarily during re-renders.
    
  Why useEffect here?
  * - useEffect ensures that the API requests are triggered only once when the component mounts.
  * - By using the dependency array (`[]`), the effect runs only during the initial render.
  * - It also provides a clean way to organize asynchronous side effects, like fetching data from an API.
*/
  
    return { genres, movies }; // returns genres and movies data
  };
  
  export default useFetch;

