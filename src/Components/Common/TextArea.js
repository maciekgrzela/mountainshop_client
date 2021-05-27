import React from 'react';

const TextArea = (props) => {
  return (
    <div className='text-area'>
      <textarea
        rows={6}
        name={props.name}
        type={props.type}
        {...props.input}
        placeholder={props.placeholder}
        className={`text-area__input ${props.className}`}
        required={props.required}
        disabled={props.disabled}
      >
        {props.defaultValue}
      </textarea>
      {props.meta.touched && props.meta.error && (
        <div className='text-area__label text-area__label--danger'>
          {props.meta.error}
        </div>
      )}
    </div>
  );
};

export default TextArea;
