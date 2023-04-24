import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [ movies, setMovies ] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, []);

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleDogs = movies.filter(movie => movie.includes(movieId));

  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <ul>
        {visibleDogs.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;