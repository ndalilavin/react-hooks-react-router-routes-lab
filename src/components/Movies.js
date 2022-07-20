import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map(movie => <Movie key={movie.title} title={movie.title} time={movie.time} genres={movie.genres}/>)}
  </div>
  )
}

export default Movies;



function Movie({title, time, genres}){

  const genresList = genres.map(genre => {
    return <li key={genre}>{genre}</li>
  })
  return (
    <div>
      <h1>{title}</h1>
      <h3>Time: {time} minutes.</h3>
      <ul>{genresList}</ul>
    </div>
  )
}