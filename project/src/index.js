import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const filmsList = [
  'Fantastic Beasts: The Crimes of Grindelwald',
  'Bohemian Rhapsody',
  'Macbeth',
  'Aviator',
  'We need to talk about Kevin',
  'What We Do in the Shadows',
  'Revenant',
  'Johnny English',
  'Shutter Island',
  'Pulp Fiction',
  'No Country for Old Men',
  'Snatch',
  'Moonrise Kingdom',
  'Seven Years in Tibet',
  'Midnight Special',
  'War of the Worlds',
  'Dardjeeling Limited',
  'Orlando',
  'Mindhunter',
  'Midnight Special',
];

const headerFilmTitle = 'The Grand Budapest Hotel';
const headerFilmGenre = 'Drama';
const headerFilmYear = '2014';

ReactDOM.render(
  <React.StrictMode>
    <App filmsList={filmsList}
      headerFilmTitle={headerFilmTitle}
      headerFilmGenre={headerFilmGenre}
      headerFilmYear={headerFilmYear}
    />
  </React.StrictMode>,
  document.getElementById('root'));
