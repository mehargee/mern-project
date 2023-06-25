import React, { useState } from 'react';
import loginpic from '../images/login.PNG';
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../App';

const Login = () => {

  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    console.log("login page working");
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,        //key:value
        password
      })
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert('Invalid information');
    }
    else {
      
      dispatch({ type: 'USER', payload: true })

      window.alert('Login Sucessfull!');

      history.push('/');
    }
  }

  return (
    <>
      <section className="signin">
        <div className='container mt-5'>
          <div className='signin-content'>

            {/* Left side images */}
            <div className='signin-image'>
              <figure>
                <img src={loginpic} alt="login pic" width={300} height={300} />
              </figure>
              <NavLink to="/signup" className="signin-img-link">Create an Account</NavLink>
            </div>

            <div className='signin-form'>
              <h2 className='form-title'>Login</h2>

              <form method="POST" className='login-form' id='login-form'>


                <div className='form-group'>
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email meterial-icons-name"></i>
                  </label>
                  <input type="email" name="email" id='email' autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email" />
                </div>

                <div className='form-group'>
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock meterial-icons-name"></i>
                  </label>
                  <input type="password" name="password" id='password' autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password" />
                </div>

                <div className='from-group form-button'>
                  <input type="submit" name="signin" id='signin' className='form-login'
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Login;
