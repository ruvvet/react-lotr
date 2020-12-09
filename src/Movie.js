export function rating() {
  //calculate rating

}

function Movie(props) {

  // props are immutable
  // don't assign values to props
  // don't change value of prop in the child
  
  return (
    <div>
      <h1> {props.title}</h1>
      <p>
        {props.hours}:{props.min} min
      </p>
    </div>
  );
}

export default Movie;

// exporting function movie
// default export only exports what the thing is
// any non-default export is an obj-key export
