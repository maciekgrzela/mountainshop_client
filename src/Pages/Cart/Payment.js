import React, { useState, useEffect } from 'react';

const Payment = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }
    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  return message ? <Message message={message} /> : <PaymentForm />;
};

const Message = ({ message }) => {
  return (
    <section>
      <p>{message}</p>
    </section>
  );
};

const PaymentForm = () => {
  return (
    <section>
      <div className='product'>
        <img
          src='https://i.imgur.com/EHyR2nP.png'
          alt='The cover of Stubborn Attachments'
        />
        <div className='description'>
          <h3>Jakiś tam produkt</h3>
          <h5>123.90 PLN</h5>
        </div>
      </div>
      <form
        action='https://localhost:5001/api/checkout/create/session'
        method='POST'
      >
        <button type='submit'>Checkout</button>
      </form>
    </section>
  );
};

export default Payment;
