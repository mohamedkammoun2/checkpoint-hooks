import React from "react";
import StarRating from "./StarRating";
import EditMovie from "./Edit";

const MovieCard = ({ movie, deleteMethode, handleEdit }) => {
  //   console.log(movie.name);
  return (
    <div className="movie-card">
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.name} />
      <StarRating rating={movie.rating} />

      <h3>{movie.date}</h3>
      <button onClick={() => deleteMethode(movie.id)} className="btn">
        Delete
      </button>
      <EditMovie film={movie} handleEdit={handleEdit} />
    </div>
  );
};

export default MovieCard;
