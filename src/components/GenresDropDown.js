
// GenresDropDown.
// https://mui.com/material-ui/getting-started/installation/
// https://mui.com/material-ui/react-select/

import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import useFetch from './useFetch';

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

const GenresDropDown = ({ onGenresChange }) => {
  const { genres } = useFetch(); // Fetch genres from useFetch

  const [selectedGenres, setSelectedGenres] = useState([]); // Track selected genres
  const [hoveredGenre, setHoveredGenre] = useState(null); // Track the hovered genre


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    const selected = typeof value === 'string' ? value.split(',') : value; // Handle multi-select
    setSelectedGenres(selected); // Update selected genres

    if (onGenresChange) {
      onGenresChange(selected); // Notify parent of changes
    }
  };

  if (!genres) return <p>Loading genres...</p>; // Show loading state

  return (
    <div>
      <h3>Filter by Genre</h3>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="genre-multi-select-label">Genres</InputLabel>
        <Select
          labelId="genre-multi-select-label"
          id="genre-multi-select"
          multiple
          value={selectedGenres}
          onChange={handleChange}
          input={<OutlinedInput label="Genres" />}
          renderValue={(selected) =>
            selected
              .map((id) => genres.find((genre) => genre.id === id)?.name) // Map genre IDs to names
              .join(', ')
          }
          MenuProps={MenuProps}
        >
          {genres.map((genre) => (
            <MenuItem 
              key={genre.id} 
              value={genre.id}
              onMouseEnter={() => setHoveredGenre(genre.id)}
              onMouseLeave={() => setHoveredGenre(null)}
              style={{
                backgroundColor: hoveredGenre === genre.id ? '#ddd' : 'inherit',
                color: hoveredGenre === genre.id ? '#333' : 'inherit',
              }}
              aria-labelledby="genre-multi-select-label"
              >
              <Checkbox checked={selectedGenres.includes(genre.id)} />
              <ListItemText primary={genre.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default GenresDropDown;



