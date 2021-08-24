import React from 'react';
import { Field } from 'react-final-form';
import TextInput from '../../Components/Common/TextInput';

const OrderDetailsDeliveryForm = () => {
  return (
    <div className='delivery-form'>
      <h3 className='delivery-form__title'>Dane dostawy towaru</h3>
      <Field
        label='Wprowadź imię'
        name='firstname'
        type='text'
        placeholder='Wprowadź swoje imię'
        component={TextInput}
      />
      <Field
        label='Wprowadź nazwisko'
        name='lastname'
        component={TextInput}
        type='text'
        placeholder='Wprowadź swoje nazwisko'
      />
      <div className='delivery-form__address'>
        <Field
          label='Wprowadź dane adresowe'
          name='addressLineOne'
          component={TextInput}
          type='text'
          placeholder='Wprowadź dane adresowe'
        />
        <Field
          name='postalCode'
          component={TextInput}
          type='text'
          placeholder='Kod pocztowy'
        />
        <Field
          name='place'
          component={TextInput}
          type='text'
          placeholder='Miejscowość'
        />
      </div>
      <Field
        label='Wprowadź kraj'
        name='country'
        component={TextInput}
        type='text'
        placeholder='Wprowadź kraj'
      />
      <Field
        label='Wprowadź numer telefonu'
        name='phoneNumber'
        component={TextInput}
        type='text'
        placeholder='Wprowadź numer telefonu'
      />
    </div>
  );
};

export default OrderDetailsDeliveryForm;
