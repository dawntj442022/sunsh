import { useState } from "react";
import "./App.css";
import { MovieDisplay } from "./components/MoviesDisplay";

const API_Key = "3c76e4d5";

function App() {
  const [movie, setMovie] = useState(null);

const getMovie = async (searchTerm) => {
  try{
  const response = await fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`);

const data = await response.json();
setMovie(data);
  }catch(error)
  
console.log(data);
setMovie(data);
};



  return (
    <div className="App">
      <h1>React Movies</h1>
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie}
    </div>
  );
}
  
export default App;
