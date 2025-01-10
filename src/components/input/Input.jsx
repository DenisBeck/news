import React, { useState } from 'react';

import classes from './Input.module.scss';

const Input = ({ label, value, name }) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className={classes.field}>
      <label className={classes.label}>{label}</label>
      <input name={name} className={classes.input} onChange={e => setInputValue(e.target.value)} type='text' value={inputValue} />
    </div>
  )
}

export default Input;