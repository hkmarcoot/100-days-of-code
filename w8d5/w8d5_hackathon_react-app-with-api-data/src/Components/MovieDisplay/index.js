import React from "react";
import "./MovieDisplay.css";

function MovieDisplay({ movie }) {
  const { Title, Year, Genre, Poster, Language, Runtime, Director, Plot, Actors, Ratings } = movie;

  const IMDb = Ratings[0];
  const RottenTomatoes = Ratings[1];
  const Metacritic = Ratings[2];

  return (
    <div id="current-movie">
      <div className="movie-header">
        <h2 className="movie-title">{Title}</h2>
        <h3 className="movie-year">{Year}</h3>
        <h4 className="movie-genre">{Genre}</h4>
      </div>
      <img className="movie-poster" src={Poster} alt={`Poster for ${Title}`} />
      <h5>Language: {Language}</h5>
      <h5>{Runtime}</h5>
      <div className="movie-info">
        <h5>Directed by {Director}</h5>
        <div id="ratings">
          <h4>IMDb: {IMDb ? IMDb.Value : "Not Found"}</h4>
          <h4>Rotten Tomatoes: {RottenTomatoes ? RottenTomatoes.Value : "Not Found"}</h4>
          <h4>Metacritic: {Metacritic ? Metacritic.Value : "Not Found"}</h4>
        </div>
        <div className="movie-plot">
          <h4>Plot</h4>
          <p>{Plot}</p>
        </div>
        <div className="movie-actors">
          <h4>Starring</h4>
          <p>{Actors}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDisplay;
