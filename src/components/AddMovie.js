import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export function AddMovie({movieList, setMovieList}) {
  
    const [name, setName] = useState("")
    const [poster, setPoster] = useState("")
    const [rating, setRating] = useState()
    const [summary, setSummary] = useState("")

    return (
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
  )
}

export default AddMovie