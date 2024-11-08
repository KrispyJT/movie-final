// MovieCard.js

import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
        </div>
    );
}

export default MovieCard;

