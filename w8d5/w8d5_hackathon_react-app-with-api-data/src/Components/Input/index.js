import { useState } from "react";
import "./input.css";

const API_KEY = process.env.REACT_APP_API_KEY;

async function getMovieData(title, year) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}&y=${year}&type=movie`
  );
  const data = await response.json();
  return data;
}

function Input({ updateCurrentMovie, addMovieToHistory }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState();

  function updateYear(e) {
    const value = e.target.value;
    setYear(value);
  }

  function updateTitle(e) {
    const value = e.target.value;
    setTitle(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const titleInput = e.target[0];
    const yearInput = e.target[1];

    const movie = await getMovieData(title, year);

    if (movie.Response === "False") return;
    else {
      updateCurrentMovie(movie);
      addMovieToHistory(movie);

      titleInput.value = "";
      yearInput.value = "";
    }
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div>
        <input className="title-input" placeholder="Title" onChange={updateTitle} type="text" />
        <input className="year-input" placeholder="Year" onChange={updateYear} type="number" />
      </div>
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default Input;
