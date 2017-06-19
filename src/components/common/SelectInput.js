import React from 'react';

const SelectInput = (props) => {
  return (
    <div className = "form-group">
      <label htmlFor = {props.name}>{props.label}</label>
      <div className = "field">
        <select
        name = {props.name}
        className = "form-control"
        value = {props.value}
        onChange = {props.onChange}
        >
          <option value="">{props.defaultOption}</option>
          {props.options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>
          })}
        </select>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  )
}

export default SelectInput;
