import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {actors.map(actor => <Actor key={actor.name} name={actor.name} movies={actor.movies}/>)}
  </div>
  )
}

export default Actors;

function Actor({name, movies}){
  const movieList = movies.map(movie => {
    return <li key={movie}>{movie}</li>
  })

  return(
    <div>
      <h1>{name}</h1>
      <ul>{movieList}</ul>
    </div>
  )
}