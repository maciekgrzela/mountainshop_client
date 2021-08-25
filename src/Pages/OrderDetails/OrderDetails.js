import React, { useState } from 'react';
import OrderDetailsForm from './OrderDetailsForm';

const OrderDetails = () => {
  const [invoiceSelected, setInvoiceSelected] = useState(false);

  return (
    <div className='order-details-page'>
      <h2 className='order-details-page__title'>
        Wprowadź szczegóły dotyczące zamówienia
      </h2>
      <div className='order-details-page__form'>
        <OrderDetailsForm
          invoiceSelected={invoiceSelected}
          setInvoiceSelected={setInvoiceSelected}
        />
      </div>
    </div>
  );
};

export default OrderDetails;
