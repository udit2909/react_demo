import React from 'react';

const TextInput = (props) => {
  let wrapperClass = 'form-group';
  if (props.error && props.error.length > 0){
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className = {wrapperClass}>
      <label htmlFor = {props.name}>{props.label}</label>
      <div className = "field">
        <input
        type= "text"
        name = {props.name}
        className = "form-control"
        value = {props.value}
        onChange = {props.onChange}
      />
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  )
}

export default TextInput;
