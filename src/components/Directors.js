import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {directors.map(director => <Director key={director.name} name={director.name} movies={director.movies}/>)}
  </div>
  )
}

export default Directors;

function Director({name, movies}){

  const moviesList = movies.map(movie => {
    return <li key={movie}>{movie}</li>
  })
  return(
    <div>
      <h3>{name}</h3>
      <ul>{moviesList}</ul>
    </div>
  )
}