import "./App.css";

//For using useState we need to import useState from react
import { useState } from "react";

export default function App() {
  // Declaring as Array of String
  // const arr = ["Karthick", "Surya"];

  // Declaring as Array of Objects
  const arr1 = [
    {
      src: "https://tse3.explicit.bing.net/th?id=OIP.tWX8un-L_J91Y0v8JtY8NwHaJ0&pid=Api&P=0&h=180",
      name: "Naruto",
    },
    {
      src: "https://tse3.explicit.bing.net/th?id=OIP.tWX8un-L_J91Y0v8JtY8NwHaJ0&pid=Api&P=0&h=180",
      name: "Naruto",
    },
    {
      src: "https://tse3.explicit.bing.net/th?id=OIP.tWX8un-L_J91Y0v8JtY8NwHaJ0&pid=Api&P=0&h=180",
      name: "Naruto",
    },
  ];

  // const movies = [
  //   {
  //     name: "Beast",
  //     poster:
  //       "https://images.news18.com/ibnlive/uploads/2021/06/1624284456_vijay-in-beast.jpg",
  //     rating: 3,
  //     summary: "Average",
  //   },
  //   {
  //     name: "Bigil",
  //     poster:
  //       "https://moviegalleri.net/wp-content/uploads/2019/06/Bigil-Vijay-New-Look-Poster-HD.jpg",
  //     rating: 3.5,
  //     summary: "Average",
  //   },
  // ];
  return (
    <div className="App">
      {/* Calling Counter Function */}
      {/* <Counter /> */}

      {/* Calling Counter Function */}
      {/* <Dislike /> */}

      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}

      {/* Basic Code to Welcome Function */}
      {/* <Welcome name="karthick" age="25" />
      <Welcome name="Surya" age="25" /> */}

      {/* Map function for Array of Strings */}
      {/* {arr.map((ele) => (
        <Welcome name={ele} />
      ))} */}

      {/* Map function for Array of Objects */}
      {arr1.map((ele) => (
        <Person src={ele.src} name={ele.name} />
      ))}

      {/* Map function for displaying the images and details of Movies function */}
      {/* {movies.map((ele) => (
        <Movies
          poster={ele.poster}
          name={ele.name}
          rating={ele.rating}
          summary={ele.summary}
        />
      ))} */}

      {/* Basic Code to Person Function */}
      {/* <Person
        src="https://tse3.explicit.bing.net/th?id=OIP.tWX8un-L_J91Y0v8JtY8NwHaJ0&pid=Api&P=0&h=180"
        name="Naruto"
        src="https://tse3.explicit.bing.net/th?id=OIP.tWX8un-L_J91Y0v8JtY8NwHaJ0&pid=Api&P=0&h=180"
        name="Naruto"
        src="https://tse3.explicit.bing.net/th?id=OIP.tWX8un-L_J91Y0v8JtY8NwHaJ0&pid=Api&P=0&h=180"
        name="Naruto"
      /> */}
    </div>
  );
}

function Welcome(props) {
  return (
    <div>
      <h1>
        Hello {props.name} and his age is {props.age}
      </h1>
    </div>
  );
}

function Person(props) {
  return (
    <div>
      <img src={props.src} />
      <p>{props.name}</p>

      {/* Calling Counter Function */}
      <Counter />
    </div>
  );
}

// Function for adding Movies as array of Object
function Movies(props) {
  return (
    <div className="movie-container">
      <img className="movie-pic" src={props.poster} alt={props.name} />
      <div className="movie-info">
        <p>Movie Name: {props.name}</p>
        <p>Rating: {props.rating} </p>
        <p>Summary: {props.summary}</p>
      </div>
    </div>
  );
}

// Counter Function with Like and Dislike buttons with Sample as Probs for Counter
function Counter() {
  const [like, setLike] = useState(0);
  console.log("updated Like", like);
  const [dislike, setDislike] = useState(0);
  console.log("Updated Dislike", dislike);
  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}
      >
        👍 {like}
      </button>
      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        👎 {dislike}
      </button>
      <Sample lk={like} dk={dislike} />
    </div>
  );
}

function Sample({ lk, dk }) {
  return (
    <div>
      Like value is {lk}
      Dislike value is {dk}
    </div>
  );
}

// Dislike Function for Dislike button with Sample as Probs for Dislike Separately done
// function Dislike() {
//   const [dislike, setDislike] = useState(0);
//   console.log("Updated Dislike", dislike);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setDislike(dislike + 1);
//         }}
//       >
//         👎 {dislike}
//       </button>
//       <Sample1 dk={dislike} />
//     </div>
//   );
// }

// function Sample1({ dk }) {
//   return <div>Dislike value is {dk}</div>;
// }
