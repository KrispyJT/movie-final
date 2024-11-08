// MovieList.js

import { useState, useEffect } from 'react';
import myKey from '../mykey';


const MovieList = () => { 
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${myKey}&language=en`)
          .then(res => res.json())
          .then(data => {
            console.log("Data:", data);
            setMovies(data.genres); // assuming "data.genres" is the array of genres
          })
          .catch(err => console.error("Fetch error:", err));
      }, []);

    return  (
        <div>
          <h2>Genres</h2>
          <div>
            {movies.length > 0 ? (
              movies.map(movie => (
                <div key={movie.id}>
                  <h3>{movie.name}</h3>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      );
};



export default MovieList;