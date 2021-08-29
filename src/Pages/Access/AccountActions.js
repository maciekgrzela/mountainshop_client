import React from 'react';
import { FiEdit3, FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { userSignOut } from '../../Actions/ActionCreators/User';

const AccountActions = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(userSignOut());
  };

  return (
    <div className='account-page__actions'>
      <div onClick={handleSignOut} className='account-page__action'>
        <FiLogOut />
        <span>Wyloguj</span>
      </div>
      <div className='account-page__action'>
        <FiEdit3 />
        <span>Aktualizuj swoje dane</span>
      </div>
    </div>
  );
};

export default AccountActions;
