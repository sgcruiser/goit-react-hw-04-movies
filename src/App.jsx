import { Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader';
// import './App.css';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home_page" */),
);
const MoviePage = lazy(() =>
  import('./views/MoviePage' /* webpackChunkName: "movie_page" */),
);
const MovieDetalisPage = lazy(() =>
  import(
    './views/MovieDetalisPage' /* webpackChunkName: "movie_details_page" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not_found_views_page" */),
);

function App() {
  return (
    <Fragment>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviePage} />
            <Route path={routes.moviesDetails} component={MovieDetalisPage} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </Container>
    </Fragment>
  );
}

export default App;
