import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])


  const handleLogin = (e) => {
    const validUsername = 'user123';
    const validPassword = 'pass123';
    if (username === validUsername && password === validPassword) {
      console.log('Login successful');
    } else {
      console.error('Login failed');
    }
  };





  return (
    <div>
      <div className="login-container">
        <h2>Login to your Account</h2>
        <label htmlFor="username">Username:</label>
        <input
          placeholder='username'
          autoComplete='off'
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          placeholder='password'
          autoComplete='off'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin}>Login</button>
        <p className="login-text">
          <Link to="/signup">Don't have an account? Sign up here</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
