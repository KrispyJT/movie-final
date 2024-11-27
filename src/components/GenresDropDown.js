import React, { useState, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { myToken } from '../mykey';

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

export default function GenresDropdown({ onGenresChange }) {
  const [genres, setGenres] = useState([]); // Store fetched genres
  const [selectedGenres, setSelectedGenres] = useState([]); // Track selected genres

  // Fetch genres from TMDB API
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`, // Replace with your TMDB API key
      },
    };

    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US', options)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Genres:', data.genres); // Log the genres for debugging
        setGenres(data.genres || []); // Set the genres in state
        localStorage.setItem('movieGenres', JSON.stringify(data.genres)); // Save genres to localStorage
      })
      .catch((err) => console.error('Error fetching genres:', err));
  }, []);

  // Handle genre selection
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedGenres(
      typeof value === 'string' ? value.split(',') : value // Handle multiple selections
    );

    if (onGenresChange) {
      onGenresChange(value); // Pass selected genres to parent component
    }
  };

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
              .map((id) => genres.find((genre) => genre.id === id)?.name) // Map IDs to genre names
              .join(', ')
          }
          MenuProps={MenuProps}
        >
          {genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              <Checkbox checked={selectedGenres.includes(genre.id)} />
              <ListItemText primary={genre.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
