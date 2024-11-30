// App.js 
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GenresDropDown from './components/GenresDropDown';
import NowPlaying from './components/NowPlaying';
import MovieAccordion from './components/MovieAccordion';
import Footer from './components/Footer';

function App() {
  // Load movie categories from localStorage or initialize with empty arrays
  const [movieCategories, setMovieCategories] = useState(() => {
    const savedCategories = localStorage.getItem('movieCategories');
    return savedCategories
      ? JSON.parse(savedCategories)
      : { seenIt: [], wantToSee: [], notInterested: [] };
  });

  const [selectedGenres, setSelectedGenres] = useState([]); // Tracks selected genres

  // Save movie categories to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('movieCategories', JSON.stringify(movieCategories));
  }, [movieCategories]);

  // Updates selected genres based on the user's selection
  const handleGenresChange = (genres) => {
    setSelectedGenres(genres);
  };

  // Updates movie categories based on user selection
  const handleStatusChange = (title, status) => {
    setMovieCategories((prev) => {
      const updatedCategories = {
        seenIt: prev.seenIt.filter((movie) => movie !== title),
        wantToSee: prev.wantToSee.filter((movie) => movie !== title),
        notInterested: prev.notInterested.filter((movie) => movie !== title),
      };
      if (status === 'Seen It') updatedCategories.seenIt.push(title);
      if (status === 'Want to See') updatedCategories.wantToSee.push(title);
      if (status === 'Not Interested') updatedCategories.notInterested.push(title);

      return updatedCategories;
    });
  };

  const handleClearAll = () => {
    localStorage.removeItem('movieCategories');
    setMovieCategories({ seenIt: [], wantToSee: [], notInterested: [] });
  };

  return (
    <div className="App">
      <Header />
      <div className="layout">
        {/* Sidebar for Genre Filter */}
        <aside className="sidebar">
          <GenresDropDown onGenresChange={handleGenresChange} />
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="movies-section">
            <MovieAccordion {...movieCategories} onClearAll={handleClearAll} />
            <NowPlaying
              selectedGenres={selectedGenres}
              onStatusChange={handleStatusChange}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;



