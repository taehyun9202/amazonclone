import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="loginContainer">
                <h3>Sign-In</h3>
                <form className="loginForm">
                    <strong>Email</strong>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <strong>Password</strong>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn}>Sign-In</button>
                </form>
                <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
            </div>
            <small>New to Amazon?</small>
            <button onClick={register} className="button2">Create your Amazon account</button>
        </div>
    )
}

export default Login