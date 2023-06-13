import React from 'react';
import loginpic from '../images/login.PNG';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const Login = () => {
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
              <form action="#" method="post" className='login-form' id='login-form'>
                
                
                <div className='form-group'>
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email meterial-icons-name"></i>
                  </label>
                  <input type="email" name="email" id='email' autoComplete='off'
                    placeholder="Your Email" />
                </div>

                <div className='form-group'>
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock meterial-icons-name"></i>
                  </label>
                  <input type="password" name="password" id='password' autoComplete='off'
                    placeholder="Your Password" />
                </div>

                <div className='from-group form-button'>
                  <input type="submit" name="signin" id='signin' className='form-login'
                    value="Log In"
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
