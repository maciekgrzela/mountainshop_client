import React from 'react';
import { Link } from 'react-router-dom';

const TopbarOption = ({ label, path, Icon, variant }) => {
  return (
    <div className={`topbar__option-info option-info`}>
      <Link to={path} className='option-info__link'>
        {label}
      </Link>
      <div
        className={`option-info__icon option-info__icon--${
          variant === undefined ? 'primary' : 'secondary'
        }`}
      >
        {Icon}
      </div>
    </div>
  );
};

export default TopbarOption;
