import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

const AccountInfo = () => {
  return (
    <div className='topbar__account-info account-info'>
      <Link to='/account' className='account-info__link'>
        Moje konto
      </Link>
      <FiUser className='account-info__icon' />
    </div>
  );
};

export default AccountInfo;
