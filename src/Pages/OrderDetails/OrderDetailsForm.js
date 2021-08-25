import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import OrderDetailsDeliveryForm from './OrderDetailsDeliveryForm';
import OrderDetailsInvoiceForm from './OrderDetailsInvoiceForm';
import { FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const OrderDetailsForm = ({ invoiceSelected, setInvoiceSelected }) => {
  const user = useSelector((state) => state.user);

  const handleOrderDetails = (data) => {
    console.log(data);
  };

  let initialFormData = {
    firstname: user.user.firstName,
    lastname: user.user.lastName,
    country: 'Polska',
    companyCountry: 'Polska',
  };

  return (
    <div className='order-details-form'>
      <FinalForm
        initialValues={{
          ...initialFormData,
        }}
        onSubmit={handleOrderDetails}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className='order-details-form__form'>
            <div className='order-details-form__delivery'>
              <OrderDetailsDeliveryForm />
            </div>
            <div className='order-details-form__invoice'>
              <OrderDetailsInvoiceForm
                invoiceSelected={invoiceSelected}
                setInvoiceSelected={setInvoiceSelected}
              />
            </div>
            <div className='order-details-form__save-order-details'>
              <button className='order-details-form__save'>
                Zapisz wprowadzone dane
                <FiArrowRight />
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default OrderDetailsForm;
