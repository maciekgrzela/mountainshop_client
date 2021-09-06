import React, { useState } from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  const [formSendInfo, setFormSendInfo] = useState(null);

  return (
    <div className='contact'>
      <h4 className='contact__title'>Kontakt z nami</h4>
      <hr className='contact__line' />
      <div className='contact__container'>
        {formSendInfo !== null && (
          <div
            className={`contact__info ${
              formSendInfo.status === 'error'
                ? 'contact__info-error'
                : 'contact__info--success'
            }`}
          >
            {formSendInfo.message}
          </div>
        )}
        <ContactForm setFormSendInfo={setFormSendInfo} />
      </div>
    </div>
  );
};

export default Contact;
