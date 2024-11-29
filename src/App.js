// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import GenresDropDown from './components/GenresDropDown';
// import NowPlaying from './components/NowPlaying';
// import MovieAccordion from './components/MovieAccordian';
// import Footer from './components/Footer';


// function App() {
//   const [selectedGenres, setSelectedGenres] = useState([]);

//   // Single state for movie categories
//   const [movieCategories, setMovieCategories] = useState({
//     seenIt: [],
//     wantToSee: [],
//     notInterested: [],
//   });

//   // Updates the selected genres based on the user's selection
//   const handleGenresChange = (genres) => {
//     setSelectedGenres(genres); // Update selected genres
//   };

//  // Updates the movie categories based on the  user's selection
//   const handleStatusChange = (title, status) => {
//     setMovieCategories((prev) => {
//       // Remove the movie from all categories first
//       const updatedCategories = {
//         seenIt: prev.seenIt.filter((movie) => movie !== title),
//         wantToSee: prev.wantToSee.filter((movie) => movie !== title),
//         notInterested: prev.notInterested.filter((movie) => movie !== title),
//       };

//       // Add the movie to the selected category
//       if (status === 'Seen It') {
//         updatedCategories.seenIt = [...updatedCategories.seenIt, title]; 
//       } else if (status === 'Want to See') {
//         updatedCategories.wantToSee = [...updatedCategories.wantToSee, title];
//       } else if (status === 'Not Interested') {
//         updatedCategories.notInterested = [...updatedCategories.notInterested, title];
//       }

//       return updatedCategories;
//     });
//   };

//   return (
 
//     <div className='App'>
//       <Header />
//       <GenresDropDown onGenresChange={handleGenresChange} />
//       <div className="container mt-5">
//         <NowPlaying selectedGenres={selectedGenres} onStatusChange={handleStatusChange} />
//         <MovieAccordion {...movieCategories} />
//       </div>
     
//       <Footer />
//     </div>

//   );
// }

// export default App;



// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Header from './components/Header';
// import GenresDropDown from './components/GenresDropDown';
// import NowPlaying from './components/NowPlaying';
// import MovieAccordion from './components/MovieAccordian';
// import Footer from './components/Footer';

// function App() {
//   // Load movie categories from localStorage or initialize with empty arrays
//   const [movieCategories, setMovieCategories] = useState(() => {
//     const savedCategories = localStorage.getItem('movieCategories');
//     return savedCategories 
//       ? JSON.parse(savedCategories) 
//       : { seenIt: [], wantToSee: [], notInterested: [],
//     };
//   });

//   const [selectedGenres, setSelectedGenres] = useState([]); // Tracks selected genres

//   // Save movie categories to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('movieCategories', JSON.stringify(movieCategories));
//   }, [movieCategories]);

//   // Updates selected genres based on the user's selection
//   const handleGenresChange = (genres) => {
//     setSelectedGenres(genres);
//   };

//   // Updates movie categories based on user selection
//   const handleStatusChange = (title, status) => {
//     setMovieCategories((prev) => {
//       const updatedCategories = {
//         seenIt: prev.seenIt.filter((movie) => movie !== title),
//         wantToSee: prev.wantToSee.filter((movie) => movie !== title),
//         notInterested: prev.notInterested.filter((movie) => movie !== title),
//       };
//       if (status === 'Seen It') updatedCategories.seenIt.push(title);
//       if (status === 'Want to See') updatedCategories.wantToSee.push(title);
//       if (status === 'Not Interested') updatedCategories.notInterested.push(title);

//       return updatedCategories;
//     });
//   };

//   return (
//     <div className="App">
//       <Header />
//       <GenresDropDown onGenresChange={handleGenresChange} />
//       <div className="container mt-5">
//       <MovieAccordion 
//         {...movieCategories}
//         onClearAll={() => localStorage.removeItem('movieCategories') || setMovieCategories({ seenIt: [], wantToSee: [], notInterested: [] })} />

//         <NowPlaying selectedGenres={selectedGenres} onStatusChange={handleStatusChange} />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;



import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GenresDropDown from './components/GenresDropDown';
import NowPlaying from './components/NowPlaying';
import MovieAccordion from './components/MovieAccordian';
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
