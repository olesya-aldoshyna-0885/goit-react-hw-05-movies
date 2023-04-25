import { getMovieById } from "../movieAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "../styles/Cast.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const anApologyMessage = 'Sorry, but there are currently no reviews!';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMovieById(`${movieId}/reviews`)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(() =>
        toast.error(`Oops, something went wrong! Please try again later!`)
      );
  }, [movieId]);
  return (
    <ul>
      {reviews?.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <Message>{anApologyMessage}</Message>
      )}
      <ToastContainer />
    </ul>
  );
};

export default Reviews;