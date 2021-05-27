import React from 'react';

const TextInput = (props) => {
  return (
    <div className='text-input'>
      <input
        name={props.name}
        defaultValue={props.defaultValue}
        type={props.type}
        {...props.input}
        placeholder={props.placeholder}
        className={`text-input__input ${props.className}`}
        required={props.required}
        disabled={props.disabled}
      />
      {props.meta.touched && props.meta.error && (
        <div className='text-input__label text-input__label--danger'>
          {props.meta.error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
