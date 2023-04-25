import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { getMovieByName } from '../movieAPI';
import { Container, CardsWrapper, Images, MovieName } from "../styles/MoviesList.styled"
import SearchBar from "../components/SearchBar";
import notFound from "../images/notFound.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [ movies, setMovies ] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';

    useEffect(() => {
        getMovieByName(movieName).then(({ results }) => {
            setMovies([...results]);
        })
            .catch(() =>
                toast.error(`Oops, something went wrong! Please try again later!`)
        )
    }, [movieName]);

  const updateQueryString = evt => {
    const movieNameValue = evt.target.value;
    if (movieNameValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieName: movieNameValue });
  };

  return (
    <main>
      <SearchBar type="text" value={movieName} onSubmit={updateQueryString} />
      <Container>
        {movies.map(({id, original_title, poster_path}) => {
          return (
            <CardsWrapper  key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <Images
                    src={
                        poster_path
                        ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                        : `${notFound}`
                    }
                    alt={original_title}
                />
                <MovieName>{original_title}</MovieName>
              </Link>
            </CardsWrapper>
          );
        })}
            <Suspense>
              <Outlet />
            </Suspense>
            <ToastContainer />
          </Container>
    </main>
  );
};

export default Movies;