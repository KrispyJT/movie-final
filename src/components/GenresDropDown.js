
// GenresDropDown.

import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import useFetch from './useFetch';

/**
 * GenresDropDown Component:
 * - Fetches available genres using useFetch
 * - Allows users to select multiple genres for filtering movies (Action, Comedy, Drama, etc.)
 * - Communicates selected genres to the parent component via onGenresChange callback. 
 * - Uses MUI components for styling and functionality (Select, MenuItem, Checkbox, etc.)
 * 
 * Mui installation: https://mui.com/material-ui/getting-started/installation/
 * MUI Select: https://mui.com/material-ui/react-select/
 * 
 * @param {Function} onGenresChange - Callback function to handle genre changes
 * 
 * 
 */


// Drop down menu behavior from mui documentation
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const GenresDropDown = ( { onGenresChange } ) => {
  const { genres } = useFetch(); // Fetch genres from useFetch using custom hook
  const [selectedGenres, setSelectedGenres] = useState([]); // Tracks selected genres in state


// Handler for dropdrown change and updates the selected genres
  const handleChange = (event) => {
    const { value } = event.target; 
    setSelectedGenres(() =>
      typeof value === 'string' ? value.split(',') : value
    );
    if (onGenresChange) {
      onGenresChange(value);
    }
  };
 
  if (!genres) return <p>Loading genres...</p>; // Show loading state
  if (genres.length === 0) return <p>No genres available.</p>; // Show no genres available


  return (
    <div className="genres-dropdown">
      <h2>Filter by Genre</h2>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="genre-multi-select-label">Genres</InputLabel>
        <Select
          aria-labelledby='genre-multi-select-label'
          labelId="genre-multi-select-label"
          id="genre-multi-select"
          multiple
          value={selectedGenres} // Track selected genres
          onChange={handleChange} // Handle dropdown change
          input={<OutlinedInput label="Genres" />} 
          renderValue={(selected) => 
            selected
              .map((id) => genres.find((genre) => genre.id === id)?.name)  // To map genre IDs to names 
              .join(', ') || 'Select genres'                              // Join selected genres with a comma
          }
          MenuProps={MenuProps} 
        >
          {genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>                    {/* Map over genres and create a MenuItem for each */}
              <Checkbox checked={selectedGenres.includes(genre.id)} />    {/* Checkbox to indicate selected genres */}
              <ListItemText primary={genre.name} />                      {/* Display genre name */}
            </MenuItem> 
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default GenresDropDown;
