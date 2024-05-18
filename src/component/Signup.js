import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {


    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [emailAdress, setEmailadress] = useState([]);
    const [confirmPassword, setConfirmPassword] = useState([]);

    const handleSignup = () => {
        console.log('Signup Details:', { username, password, confirmPassword });
        
    };
    return (
        <div>
            <div className="signup-container">
                <h2>Create an Account</h2>
                <label htmlFor="username">Username:</label>
                <input
                    placeholder='username'
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="emailAdress">email Adress:</label>
                <input
                    placeholder='emailAdress'
                    type="text"
                    id="emailAdress"
                    value={emailAdress}
                    onChange={(e) => setEmailadress(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    placeholder='password'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    placeholder='confirmPassword'
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button onClick={handleSignup}>Sign Up</button>
                <p className="signup-text">
                    <Link to="/Login">Already have an account? login </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup
