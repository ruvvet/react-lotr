function Movie(props) {
  return (
    // how to loop through this?
    <div>
      <h1> {props.title}</h1>
      <p>
        {props.hours}:{props.min} min
      </p>
    </div>
  );
}

export default Movie;
