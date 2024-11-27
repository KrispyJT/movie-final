import React, { useState } from 'react';

const SearchMovies = () => {
  const [query, setQuery] = useState(''); // User input
  const [results, setResults] = useState([]); // Fetched search results

  // Fetch movies based on user query
  const fetchMovies = () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your TMDB token
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results || []); // Store results in state
        console.log(data.results); // Log for debugging
      })
      .catch((err) => console.error('Fetch error:', err));
  };

  // Save results to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem('searchResults', JSON.stringify(results));
    alert('Search results saved to localStorage!');
  };

  return (
    <div className="search-movies">
      <h2>Search for Movies</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query as the user types
        placeholder="Type a movie title..."
      />
      <button onClick={fetchMovies}>Search</button>
      {results.length > 0 && (
        <>
          <h3>Results:</h3>
          <ul>
            {results.map((movie) => (
              <li key={movie.id}>
                {movie.title} ({movie.release_date})
              </li>
            ))}
          </ul>
          <button onClick={saveToLocalStorage}>Save Results</button>
        </>
      )}
    </div>
  );
};

export default SearchMovies;

































// import React, { useState } from 'react';

// const SearchMovies = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [recentSearches, setRecentSearches] = useState(() => {
//     return JSON.parse(localStorage.getItem('recentSearches')) || [];
//   });

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.trim()) {
//       fetchMovies(value.trim());
//     } else {
//       setResults([]);
//     }
//   };

//   const fetchMovies = (searchQuery) => {
//     fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=YOUR_API_KEY`)
//       .then((response) => response.json())
//       .then((data) => {
//         setResults(data.results || []);
//         saveRecentSearch(searchQuery);
//       });
//   };

//   const saveRecentSearch = (searchQuery) => {
//     const updatedSearches = [searchQuery, ...recentSearches.filter((item) => item !== searchQuery)].slice(0, 5); // Keep only 5 recent searches
//     setRecentSearches(updatedSearches);
//     localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
//   };

//   return (
//     <div>
//       <label>
//         Search for a Movie:
//         <input type="text" value={query} onChange={handleSearch} />
//       </label>

//       {recentSearches.length > 0 && (
//         <div>
//           <h3>Recent Searches:</h3>
//           <ul>
//             {recentSearches.map((search, index) => (
//               <li key={index} onClick={() => fetchMovies(search)}>
//                 {search}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {results.length > 0 && (
//         <div>
//           <h3>Results:</h3>
//           <ul>
//             {results.map((movie) => (
//               <li key={movie.id}>{movie.title}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchMovies;
