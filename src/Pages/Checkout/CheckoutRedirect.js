import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { history } from '../../App';
import { RiSecurePaymentLine } from 'react-icons/ri';

const CheckoutRedirect = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  const formRef = useRef();

  useEffect(() => {
    const redirectToCheckout = async () => {
      if (
        location.state !== undefined &&
        user.isLogged &&
        location.state.from.pathname === '/order/details'
      ) {
        formRef.current.submit();
      } else {
        history.push('/');
      }
    };

    redirectToCheckout();
  }, []);

  return (
    <div className='checkout-page'>
      <form
        ref={formRef}
        action={`https://localhost:5001/api/checkout/create/session/${user.user.id}`}
        method='post'
      ></form>
      <RiSecurePaymentLine className='checkout-page__icon' />
      <h2 className='checkout-page__text'>
        Jesteś przekierowywany na stronę płatności...
      </h2>
    </div>
  );
};

export default CheckoutRedirect;
