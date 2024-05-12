
import React, { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Login form submitted:', { email, password });
    
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>/
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;