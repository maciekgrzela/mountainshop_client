import React from 'react';
import { v4 } from 'uuid';
import { userSignUp } from '../../Actions/ActionCreators/User';
import { Form as FinalForm, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import TextInput from '../../Components/Common/TextInput';

const required = (value) => (value ? undefined : 'Pole wymagane');

const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleUserSignUp = (data) => {
    const body = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: `${data.firstName
        .substr(0, 1)
        .toLowerCase()}${data.lastName.toLowerCase()}${v4()}`,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
    };

    dispatch(userSignUp(body));
  };

  return (
    <FinalForm
      onSubmit={handleUserSignUp}
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
          <Field
            label='Hasło:'
            name='password'
            type='password'
            component={TextInput}
            validate={required}
            placeholder='Wprowadź hasło'
          />
          <button className='sign-in-form__send' type='submit'>
            Utwórz konto
          </button>
        </form>
      )}
    />
  );
};

export default SignUpForm;
