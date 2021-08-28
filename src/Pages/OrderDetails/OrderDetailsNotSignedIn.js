import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetailsNotSignedIn = () => {
  return (
    <div>
      Nie jesteś zalogowany. Aby kontynuować zakupy prosimy przejść do{' '}
      <Link to='/sign/in'>panelu logowania</Link>
    </div>
  );
};

export default OrderDetailsNotSignedIn;
