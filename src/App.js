// App.js 
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GenresDropDown from './components/GenresDropDown';
import SortMovies from './components/SortMovies';
import NowPlaying from './components/NowPlaying';
import MovieAccordion from './components/MovieAccordion';
import Footer from './components/Footer';


/**
 * Main Hub for the Movie Explorer App:
 * - Manages the global state (movie categories [seen it, want to see, not interested], selected genres, sorting criteria).
 * - Connects all components together by passing props and handling events.
 * - Movie categories are stored in localStorage to persist data.
 * 
 * @returns {JSX.Element} - Main App component
 * 
 * References:
 * - React useState: https://reactjs.org/docs/hooks-state.html
 * - React useEffect: https://reactjs.org/docs/hooks-effect.html
 * - LocalStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 * - Bootstrap: https://react-bootstrap.github.io/layout/grid
 */

function App() {
  // Load movie categories from localStorage or initialize with empty arrays (seen, want to see, and not interested)
  const [movieCategories, setMovieCategories] = useState(() => { 
    const savedCategories = localStorage.getItem('movieCategories');
    return savedCategories
      ? JSON.parse(savedCategories) 
      : { seenIt: [], wantToSee: [], notInterested: [] }; 
  }); 

  // Manages the selected genres and sorting criteria using useState 
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('');


// Synchoronize movie categories with localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('movieCategories', JSON.stringify(movieCategories));
  }, [movieCategories]);


// Handler to update selected genres based on user selection 
  const handleGenresChange = (genres) => setSelectedGenres(genres);

// Handler to update movie categories when a movie's status changes (ensures the movie is only in one category at a time)
  const handleStatusChange = (title, status) => {
    setMovieCategories((prev) => {
    // create a new object with updated categories
    // Remove the movie from all categories and add it to the selected category
      const updatedCategories = {
        seenIt: prev.seenIt.filter((movie) => movie !== title), // remove movie from seenIt
        wantToSee: prev.wantToSee.filter((movie) => movie !== title), // remove movie from wantToSee
        notInterested: prev.notInterested.filter((movie) => movie !== title), // remove movie from notInterested
      };
      // Add the movie to the selected category based on the status
      if (status === 'Seen It') updatedCategories.seenIt.push(title);
      if (status === 'Want to See') updatedCategories.wantToSee.push(title);
      if (status === 'Not Interested') updatedCategories.notInterested.push(title);

      // Return the updated categories which updates the state
      return updatedCategories;
    });
  };
  
  // Handler to clear all movie categories and resets localStorage when user clicks the "Clear All" button
  const handleClearAll = () => {
    localStorage.removeItem('movieCategories');
    setMovieCategories({ seenIt: [], wantToSee: [], notInterested: [] });
  };

  // Render the main layout and components
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row mt-4">
          {/* Sidebar for sorting and filtering */}
          <aside className="col-md-3 col-sm-12 mb-4">
            <GenresDropDown onGenresChange={handleGenresChange} />
            <SortMovies sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} /> 
          </aside>

          {/* Main Content */}
          <main className="col-md-9 col-sm-12">
            <div className="movies-section">
              <MovieAccordion {...movieCategories} onClearAll={handleClearAll} />
              <NowPlaying
                selectedGenres={selectedGenres}
                onStatusChange={handleStatusChange}
                sortCriteria={sortCriteria}
              />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;







