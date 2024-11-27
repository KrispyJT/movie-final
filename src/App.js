// import logo from './logo.svg';
// import './App.css';
// import TestComponent from "./components/TestComponent";
// import React from 'react';
// import MovieList from './components/MovieList';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {myKey, myToken} from './mykey';
// import NowPlaying from './components/NowPlaying';
// import Header from './components/Header';
// import MovieImage from './components/MovieImage';
// import Footer from './components/Footer';
// import SearchMovies from './components/SearchMovies';
// import Favorites from './components/Favorites';
// import GenresDropdown from './components/GenresDropDown';


// function App() {
//   const [selectedGenres, setSelectedGenres] = useState([]); // Track selected genres

//   // Handle genre changes
//   const handleGenresChange = (genres) => {
//     console.log('Selected Genres:', genres);
//     setSelectedGenres(genres); // Update state with selected genres
//   };

//   return (
//     <div className="container mt-5">
//       <Header />
//       <h1 className="text-center mb-4">Movie Explorer</h1>
//       <GenresDropdown />
//       <NowPlaying />
//       <Footer />
//       {/* <MovieList /> */}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'; // Import useState here
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GenresDropdown from './components/GenresDropDown';
import NowPlaying from './components/NowPlaying';

function App() {
  const [selectedGenres, setSelectedGenres] = useState([]); // Track selected genres

  // Handle genre changes
  const handleGenresChange = (genres) => {
    console.log('Selected Genres:', genres);
    setSelectedGenres(genres); // Update state with selected genres
  };

  return (
    <div className="container mt-5">
      <Header />
      <h1 className="text-center mb-4">Movie Explorer</h1>
      <GenresDropdown onGenresChange={handleGenresChange} /> {/* Pass the handler */}
      <NowPlaying selectedGenres={selectedGenres} /> {/* Pass the selected genres */}
      <Footer />
    </div>
  );
}

export default App;




// function App() {
//   return (
//     <div className="container mt-5">
//       <Header />
//       <h1 className="text-center mb-4">Movie Explorer</h1>
//       <NowPlaying />
//       <Footer />
//     </div>

//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="container mt-5">
//     <h1 className="text-center mb-4">Movie Explorer</h1>
//     <MovieList />
//   </div>
// );
   
// }

// export default App;
// https://react-bootstrap.netlify.app/docs/components/images
// https://react-bootstrap.netlify.app/docs/components/cards
// https://www.themoviedb.org/about/logos-attribution