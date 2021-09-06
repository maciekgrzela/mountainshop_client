import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='error-page'>
      <h1 className='error-page__title'>404 :(</h1>
      <p className='error-page__desc'>
        Strona której poszukujesz nie została znaleziona. Kliknij w{' '}
        <Link to='/'>ten link</Link> aby powrócić do strony głównej.
      </p>
    </div>
  );
};

export default NotFound;
