import logo from './logo.svg';
import './App.css';
import Movie, { rating } from './Movie';
import {useState} from 'react';


// 2 primary sets of data
// component has 2 things: state + props
// state is changeable, but props is not
// parent can have a state that is passed to the child as a prop
// child cannot change the prop (that used to be a state in the parent)

function App() {


  // what if its an array...
  // use map/filter/reduce...
  // since you can -RETURN- components from them
  // const movies2 = [
  //   { title: 'The Fellowship of the Ring', hours: 2, min: 58 },
  //   { title: 'The Two Towers', hours: 2, min: 59 },
  //   { title: 'The Return of the King', hours: 3, min: 21 },
  // ];

  // const displayMovie = movies2.map((movie, i)=>{
  //   return <Movie title={`The Lord of the Rings: ${movie.title}`}  hours={movie.hours} min={movie.min} key={i}/>
  // })




  // what if its a nested object...
  // use Object.entries/keys/values
  // to turn it into an array

  // const movies = {
  //   1: { title: 'The Fellowship of the Ring', hours: 2, min: 58 },
  //   2: { title: 'The Two Towers', hours: 2, min: 59 },
  //   3: { title: 'The Return of the King', hours: 3, min: 21 },
  // };



  // changing the state....
  // you can change the state in the parent
  //but once state is passed into child as a prop
  //it can no longer be changed in the child
  const [movies, setMovies] = useState([
    { title: 'The Fellowship of the Ring', hours: 2, min: 58 },
    { title: 'The Two Towers', hours: 2, min: 59 },
    { title: 'The Return of the King', hours: 3, min: 21 },
  ]);

  const handleClick = () =>{
   setMovies([movies[1], movies[2], movies[0]])
  }



  const renderMovies = () => {
    // can have an array of components
    // and put them inside the return of another component
    return movies.map((movie, i) => (
      <Movie
        title={`The Lord of the Rings: ${movie.title}`}
        hours={movie.hours}
        min={movie.min}
        key={i}
      />
    ));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Shuffle</button>

      {/* <Movie /> */}

      {/* returning an array of mapped componenets */}
      {/* {Object.values(movies).map((movie, i) => (
          <Movie
            title={`The Lord of the Rings: ${movie.title}`}
            hours={movie.hours}
            min={movie.min}
            key={i}
          />
        ))} */}

      {/* this is the map thing we did above  - can return an array */}
      {/* {[
          <Movie
            title={`The Lord of the Rings: ${movies2[0].title}`}
            hours={movies2[0].hours}
            min={movies2[0].min}
            key={0}
          />,
          <Movie
            title={`The Lord of the Rings: ${movies2[1].title}`}
            hours={movies2[1].hours}
            min={movies2[1].min}
            key={1}
          />,
          <Movie
            title={`The Lord of the Rings: ${movies2[2].title}`}
            hours={movies2[2].hours}
            min={movies2[2].min}
            key={2}
          />,
        ]} */}

      {renderMovies()}
    </div>
  );
}

export default App;
