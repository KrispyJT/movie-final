import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent";
import React from 'react';
import MovieList from './components/MovieList';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Movie Explorer</h1>
      <MovieList /> {/* Call the MovieList component here */}
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="container mt-5">
//     <h1 className="text-center mb-4">Movie Explorer</h1>
//     <MovieList />
//   </div>
// );
   
// }

// export default App;
