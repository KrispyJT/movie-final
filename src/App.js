import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent";
import React from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {myKey, myToken} from './mykey';
import NowPlaying from './components/NowPlaying';
import Header from './components/Header';
import MovieImage from './components/MovieImage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="container mt-5">
      <Header />
      <h1 className="text-center mb-4">Movie Explorer</h1>
      <NowPlaying />
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