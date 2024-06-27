import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AUTHOR_API } from "../API_LINK";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

// yup is used here to validate the input as a certain format

const formValidationSchema = yup.object({
  name: yup
    .string()
    .min(4, "Atleast Need 4 Character for Author Name")
    .trim()
    .strict(true)
    .required("Fill the Author Name"),
  DOB: yup
    .string()
    .min(10, "Valid Birth Date need 10 characters (yyyy-mm-dd)")
    .max(12, "Birth Date should be within or equal to 15")
    .required("Fill the Birth Date")
    .matches(/^[0-9._%+-]{10,12}$/, "Enter Valid Birth Date (yyyy-mm-dd)"),
  bio: yup
    .string()
    .min(20, "Atleast Need 20 Character for Author Short Bio")
    .trim()
    .strict(true)
    .required("Fill the Author Short Bio"),
});

// This is Edit Author Component

export default function EditAuthor() {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  // getting the data from the api to edit
  useEffect(() => {
    fetch(`${AUTHOR_API}/AUTHOR_API/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, []);

  // if the author variable contains some data the EditAuthorData function is called with sending the author is prop

  return author ? <EditAuthorData author={author} /> : "Loading...";
}

function EditAuthorData({ author }) {
  const navigate = useNavigate();

  // formik is used to set initital values, to validate and add the new author data to the api as crud operations
  // also navigating to authors list component
  const formik = useFormik({
    initialValues: {
      name: author.name,
      DOB: author.DOB,
      bio: author.bio,
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      fetch(`${AUTHOR_API}/AUTHOR_API/${author.id}`, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then(() => navigate("/authors-list"));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="container mt-5 d-flex flex-column"
    >
      <h1 className="text-center">EDIT AUTHOR DATA</h1>
      <TextField
        type="text"
        id="outlined-basic name"
        name="name"
        label="Enter Author Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="mb-3">
        {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
      </div>
      <TextField
        type="text"
        id="outlined-basic birth"
        name="DOB"
        label="Enter Author Birth Date"
        variant="outlined"
        value={formik.values.DOB}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="mb-3">
        {formik.touched.DOB && formik.errors.birth ? formik.errors.DOB : ""}
      </div>
      <TextField
        type="text"
        id="outlined-basic bio"
        name="bio"
        label="Enter Author Short Bio"
        variant="outlined"
        value={formik.values.bio}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="mb-3">
        {formik.touched.bio && formik.errors.bio ? formik.errors.bio : ""}
      </div>
      <Button color="success" variant="contained" type="submit">
        EDIT AUTHOR DATA
      </Button>
    </form>
  );
}
