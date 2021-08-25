import React from 'react';
import InputMask from 'react-input-mask';

const TextInput = (props) => {
  return (
    <div className='text-input'>
      {props.label && (
        <label className='text-input__top-label' for={props.name}>
          {props.label}
        </label>
      )}
      {props.mask ? (
        <InputMask
          id={props.name}
          name={props.name}
          defaultValue={props.defaultValue}
          type={props.type}
          {...props.input}
          placeholder={props.placeholder}
          className={`text-input__input ${props.className || ''} ${
            props.disabled && 'text-input__input--disabled'
          }`}
          required={props.required}
          disabled={props.disabled}
          mask={props.mask}
        />
      ) : (
        <input
          id={props.name}
          name={props.name}
          defaultValue={props.defaultValue}
          type={props.type}
          {...props.input}
          placeholder={props.placeholder}
          className={`text-input__input ${props.className || ''} ${
            props.disabled && 'text-input__input--disabled'
          }`}
          required={props.required}
          disabled={props.disabled}
        />
      )}
      {props.meta.touched && props.meta.error && !props.disabled && (
        <div className='text-input__label text-input__label--danger'>
          {props.meta.error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
