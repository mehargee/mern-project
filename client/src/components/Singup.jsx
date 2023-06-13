import React from 'react';
import signpic from '../images/sign.PNG';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Sign up</h2>
              <form action="#" method="get" className='register-form' id='register-form'>
                <div className='form-group'>
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account meterial-icons-name"></i>
                  </label>
                  <input type="text" name="name" id='name' autoComplete='off'
                  placeholder="Your Name" />
                </div>

                <div className='form-group'>
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email meterial-icons-name"></i>
                  </label>
                  <input type="email" name="email" id='email' autoComplete='off'
                  placeholder="Your Email" />
                </div>
                
                <div className='form-group'>
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone meterial-icons-name"></i>
                  </label>
                  <input type="number" name="phone" id='phone' autoComplete='off'
                  placeholder="Your Phone" />
                </div>

                <div className='form-group'>
                  <label htmlFor="work">
                    <i class="zmdi zmdi-slideshow meterial-icons-name"></i>
                  </label>
                  <input type="text" name="work" id='work' autoComplete='off'
                  placeholder="Your Profession" />
                </div>

                <div className='form-group'>
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock meterial-icons-name"></i>
                  </label>
                  <input type="password" name="password" id='password' autoComplete='off'
                  placeholder="Your Password" />
                </div>

                <div className='form-group'>
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock meterial-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword" id='cpassword' autoComplete='off'
                  placeholder="Cofirm Your Password" />
                </div>

                <div className='from-group form-button'>
                  <input type="submit" name="signup" id='signup' className='form-submit'
                  value="Register"
                  />
                </div>

              </form>
              </div>

              {/* Right side images */}
              <div className='signup-image'>
                <figure>
                  <img src={signpic} alt="registration pic" width={500} height={500} />
                </figure>
                <NavLink to="/login" className="signup-img-link">I am already Register</NavLink>
              </div>

        
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup;
