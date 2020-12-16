import React, { useState } from 'react';

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    handleFilters(e.target.value);
    setValue(e.target.value);
  };

  return prices.map((price, i) => (
    <li key={i}>
      <input
        onChange={handleChange}
        value={`${price._id}`}
        name={price}
        type='radio'
        className='mr-2 ml-4 '
      />
      <label className='form-check-label'>{price.name}</label>
    </li>
  ));
};

export default RadioBox;
