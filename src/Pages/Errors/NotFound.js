import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <h1 className='not-found-page__title'>404 :(</h1>
      <p className='not-found-page__desc'>
        Strona której poszukujesz nie została znaleziona. Kliknij w{' '}
        <Link to='/'>ten link</Link> aby powrócić do strony głównej.
      </p>
    </div>
  );
};

export default NotFound;
