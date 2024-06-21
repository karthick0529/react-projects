import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { API } from "../global";
import { MovieSharp } from "@mui/icons-material";
import axios from "axios";


export function MovieDetails() {
  const { movieid } = useParams();
  const navigate = useNavigate()

  const [movies, setMovie] = useState({});

  const getMovies = async () => {
    try {
      const response = await axios.get(`${API}/${movieid}`, {
        method: "GET"
      })
    
      console.log(response.data)
      setMovie(response.data)
    } catch (error) {
      console.error("Error listing movies", error)
    }
  }

  useEffect(() => {
    getMovies();
    return undefined;
  }, []);//call only once


  // useEffect(() => {
  //   fetch(`${API}/${movieid}`, {
  //     method: "GET"
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setMovie(data))
  // }, [])//call only once


  // const movies = movieList[movieid]
  // console.log(movies)


  return (
    <div className="movie-detail-card">
      {/* <iframe width="100% " height="430px " src={movies.trailer} title="Bridgerton | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

      <div className="movie-spec">
        <h2>
          {MovieSharp.name}
        </h2>
        <h3>⭐{movies.rating}</h3>
      </div>

      <p className="movie-summary">{movies.summary}</p>

      <Button variant="contained" startIcon={<UndoIcon />} onClick={() => navigate(-1)}>
        BACK
      </Button>


    </div>
  );
}