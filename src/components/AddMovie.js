import React from 'react'
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddMovie({ movieList, setMovieList }) {


    const [name, setName] = useState("")
    const [poster, setPoster] = useState("")
    const [rating, setRating] = useState()
    const [summary, setSummary] = useState("")

    return (
        <div className="add-movie-form">
            <TextField id="name" label="Name" variant="outlined" value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <TextField id="poster" label="Poster" variant="outlined" value={poster}
                onChange={(event) => setPoster(event.target.value)}
            />
            <TextField id="rating" label="Rating" variant="outlined" value={rating}
                onChange={(event) => setRating(event.target.value)}
            />
            <TextField id="name" label="Name" variant="outlined" value={summary}
                onChange={(event) => setSummary(event.target.value)}
            />
            

            <Button variant="contained" onClick={() => {
                const newMovie = {
                    name,
                    poster,
                    rating,
                    summary
                }

                fetch("https://659e6ba547ae28b0bd35caec.mockapi.io/movies", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newMovie)
                })
                setMovieList([...movieList, newMovie])
            }}>Add Movie</Button>

        </div>
    )
}

export default AddMovie