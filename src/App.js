import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import GenresDropDown from './components/GenresDropDown';
import NowPlaying from './components/NowPlaying';
import MovieAccordion from './components/MovieAccordian';
import Footer from './components/Footer';


function App() {
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Single state for movie categories
  const [movieCategories, setMovieCategories] = useState({
    seenIt: [],
    wantToSee: [],
    notInterested: [],
  });

  // Updates the selected genres based on the user's selection
  const handleGenresChange = (genres) => {
    setSelectedGenres(genres); // Update selected genres
  };

 // Updates the movie categories based on the  user's selection
  const handleStatusChange = (title, status) => {
    setMovieCategories((prev) => {
      // Remove the movie from all categories first
      const updatedCategories = {
        seenIt: prev.seenIt.filter((movie) => movie !== title),
        wantToSee: prev.wantToSee.filter((movie) => movie !== title),
        notInterested: prev.notInterested.filter((movie) => movie !== title),
      };

      // Add the movie to the selected category
      if (status === 'Seen It') {
        updatedCategories.seenIt = [...updatedCategories.seenIt, title]; 
      } else if (status === 'Want to See') {
        updatedCategories.wantToSee = [...updatedCategories.wantToSee, title];
      } else if (status === 'Not Interested') {
        updatedCategories.notInterested = [...updatedCategories.notInterested, title];
      }

      return updatedCategories;
    });
  };

  return (
 
    <div className='App'>
      <Header />
      <GenresDropDown onGenresChange={handleGenresChange} />
      <div className="container mt-5">
        <NowPlaying selectedGenres={selectedGenres} onStatusChange={handleStatusChange} />
        <MovieAccordion {...movieCategories} />
      </div>
     
      <Footer />
    </div>

  );
}

export default App;
