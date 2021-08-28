import React from 'react';

const TextInputPlaceholder = (props) => {
  return (
    <div className='text-input'>
      <input
        type={'text'}
        placeholder={''}
        className={`text-input__input text-input__input--disabled`}
        required={false}
        disabled={true}
      />
    </div>
  );
};

export default TextInputPlaceholder;
