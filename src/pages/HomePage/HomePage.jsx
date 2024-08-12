import { useEffect, useState } from "react";
import { fetchTrendingMovies } from '../../tmdb-api';
import MovieList from "../../components/MovieList/Movielist";
import css from './HomePage.module.css';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetchTrendingMovies().then((data) => setMovies(data.results));
    }, []);
  
    return (
      <div>
        <h1 className={css.title}>Trending Today</h1>
        <MovieList movies={movies} />
      </div>
    );
  }