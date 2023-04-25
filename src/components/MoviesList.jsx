import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, CardsWrapper, MovieName, Images } from "../styles/MoviesList.styled";
import { notFound } from "../images/notFound.jpg";

const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
    <Container>
        { movies.map(({ id, original_title, poster_path }) => (
        <CardsWrapper key={id}>
          <Link state={{ from: location }} to={`movies/${id}`}>
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
        ))}
            </Container>
    )
}

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};