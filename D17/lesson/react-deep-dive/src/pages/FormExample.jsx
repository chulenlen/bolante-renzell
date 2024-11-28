/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FormExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
