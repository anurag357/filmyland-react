
import './App.css';
import { useState, useEffect } from 'react';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';
                                              
function App() {
  //d42eba84
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  
  const API_URL = "http://omdbapi.com?apikey=d42eba84";

  

  const searchMovies = async(title)=>{
    const responce = await fetch(`${API_URL}&s=${title}`);
    const data = await responce.json();
    setMovies(data.Search);
  }
  
  useEffect(()=>{
    searchMovies('Spiderman');
  }, []);
  
  return (
    <div className="app">
      <h1>MoviesLand</h1>
      
      <div className='search'>
        <input placeholder='Seach for Movies' value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} />
        <img src={searchIcon} alt='search' onClick={()=>searchMovies(searchTerm)}></img>
      </div>
      {
        movies?.length > 0 
        ? (
            <div className='container'>
              {movies.map((movie) =>(
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
                <div className='empty'>
                  <h2>No movies found</h2>
                </div>
              )
      }
    </div>
  );
}

export default App;
