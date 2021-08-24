import React, { useState } from 'react';
import OrderDetailsForm from './OrderDetailsForm';

const OrderDetails = () => {
  const [invoiceSelected, setInvoiceSelected] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});

  return (
    <div className='order-details-page'>
      <h2 className='order-details-page__title'>
        Wprowadź szczegóły dotyczące zamówienia
      </h2>
      <div className='order-details-page__form'>
        <OrderDetailsForm />
      </div>
    </div>
  );
};

export default OrderDetails;
