import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const CheckoutRedirect = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  const formRef = useRef();

  useEffect(() => {
    if (location.state !== undefined && user.isLogged) {
      if (location.state.from.pathname === '/order/details') {
        formRef.current.submit();
      }
    }
  }, []);

  return (
    <div>
      <form
        ref={formRef}
        action={`https://localhost:5001/api/checkout/create/session/${user.user.id}`}
        method='post'
      ></form>
    </div>
  );
};

export default CheckoutRedirect;
