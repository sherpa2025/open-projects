import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Header, Footer } from 'src/components';
import { Home, UpMovieDetails, UpcomingMovie, Watchlist } from 'src/pages';
import PopMovieList from 'src/pages/movies/pop-movie-list';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/upcoming-movies',
        element: <UpcomingMovie />
        // BUG
        // children: [
        //   {
        //     path: 'details/:id',
        //     element: <UpMovieDetails />
        //   }
        // ]
      },
      {
        path: '/movies',
        element: <PopMovieList />
      },
      {
        path: '/watchlist',
        element: <Watchlist />
      },
      {
        path: 'details/:id',
        element: <UpMovieDetails />
      }
    ]
  }
]);
