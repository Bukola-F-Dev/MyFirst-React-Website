import React, { useState, useEffect } from 'react';
import '../pages/CSS/LoginSignup.css';
import { auth } from '../Firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(''); // NEW: message state
  const [messageType, setMessageType] = useState(''); // NEW: to style success or error

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    if (isSignup) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setMessageType('success');
          setMessage('Signup successful!');
        })
        .catch((error) => {
          setMessageType('error');
          setMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setMessageType('success');
          setMessage('Login successful!');
        })
        .catch((error) => {
          setMessageType('error');
          setMessage(error.message);
        });
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setMessageType('success');
      setMessage('Logged out successfully.');
    });
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {user ? (
          <div>
            <h2>
              Welcome, {user.email} <br />
               <span className='link'><Link to='/'>Go back home</Link></span>
            </h2>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <>
            <h1>{isSignup ? 'Sign Up' : 'Login Here'}</h1>
           {message && (
              <p className={`message ${messageType}`}>
                {message}
              </p>
            )}
             {/* Message box */}
            <form onSubmit={handleSubmit} className="loginsignup-field">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <br />
              <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
            </form>
            <p>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <button
                onClick={() => {
                  setIsSignup(!isSignup);
                  setMessage('');
                }}
                style={{ marginLeft: '10px' }}
              >
                {isSignup ? 'Login here' : 'Sign up'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;