import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function MovieDetails({ movieList }) {
  const { movieid } = useParams();
  const movies = movieList[movieid]
  const navigate = useNavigate()

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://659e6ba547ae28b0bd35caec.mockapi.io/movies/${movieid}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [])//call only once

  console.log(movies)

  return (
    <div className="movie-detail-card">
    <iframe width="100%" height="500" src={movies.trailer} title="Bridgerton | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="movie-spec">
        <h2>{movies.name}</h2>
        <h3>⭐{movies.rating}</h3>
      </div>
      <p className="movie-summary">{movies.summary} </p>
      <Button variant="outlined" startIcon={<UndoIcon />} onClick = {() => navigate(-1)}>
        BACK
      </Button>
    </div>
  );
}
