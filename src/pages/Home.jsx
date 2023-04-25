import { useState, useEffect } from "react";
import { getTrendMovies } from "../movieAPI";
import MoviesList from "../components/MoviesList";


const Home = () => {
    const [movies, setMovies] = useState([]);
  useEffect(() => {
      getTrendMovies().then(({results }) => {
          setMovies([...results]);
  })
  }, [])

    return (
        <main>
            <h1>Trending today</h1>
            <MoviesList movies={movies} />
      </main>
  )
};

export default Home;