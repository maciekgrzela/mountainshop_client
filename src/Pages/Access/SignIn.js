import React, { useEffect } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { userSignInSlice } from '../../Actions/ActionCreators/User';
import TextInput from '../../Components/Common/TextInput';
import { history } from '../../App';
import { redirectToOrderAfterLogin } from '../../Actions/ActionCreators/Interface';

const SignIn = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const userSignIn = (data) => {
    dispatch(userSignInSlice(data.email, data.password));
    if (location.state?.redirectToOrder) {
      dispatch(redirectToOrderAfterLogin());
    }
  };

  return (
    <div className='sign-in-page'>
      <h2 className='sign-in-page__title'>Zaloguj się do konta użytkownika</h2>
      <div className='sign-in-page__form-container'>
        <FinalForm
          onSubmit={userSignIn}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form
              onSubmit={handleSubmit}
              className='sign-in-page__form sign-in-form'
            >
              <Field
                label='Adres e-mail:'
                name='email'
                type='email'
                component={TextInput}
                placeholder='Wprowadź adres e-mail'
              />
              <Field
                label='Hasło:'
                name='password'
                type='password'
                component={TextInput}
                placeholder='Wprowadź hasło'
              />
              <button className='sign-in-form__send' type='submit'>
                Zaloguj
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default SignIn;
