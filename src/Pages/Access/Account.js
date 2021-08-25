import React from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className='account-page'>
      <h2 className='account-page__title'>
        Lista zamówień użytkownika:{' '}
        {`${user.user.firstName} ${user.user.lastName}`}
      </h2>
    </div>
  );
};

export default Account;
