import { useState, useEffect } from 'react';
import { myToken } from '../mykey'; 


const useFetch = () => {
  const [genres, setGenres] = useState(() => {
    const savedGenres = localStorage.getItem('movieGenres');
    return savedGenres ? JSON.parse(savedGenres) : null;
  });

  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('nowPlayingMovies');
    return savedMovies ? JSON.parse(savedMovies) : null;
  });

  useEffect(() => {
    // Fetch genres
    const fetchGenres = () => {
      if (genres) return; // Skip if genres are already in state/localStorage

      fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${myToken}`, // Replace with your TMDB token
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setGenres(data.genres || []); // Update state
          localStorage.setItem('movieGenres', JSON.stringify(data.genres || [])); // Cache in localStorage
        })
        .catch((err) => console.error('Error fetching genres:', err));
    };

    // Fetch now playing movies
    const fetchMovies = () => {
      if (movies) return; // Skip if movies are already in state/localStorage

      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${myToken}`, // Replace with your TMDB token
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results || []); // Update state
          localStorage.setItem('nowPlayingMovies', JSON.stringify(data.results || [])); // Cache in localStorage
        })
        .catch((err) => console.error('Error fetching movies:', err));
    };

    fetchGenres(); // Fetch genres
    fetchMovies(); // Fetch now playing movies
  }, [genres, movies]);

  return { genres, movies };
};

export default useFetch;
