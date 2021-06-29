import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

function App(props) {
  const {filmsList, headerFilmTitle, headerFilmGenre, headerFilmYear} = props;

  return (
    <MainPage filmsList={filmsList}
      headerFilmTitle={headerFilmTitle}
      headerFilmGenre={headerFilmGenre}
      headerFilmYear={headerFilmYear}
    />);
}

App.propTypes = {
  filmsList: PropTypes.string.isRequired,
  headerFilmTitle: PropTypes.string.isRequired,
  headerFilmGenre: PropTypes.string.isRequired,
  headerFilmYear: PropTypes.string.isRequired,
};

export default App;
