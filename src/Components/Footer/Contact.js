import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import {
  combineValidators,
  composeValidators,
  isRequired,
  matchesPattern,
} from 'revalidate';
import TextInput from '../Common/TextInput';
import TextArea from '../Common/TextArea';

const contactFormValidator = combineValidators({
  firstName: isRequired({
    message: 'Pole imię jest wymagane',
  }),
  lastName: isRequired({
    message: 'Pole nazwisko jest wymagane',
  }),
  email: composeValidators(
    isRequired({ message: 'Pole e-mail jest wymagane' }),
    matchesPattern(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )({ message: 'Pole e-mail ma nieprawidłową strukturę' })
  )('Pole e-mail ma nieprawidłową strukturę'),
  body: isRequired({
    message: 'Pole treść nie może być puste',
  }),
});

const Contact = () => {
  const handleSubmitContactForm = async (values) => {
    console.log(values);
  };

  return (
    <div className='contact'>
      <h4 className='contact__title'>Kontakt z nami</h4>
      <hr className='contact__line' />
      <div className='contact__container'>
        <FinalForm
          validate={contactFormValidator}
          onSubmit={handleSubmitContactForm}
          render={({ handleSubmit, invalid, pristine, submitting }) => (
            <form className='contact__form' onSubmit={handleSubmit}>
              <Field
                name='firstName'
                className='contact__text-input'
                placeholder='Wprowadź swoje imię'
                type='text'
                required
                component={TextInput}
              />
              <Field
                name='lastName'
                placeholder='Wprowadź swoje nazwisko'
                className='contact__text-input'
                type='text'
                component={TextInput}
                required
              />
              <Field
                name='email'
                placeholder='Wprowadź adres email'
                className='contact__text-input'
                type='text'
                component={TextInput}
                required
              />
              <Field
                name='body'
                placeholder='Wprowadź swoje imię'
                className='contact__text-area'
                type='text'
                component={TextArea}
                required
              />
              <button type='submit' className='contact__send-form'>
                Wyślij
              </button>
              <button type='reset' className='contact__clear-form'>
                Wyczyść
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Contact;
