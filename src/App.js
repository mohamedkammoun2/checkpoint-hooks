import { useState } from "react";
import "./App.css";
import { moviesData } from "./data";
import MovieList from "./Components/MovieList";
import AddNewMovie from "./Components/AddNewMovie";
import Surch from "./Components/Surch";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filterText, setFilterText] = useState("gu");
  const [filterRating, setFilterRating] = useState(1);
  const handleTextFiler = (x) => setFilterText(x);
  const handleRatingFilter = (y) => setFilterRating(y);
  // console.log(movies);
  // deletefunction
  const handleDelete = (theId) =>
    setMovies(movies.filter((el) => el.id !== theId));
  // add new movie
  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
  // edit movie
  const handleEdit = (editedMovie) =>
    setMovies(
      movies.map((el) =>
        el.id === editedMovie.id ? { ...el, ...editedMovie } : el
      )
    );
  return (
    <div className="App">
      <Surch
        filterText={filterText}
        filterRating={filterRating}
        handleTextFiler={handleTextFiler}
        handleRatingFilter={handleRatingFilter}
      />
      <MovieList
        list={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(filterText.toLowerCase()) &&
            el.rating >= filterRating
        )}
        deleteFunction={handleDelete}
        handleEdit={handleEdit}
      />
      <AddNewMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
