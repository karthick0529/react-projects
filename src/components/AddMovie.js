import React from 'react'
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from '../global';
import { useNavigate } from 'react-router-dom';


function AddMovie() {

    const navigate = useNavigate()

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
            <TextField id="summary" label="Summary" variant="outlined" value={summary}
                onChange={(event) => setSummary(event.target.value)}
            />
            

            <Button variant="contained" onClick={() => {
                const newMovie = {
                    name,
                    poster,
                    rating,
                    summary
                }

                fetch(`${API}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newMovie)
                })
                .then((res) => res.json())
                    .then(() => navigate("/movies"))
                // setMovieList([...movieList, newMovie])
               
            }}>Add Movie</Button>

        </div>
    )
}

export default AddMovie