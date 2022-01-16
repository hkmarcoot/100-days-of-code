import React from "react";
import "./HistoryItem.css";

function HistoryItem({ movie, index, removeMovieFromHistory }) {
  return (
    <li className="HistoryItem">
      <h5 className="history-item-title">{movie.Title}</h5>
      <img className="poster" src={movie.Poster} alt="" />
      <button className="remove-btn" onClick={() => removeMovieFromHistory(index)}>
        Remove
      </button>
    </li>
  );
}

export default HistoryItem;
