import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import OrderDetailsDeliveryForm from './OrderDetailsDeliveryForm';
import OrderDetailsInvoiceForm from './OrderDetailsInvoiceForm';

const OrderDetailsForm = () => {
  const handleOrderDetails = (data) => {
    console.log(data);
  };

  return (
    <div className='order-details-form'>
      <FinalForm
        onSubmit={handleOrderDetails}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className='order-details-form__form'>
            <div className='order-details-form__delivery'>
              <OrderDetailsDeliveryForm />
            </div>
            <div className='order-details-form__invoice'>
              <OrderDetailsInvoiceForm />
            </div>
            <div className='order-details-form__save-order-details'>
              <button className='order-details-form__save'>
                Zapisz wprowadzone dane
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default OrderDetailsForm;
