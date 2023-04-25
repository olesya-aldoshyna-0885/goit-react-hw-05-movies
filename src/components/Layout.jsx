import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer, Header, MainLink } from '../styles/Layout.styled';

const Layout = () => {
  return (
    <MainContainer>
      <Header>
        <nav>
          <MainLink to="/" end>
            Home
          </MainLink>
          <MainLink to="/movies">Movies</MainLink>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;