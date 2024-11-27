import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GenresDropDown from './components/GenresDropDown';
import NowPlaying from './components/NowPlaying';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenresChange = (genres) => {
    setSelectedGenres(genres); // Update selected genres
  };

  return (
    <div className="container mt-5">
      <Header />
      <h1 className="text-center mb-4">Movie Explorer</h1>
      <GenresDropDown onGenresChange={handleGenresChange} />
      <NowPlaying selectedGenres={selectedGenres} />
      <Footer />
    </div>
  );
}

export default App;
