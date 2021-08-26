import React, { useEffect, useState } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FiUserX } from 'react-icons/fi';
import { useLocation, Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';

const UserNotSignedIn = () => {
  const location = useLocation();
  const [fromOrderDetails, setFromOrderDetails] = useState(false);

  useEffect(() => {
    if (location.state.redirectToOrder) {
      setFromOrderDetails(true);
    }
  }, []);

  return (
    <div className='user-not-signed-in-page'>
      <FiUserX className='user-not-signed-in-page__icon' />
      <h2 className='text-weight-500 user-not-signed-in-page__title'>
        Nie jesteś zalogowany :(
      </h2>
      {fromOrderDetails && (
        <h4 className='text-weight-400 user-not-signed-in-page__desc'>
          Aby kontynuować proces składania zamówienia musisz zalogować się do
          konta użytkownika. Możesz to zrobić korzystając{' '}
          <Link
            to={{
              pathname: '/sign/in',
              state: {
                redirectToOrder: true,
              },
            }}
            className='text-weight-bold'
          >
            z tego linku
          </Link>
          , lub wybrać jedną z poniższych opcji logowania z wykorzystaniem
          zewnętrznych dostawców
        </h4>
      )}
      <button className='user-not-signed-in-page__login-fb-btn'>
        <FaFacebook className='mr-1' />
        Zaloguj się za pomocą Facebooka
      </button>
      <button className='user-not-signed-in-page__login-g-btn'>
        <AiFillGoogleCircle className='mr-1' />
        Zaloguj się przez Google
      </button>
    </div>
  );
};

export default UserNotSignedIn;
