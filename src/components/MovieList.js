// import { INITIAL_MOVIE_LIST } from "../App";
import { Movie } from "./Movie";
import { useState } from "react";
export function MovieList({movieList, setMovieList}) {
  
  return (
    <div>
       
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
