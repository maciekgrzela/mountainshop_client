import React from 'react';
import TextInputPlaceholder from '../../Components/Common/TextInputPlaceholder';

const OrderDetailsInvoiceFormPlaceholder = () => {
  return (
    <>
      <TextInputPlaceholder />
      <TextInputPlaceholder />
      <div className='invoice-form__address'>
        <TextInputPlaceholder />
        <TextInputPlaceholder />
        <TextInputPlaceholder />
      </div>
      <TextInputPlaceholder />
      <TextInputPlaceholder />
    </>
  );
};

export default OrderDetailsInvoiceFormPlaceholder;
