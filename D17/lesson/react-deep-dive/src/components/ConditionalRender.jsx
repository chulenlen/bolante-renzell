/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

const ConditionalRender = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      {isLoggedIn ? <p>Welcome Back!</p> : <p>Please Log in </p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

export default ConditionalRender;
