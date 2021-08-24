import React from 'react';
import { Field } from 'react-final-form';
import TextInput from '../../Components/Common/TextInput';

const OrderDetailsInvoiceForm = () => {
  return (
    <div className='invoice-form'>
      <h3 className='delivery-form__title'>
        Dane firmy <input type='checkbox' name='invoice' />
      </h3>
      <Field
        label='Wprowadź nazwę'
        name='companyName'
        component={TextInput}
        type='text'
        placeholder='Wprowadź nazwę firmy'
      />
      <Field
        label='Wprowadź NIP'
        name='companyNip'
        component={TextInput}
        type='text'
        placeholder='Wprowadź NIP firmy'
      />
      <div className='delivery-form__address'>
        <Field
          label='Wprowadź dane adresowe'
          name='companyAddressLineOne'
          component={TextInput}
          type='text'
          placeholder='Wprowadź dane adresowe'
        />
        <Field
          name='companyPostalCode'
          component={TextInput}
          type='text'
          placeholder='Wprowadź kod pocztowy'
        />
        <Field
          name='companyPlace'
          component={TextInput}
          type='text'
          placeholder='Wprowadź nazwę miejscowości'
        />
      </div>
      <Field
        label='Wprowadź kraj'
        name='companyCountry'
        component={TextInput}
        type='text'
        placeholder='Wprowadź kraj'
      />
      <Field
        label='Wprowadź numer telefonu'
        name='companyPhoneNumber'
        component={TextInput}
        type='text'
        placeholder='Wprowadź numer telefonu'
      />
    </div>
  );
};

export default OrderDetailsInvoiceForm;
