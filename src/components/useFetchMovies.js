// useFetchMovies.js
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
        setMovies(data.results || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  return { movies, error };
};

export default useFetchMovies;
