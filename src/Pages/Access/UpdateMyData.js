import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../Components/Common/TextInput';
import { userUpdateData } from '../../Actions/ActionCreators/User';
import withLoading from '../../Components/withLoading';

const required = (value) => (value ? undefined : 'Pole wymagane');

const UpdateMyData = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleUpdateUsersData = (data) => {
    dispatch(userUpdateData(data));
  };

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
  };

  return (
    <div className='update-data-page'>
      <h2 className='update-data-page__title text-weight-400'>
        Aktualizuj swoje dane osobowe
      </h2>
      <FinalForm
        initialValues={initialValues}
        onSubmit={handleUpdateUsersData}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form
            onSubmit={handleSubmit}
            className='sign-in-page__form sign-in-form'
          >
            <Field
              label='Imię:'
              name='firstName'
              type='text'
              component={TextInput}
              validate={required}
              placeholder='Wprowadź imię'
            />
            <Field
              label='Nazwisko:'
              name='lastName'
              type='text'
              component={TextInput}
              validate={required}
              placeholder='Wprowadź nazwisko'
            />
            <Field
              label='Adres e-mail:'
              name='email'
              type='email'
              component={TextInput}
              validate={required}
              placeholder='Wprowadź adres e-mail'
            />
            <Field
              label='Numer telefonu:'
              name='phoneNumber'
              type='text'
              component={TextInput}
              validate={required}
              mask={'+48999-999-999'}
              placeholder='Wprowadź numer telefonu'
            />
            <button className='sign-in-form__send' type='submit'>
              Aktualizuj dane
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default withLoading(UpdateMyData, 'Aktualizowanie danych użytkownika');
