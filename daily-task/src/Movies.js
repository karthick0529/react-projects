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
