import React, { useState } from 'react';
import "./Login.css";
import {Link, useNavigate} from "react-router-dom";
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");
    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/");
        })
        .catch(error => alert(error.message));
    }
  const register = (e) => {
    e.preventDefault();
    //register firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) {
            navigate("/");
        }
      })
      .catch(error => alert(error.message));
  }
  return (
    <div className="login">
        <Link to="/">
      <img
      className="login__logo" 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
    </Link>

    <div className="login__container">
        <h1>Sign-in</h1>

        <form>
            <h5> E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

            <h5>  Password</h5>
            <input type="password"  value={password} onChange={e => setPassword(e.target.value)} />
            <p> <input type="checkbox" /> By-signing in you agree to amazon's-clone conditions of use and Privacy Notice.</p>
            <button type ="submit" onClick={signIn} className="login__signInButton"> Sign In</button>
        </form>

        <button type="submit" onClick={register} className="login__registerButton"> Create your Amazon Account</button>
    </div>
    </div>
  )
}

export default Login