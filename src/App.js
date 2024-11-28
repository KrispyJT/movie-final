import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GenresDropDown from './components/GenresDropDown';
import NowPlaying from './components/NowPlaying';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieAccordion from './components/MovieAccordian';



function App() {
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Single state for movie categories
  const [movieCategories, setMovieCategories] = useState({
    seenIt: [],
    wantToSee: [],
    notInterested: [],
  });

  const handleGenresChange = (genres) => {
    setSelectedGenres(genres); // Update selected genres
  };

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
    <div className="container mt-5">
      <Header />
      <h1 className="text-center mb-4">Movie Explorer</h1>
      <GenresDropDown onGenresChange={handleGenresChange} />
      <NowPlaying selectedGenres={selectedGenres} onStatusChange={handleStatusChange} />
      <MovieAccordion {...movieCategories} />
      <Footer />
    </div>
  );
}

export default App;



// function App() {
//   const [selectedGenres, setSelectedGenres] = useState([]);

//   const handleGenresChange = (genres) => {
//     setSelectedGenres(genres); // Update selected genres
//   };


//   const [seenIt, setSeenIt] = useState([]);
//   const [wantToSee, setWantToSee] = useState([]);
//   const [notInterested, setNotInterested] = useState([]);

// const handleStatusChange = (title, status) => {
//   if (status === 'Seen It') {
//     setSeenIt((prev) => [...prev, title]);
//     setWantToSee((prev) => prev.filter((movie) => movie !== title));
//     setNotInterested((prev) => prev.filter((movie) => movie !== title));
//   } else if (status === 'Want to See') {
//     setWantToSee((prev) => [...prev, title]);
//     setSeenIt((prev) => prev.filter((movie) => movie !== title));
//     setNotInterested((prev) => prev.filter((movie) => movie !== title));
//   } else if (status === 'Not Interested') {
//     setNotInterested((prev) => [...prev, title]);
//     setSeenIt((prev) => prev.filter((movie) => movie !== title));
//     setWantToSee((prev) => prev.filter((movie) => movie !== title));
//   }
// };

//   return (
//     <div className="container mt-5">
//       <Header />
//       <h1 className="text-center mb-4">Movie Explorer</h1>
//       <GenresDropDown onGenresChange={handleGenresChange} />
//       <NowPlaying 
//         selectedGenres={selectedGenres}
//         onStatusChange={handleStatusChange} />
//       <MovieAccordion 
//         seenIt={seenIt}
//         wantToSee={wantToSee}
//         notInterested={notInterested}
//         />
//       <Footer />
//     </div>
//   );
// }

// export default App;
