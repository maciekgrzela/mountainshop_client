import React from 'react';
import { useSelector } from 'react-redux';
import AccountActions from './AccountActions';
import AccountOrders from './AccountOrders';

const Account = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className='account-page'>
      <h2 className='account-page__title'>
        <span className='text-weight-400'>Lista zamówień użytkownika: </span>{' '}
        {`${user.user.firstName} ${user.user.lastName}`}
      </h2>
      <AccountOrders />
      <h2 className='account-page__title'>
        <span className='text-weight-400'>Akcje użytkownika: </span>
      </h2>
      <AccountActions />
    </div>
  );
};

export default Account;
