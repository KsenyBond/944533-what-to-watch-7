import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {AppRoute} from '../../const';

function App(props) {
  const {filmsList, headerFilmTitle, headerFilmGenre, headerFilmYear} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage filmsList={filmsList}
            headerFilmTitle={headerFilmTitle}
            headerFilmGenre={headerFilmGenre}
            headerFilmYear={headerFilmYear}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignInScreen />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyListScreen />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmScreen />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewScreen />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  filmsList: PropTypes.array.isRequired,
  headerFilmTitle: PropTypes.string.isRequired,
  headerFilmGenre: PropTypes.string.isRequired,
  headerFilmYear: PropTypes.string.isRequired,
};

export default App;
