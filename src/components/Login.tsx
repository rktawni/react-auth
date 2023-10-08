import React, { useState } from 'react';
import { useAuth } from '../provider/AuthProvider';

function Login() {
    const [user, setUser] = useState('');
    const {login} = useAuth();
    function handleLogin() {
        login(user)
    }
    return (
        <>
            <h1>Login Page</h1>
            <label>Name</label>
            <input type='text' onChange={(e) => { setUser(e.target.value) }} />
            <button type='submit' onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login;