import React from 'react';
import { Link } from 'react-router-dom';

const ServerErrors = () => {
  return (
    <div className='server-error-page'>
      <h1 className='server-error-page__title'>500 :(</h1>
      <p className='server-error-page__desc'>
        W trakcie wykonywania operacji wystąpił błąd po stronie serwera. Spróbuj
        ponownie przeprowadzić wykonywane operacje klikając w
        <Link to='/'>ten link</Link>.
      </p>
    </div>
  );
};

export default ServerErrors;
