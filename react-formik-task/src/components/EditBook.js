import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BOOK_API } from "../API_LINK";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

// yup is used here to validate the input as a certain format

const formValidationSchema = yup.object({
  title: yup
    .string()
    .min(4, "Atleast Need 4 Character for Book Title")
    .trim()
    .strict(true)
    .required("Fill the Book Title"),
  authors: yup
    .string()
    .min(4, "Atleast Need 4 Character for Author Name")
    .trim()
    .strict(true)
    .required("Fill the Book Title"),
  isbn: yup
    .string()
    .min(10, "Atleast Need 10 Numbers for ISBN NUMBER")
    .max(13, "ISBN Number should be within or equal to 13")
    .required("Fill the ISBN NUMBER")
    .matches(/^[0-9._%+-]{10,13}$/, "Enter Valid ISBN Number (only number)"),
  publishedDate: yup
    .string()
    .min(10, "Valid Publish Date need 10 characters (yyyy-mm-dd)")
    .max(12, "Publish Date should be within or equal to 12")
    .required("Fill the Publish Date")
    .matches(/^[0-9._%+-]{10,12}$/, "Enter Valid Publish Date (yyyy-mm-dd)"),
});

// This is Edit Book Component

export default function EnterBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  // getting the data from the api to edit
  useEffect(() => {
    fetch(`${BOOK_API}/BOOK_API/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);

  // if the book variable contains some data the EditBookData function is called with sending the book is prop

  return book ? <EditBookData book={book} /> : "Loading...";
}

function EditBookData({ book }) {
  const navigate = useNavigate();

  // formik is used to set initital values, to validate and add the new author data to the api as crud operations
  // also navigating to books list component
  const formik = useFormik({
    initialValues: {
      title: book.title,
      authors: book.authors,
      isbn: book.isbn,
      publishedDate: book.publishedDate,
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      fetch(`${BOOK_API}/BOOK_API/${book.id}`, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then(() => navigate("/"));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="container mt-5 d-flex flex-column"
    >
      <h1 className="text-center">EDIT BOOK DATA</h1>
      <TextField
        type="text"
        id="outlined-basic title"
        name="title"
        label="Enter Book Title"
        variant="outlined"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="mb-3">
        {formik.touched.title && formik.errors.title ? formik.errors.title : ""}
      </div>
      <TextField
        type="text"
        id="outlined-basic author"
        name="authors"
        label="Enter Book Author"
        variant="outlined"
        value={formik.values.authors}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="mb-3">
        {formik.touched.authors && formik.errors.authors
          ? formik.errors.authors
          : ""}
      </div>
      <TextField
        type="number"
        id="outlined-basic isbn"
        name="isbn"
        label="Enter Book ISBN"
        variant="outlined"
        value={formik.values.isbn}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="mb-3">
        {formik.touched.isbn && formik.errors.isbn ? formik.errors.isbn : ""}
      </div>
      <TextField
        type="text"
        id="outlined-basic publish"
        name="publishedDate"
        label="Enter Book Publish Date"
        variant="outlined"
        value={formik.values.publishedDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className="mb-3">
        {formik.touched.publishedDate && formik.errors.publishedDate
          ? formik.errors.publishedDate
          : ""}
      </div>
      <Button color="success" variant="contained" type="submit">
        EDIT BOOK DATA
      </Button>
    </form>
  );
}
