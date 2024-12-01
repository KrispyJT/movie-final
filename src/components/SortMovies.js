// SortMovies.js
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

/**
 * SortMovies: 
 * - Allows users to sort by rating, release date, or popularity.
 * - Passes the selected sorting criteria to the parent component via setSortCriteria.
 * 
 * @param {string} props.sortCriteria - The current sorting criteria
 * @param {Function} props.setSortCriteria - Callback function to handle sorting criteria changes
 */


const SortMovies = ({ sortCriteria, setSortCriteria }) => {
  return (
    <div className="sort-movies-dropdown">
      <h3>Sort by:</h3>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="sort-select-label">Sort by</InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          aria-labelledby='sort-select-label'
          value={sortCriteria} // value is the current sorting criteria
          onChange={(e) => setSortCriteria(e.target.value)} // handler inline to update the sorting criteria on change
        >
          <MenuItem value="">None</MenuItem> {/* Default option to clear sorting*/}
          <MenuItem value="rating">Rating</MenuItem> {/* Sort by rating */}
          <MenuItem value="releaseDate">Release Date</MenuItem> {/* Sort by release date */}
          <MenuItem value="popularity">Popularity</MenuItem> {/* Sort by popularity */}
        </Select>
      </FormControl>
    </div>
  );
};

export default SortMovies;

