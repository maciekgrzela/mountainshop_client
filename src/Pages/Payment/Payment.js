import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.search);
  }, []);

  return <div className='payment-page'></div>;
};

export default Payment;
