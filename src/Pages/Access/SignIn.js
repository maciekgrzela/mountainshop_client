import React from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const SignIn = () => {
  return (
    <div className='sign-in-page'>
      <div className='sign-in-page__form-container'>
        <div style={{ display: 'flex' }}>
          <div>
            <h2>Zaloguj się...</h2>
            <SignInForm />
          </div>
          <div>
            <h2>lub zarejestruj!</h2>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
