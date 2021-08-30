import React, { useEffect } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  userFacebookSignIn,
  userGoogleSignIn,
  userSignInSlice,
} from '../../Actions/ActionCreators/User';
import TextInput from '../../Components/Common/TextInput';
import { history } from '../../App';
import { redirectToOrderAfterLogin } from '../../Actions/ActionCreators/Interface';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';

const SignIn = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const userSignIn = (data) => {
    dispatch(userSignInSlice(data.email, data.password));
    if (location.state?.redirectToOrder) {
      dispatch(redirectToOrderAfterLogin());
    }
  };

  const handleFacebookLogin = (data) => {
    const body = {
      accessToken: data.accessToken,
    };
    dispatch(userFacebookSignIn(body));
  };

  const handleGoogleLogin = (data) => {
    console.log(data);
    const body = {
      accessToken: data.tokenObj.id_token,
    };
    dispatch(userGoogleSignIn(body));
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
        <FacebookLogin
          appId='215790267182657'
          callback={handleFacebookLogin}
          fields='name,email,birthday,picture'
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              className='user-not-signed-in-page__login-fb-btn'
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
              className='user-not-signed-in-page__login-g-btn'
            >
              <AiFillGoogleCircle className='mr-1' />
              Zaloguj się za pomocą Google
            </button>
          )}
          onSuccess={handleGoogleLogin}
        />
      </div>
    </div>
  );
};

export default SignIn;
