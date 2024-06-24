import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "../global";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const moviesValidationSchema = yup.object({
  name: yup.string().min(5, "Enter the name").required("Name is required"),
  poster: yup
    .string()
    .min(20, "Enter the poster")
    .max(200, "poster size exceeds")
    .required("poster is required"),
  rating: yup
    .number()
    .min(1, "Enter the rating")
    .max(10, "Rating cannot be more than 10")
    .required("rating is required"),
  summary: yup
    .string()
    .min(10, "enter the summary")
    .required("Summary is mandatory"),
});

function AddMovie() {
  const navigate = useNavigate();

  // const [name, setName] = useState("")
  // const [poster, setPoster] = useState("")
  // const [rating, setRating] = useState()
  // const [summary, setSummary] = useState("")

  const formik = useFormik({
    initialValues: {
      name: "Gravity",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg",
      rating: "5",
      summary:
        "Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney)",
    },
    validationSchema: moviesValidationSchema,
    onSubmit: (newMovie) => {
      console.log("onSubmit", newMovie);
    },
  });

  const createMovies = (newMovie) => {
    console.log("newMovie", newMovie);

    fetch(`${API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then(() => navigate("/movies"));
    // setMovieList([...movieList, newMovie])
  };

  return (
    <form className="add-movie-form" onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        // value={name}
        // onChange={(event) => setName(event.target.value)}
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name 
        ? formik.errors.name 
        : ""}
      <TextField
        id="poster"
        label="Poster"
        variant="outlined"
        // value={poster}
        // onChange={(event) => setPoster(event.target.value)}
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}
      <TextField
        id="rating"
        label="Rating"
        variant="outlined"
        // value={rating}
        // onChange={(event) => setRating(event.target.value)}
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}
      <TextField
        id="summary"
        label="Summary"
        variant="outlined"
        // value={summary}
        // onChange={(event) => setSummary(event.target.value)}
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}

      <Button
        variant="contained"
        type="submit"
        onClick={createMovies}
        // ={() => {
        //   const newMovie = {
        //     name,
        //     poster,
        //     rating,
        //     summary,
        //   };

        //   fetch(`${API}`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(newMovie),
        //   })
        //     .then((res) => res.json())
        //     .then(() => navigate("/movies"));
        //   // setMovieList([...movieList, newMovie])
        // }}
      >
        Add Movie
      </Button>
    </form>
  );
}

export default AddMovie;
