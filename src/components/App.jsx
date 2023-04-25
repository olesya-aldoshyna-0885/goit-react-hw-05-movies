import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Gallery = lazy(() =>
//   import('./Gallery').then(module => ({
//     ...module,
//     default: module.Gallery,
//   }))
// );
// const SubBreeds = lazy(() =>
//   import('./SubBreeds').then(module => ({
//     ...module,
//     default: module.SubBreeds,
//   }))
// );

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Movies />} />
        <Route path="dogs/:dogId" element={<MovieDetails />}>
          {/* <Route path="subbreeds" element={<SubBreeds />} />
          <Route path="gallery" element={<Gallery />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};