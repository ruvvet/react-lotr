import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const Movies = [
  { title: 'The Fellowship of the Ring', hours: 2, min: 58 },
  { title: 'The Two Towers', hours: 2, min: 59 },
  { title: 'The Return of the King', hours: 3, min: 21 },
];


const displayMovie = Movies.map((movie, i)=>{
  return <Movie title={`The Lord of the Rings: ${movie.title}`}  hours={movie.hours} min={movie.min} key={i}/>
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Movie /> */}


        {displayMovie}
      </header>
    </div>
  );
}

export default App;
