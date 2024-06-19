// import { INITIAL_MOVIE_LIST } from "../App";
import { Movie } from "./Movie";
import { useState, useEffect } from "react";
export function MovieList() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("https://659e6ba547ae28b0bd35caec.mockapi.io/movies", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => setMovieList(data))
  }, [])//call only once

  console.log(movieList)

  
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
