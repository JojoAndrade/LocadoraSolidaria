import { useEffect, useState} from "react";
import MovieCard from "../Components/MovieCard";
import "./MoviesGride.css"; 

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
        };

        useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        console.log(topRatedUrl);
        getTopRatedMovies(topRatedUrl);         
    }, []);  

    console.log(topMovies);

  return ( 
  <div className="container">
    <h2 className="title">Melhores filmes:</h2>
    <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...só um momento</p>}
        {topMovies.length > 0 && 
        topMovies.map((movie) => <movieCard key={movie.id} movie={movie} />)}
    </div>
  </div>
  );
  };

export default Home
