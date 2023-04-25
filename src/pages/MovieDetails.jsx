import { Suspense, useEffect, useState } from "react";
import { generatePath, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "moviesAPI";
import notFound from "../images/notFound.jpg";
import {
  CardWrapper,
  GoBackLink,
  Image,
  InfoWrapper,
  ItemLink,
  ListLink,
  Link,
} from '../styles/MovieDetails.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
      <ul>
        <li>
          <Link to="subbreeds">Подподроды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
