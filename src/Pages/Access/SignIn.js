import React, { useEffect } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  userFacebookSignIn,
  userGoogleSignIn,
  userSignIn,
  userSignUp,
} from '../../Actions/ActionCreators/User';
import TextInput from '../../Components/Common/TextInput';
import { redirectToOrderAfterLogin } from '../../Actions/ActionCreators/Interface';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { v4 } from 'uuid';

const required = (value) => (value ? undefined : 'Pole wymagane');

const SignIn = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleUserSignIn = (data) => {
    dispatch(userSignIn(data.email, data.password));
    if (location.state?.redirectToOrder) {
      dispatch(redirectToOrderAfterLogin());
    }
  };

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

  const handleFacebookLogin = (data) => {
    const body = {
      accessToken: data.accessToken,
    };
    dispatch(userFacebookSignIn(body));
  };

  const handleGoogleLogin = (data) => {
    const body = {
      accessToken: data.tokenObj.id_token,
    };
    dispatch(userGoogleSignIn(body));
  };

  return (
    <div className='sign-in-page'>
      <div className='sign-in-page__form-container'>
        <div style={{ display: 'flex' }}>
          <div>
            <h2>Zaloguj się...</h2>
            <FinalForm
              onSubmit={handleUserSignIn}
              render={({
                handleSubmit,
                form,
                invalid,
                submitting,
                pristine,
                values,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className='sign-in-page__form sign-in-form'
                >
                  <Field
                    label='Adres e-mail:'
                    name='email'
                    type='email'
                    component={TextInput}
                    validate={required}
                    placeholder='Wprowadź adres e-mail'
                  />
                  <Field
                    label='Hasło:'
                    name='password'
                    type='password'
                    component={TextInput}
                    validate={required}
                    placeholder='Wprowadź hasło'
                  />
                  <button
                    className={`sign-in-form__send ${
                      invalid && 'sign-in-form__send--disabled'
                    }`}
                    disabled={invalid}
                    type='submit'
                  >
                    Zaloguj
                  </button>
                  <FacebookLogin
                    appId='215790267182657'
                    callback={handleFacebookLogin}
                    fields='name,email,birthday,picture'
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        className='sign-in-form__facebook'
                      >
                        <FaFacebook className='mr-1' />
                        Zaloguj się za pomocą Facebooka
                      </button>
                    )}
                  />
                  <GoogleLogin
                    clientId='304338593098-q2ifgr7mevta0msc9iurc4r67c46711j.apps.googleusercontent.com'
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        className='sign-in-form__google'
                      >
                        <AiFillGoogleCircle className='mr-1' />
                        Zaloguj się za pomocą Google
                      </button>
                    )}
                    onSuccess={handleGoogleLogin}
                  />
                </form>
              )}
            />
          </div>
          <div>
            <h2>lub zarejestruj!</h2>
            <FinalForm
              onSubmit={handleUserSignUp}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
