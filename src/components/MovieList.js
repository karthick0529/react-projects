// import { INITIAL_MOVIE_LIST } from "../App";
import { Movie } from "./Movie";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function MovieList({movieList, setMovieList}) {
  
  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [rating, setRating] = useState()
  const [summary, setSummary] = useState("")

  
  return (
    <div>
      <div className="add-movie-form">

        <TextField id="name" label="Name" variant="outlined" value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField id="Poster" label="Poster" variant="outlined" value={poster}
          onChange={(event) => setPoster(event.target.value)}
        />
        <TextField id="Rating" label="Rating" variant="outlined" value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <TextField id="Summary" label="Summary" variant="outlined" value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />
        {/* copy movieList and add newMovie */}

        <Button variant="contained" onClick={() => {
            const newMovie = {
              name,
              poster,
              rating,
              summary
            }
            setMovieList([...movieList, newMovie])
          }
          }
          >Add Movie</Button>

        
      </div> 
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
