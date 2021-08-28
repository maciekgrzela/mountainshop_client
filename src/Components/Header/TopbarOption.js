import React from 'react';
import { Link } from 'react-router-dom';

const TopbarOption = ({
  label,
  path,
  Icon,
  variant,
  notification,
  onClick = null,
}) => {
  return (
    <div className={`topbar__option-info option-info`}>
      <Link
        onClick={onClick !== null && onClick}
        to={path}
        className='option-info__link'
      >
        {label}
      </Link>
      <div
        className={`option-info__icon option-info__icon--${
          variant === undefined ? 'primary' : 'secondary'
        }`}
      >
        {Icon}
        {notification !== undefined && (
          <div className='option-info__notification'>{notification}</div>
        )}
      </div>
    </div>
  );
};

export default TopbarOption;
