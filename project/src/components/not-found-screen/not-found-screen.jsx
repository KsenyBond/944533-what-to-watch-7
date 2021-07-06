import React from 'react';
import AppRoute from '../../const';

import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

function NotFoundScreen() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>

      <section className="not-found__screen">
        <h1>404. Page not found</h1>
        <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
      </section>

      <footer className="page-footer">
        <Logo isFooterLogo />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundScreen;
