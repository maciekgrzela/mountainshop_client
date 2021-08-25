import React from 'react';
import { Field } from 'react-final-form';
import TextInput from '../../Components/Common/TextInput';
import OrderDetailsInvoiceFormPlaceholder from './OrderDetailsInvoiceFormPlaceholder';

const OrderDetailsInvoiceForm = ({ invoiceSelected, setInvoiceSelected }) => {
  const required = (value) => (value ? undefined : 'Pole wymagane');

  return (
    <div
      className={`invoice-form ${!invoiceSelected && 'invoice-form--disabled'}`}
    >
      <h3 className='invoice-form__title'>
        Dane do faktury
        <input
          type='checkbox'
          name='invoice'
          className='ml-1'
          checked={invoiceSelected}
          onChange={() => setInvoiceSelected((prev) => !prev)}
        />
      </h3>
      {!invoiceSelected ? (
        <OrderDetailsInvoiceFormPlaceholder />
      ) : (
        <>
          <Field
            label='Wprowadź nazwę'
            name='companyName'
            component={TextInput}
            type='text'
            validate={invoiceSelected ? required : () => undefined}
            disabled={!invoiceSelected}
            placeholder='Wprowadź nazwę firmy'
          />
          <Field
            label='Wprowadź NIP'
            name='companyNip'
            component={TextInput}
            type='text'
            validate={invoiceSelected ? required : () => undefined}
            disabled={!invoiceSelected}
            mask={'999-999-99-99'}
            placeholder='Wprowadź NIP firmy'
          />
          <div className='delivery-form__address'>
            <Field
              label='Wprowadź dane adresowe'
              name='companyAddressLineOne'
              component={TextInput}
              type='text'
              disabled={!invoiceSelected}
              validate={invoiceSelected ? required : () => undefined}
              placeholder='Wprowadź dane adresowe'
            />
            <Field
              name='companyPostalCode'
              component={TextInput}
              type='text'
              disabled={!invoiceSelected}
              validate={invoiceSelected ? required : () => undefined}
              mask={'99-999'}
              placeholder='Wprowadź kod pocztowy'
            />
            <Field
              name='companyPlace'
              component={TextInput}
              type='text'
              disabled={!invoiceSelected}
              validate={invoiceSelected ? required : () => undefined}
              placeholder='Wprowadź nazwę miejscowości'
            />
          </div>
          <Field
            label='Wprowadź kraj'
            name='companyCountry'
            component={TextInput}
            type='text'
            disabled={!invoiceSelected}
            validate={invoiceSelected ? required : () => undefined}
            placeholder='Wprowadź kraj'
          />
          <Field
            label='Wprowadź numer telefonu'
            name='companyPhoneNumber'
            component={TextInput}
            type='text'
            disabled={!invoiceSelected}
            validate={invoiceSelected ? required : () => undefined}
            mask={'+48 999-999-999'}
            placeholder='Wprowadź numer telefonu'
          />
        </>
      )}
    </div>
  );
};

export default OrderDetailsInvoiceForm;
