import { useState } from "react";

import "./App.css";
import Input from "../Input";
import MovieDisplay from "../MovieDisplay";
import SearchHistory from "../SearchHistory";

function App() {
  const [currentMovie, setCurrentMovie] = useState();
  const [movies, setMovies] = useState([]);

  function addMovieToHistory(newMovie) {
    const duplicates = movies.find((movie) => movie.imdbID === newMovie.imdbID);

    if (duplicates) return;

    const newList = [...movies, newMovie];
    setMovies(newList);
  }

  function removeMovieFromHistory(index) {
    const newList = [...movies.slice(0, index), ...movies.slice(index + 1)];
    setMovies(newList);
  }

  function updateCurrentMovie(newMovie) {
    setCurrentMovie(newMovie);
  }

  return (
    <div className="App">
      <Input
        updateCurrentMovie={updateCurrentMovie}
        addMovieToHistory={addMovieToHistory}
      />
      {/* {currentMovie ? <MovieDisplay movie={currentMovie} /> : ""} */}
      {currentMovie && <MovieDisplay movie={currentMovie} />}
      <SearchHistory
        movies={movies}
        removeMovieFromHistory={removeMovieFromHistory}
      />
    </div>
  );
}

export default App;
