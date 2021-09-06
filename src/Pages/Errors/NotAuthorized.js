import React from 'react';

const NotAuthorized = () => {
  return (
    <div className='error-page'>
      <h1 className='error-page__title'>401 :(</h1>
      <p className='error-page__desc'>
        Próbowałeś uzyskać dostęp do zasobu nie posiadając odpowiednich
        uprawnień. Kliknij w <Link to='/'>ten link</Link> aby powrócić do strony
        głównej.
      </p>
    </div>
  );
};

export default NotAuthorized;
