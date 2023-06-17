import React from 'react';
import signpic from '../images/sign.PNG';
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';

const Signup = () => {
const history = useHistory();
const [user, setUser] = useState({
  name:"",email:"",phone:"",work:"",password:"",cpassword:"" });

  let name , value;
  const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;

      setUser({...user,[name]:value});
  }

  const postData = async (e) => {
      e.preventDefault();

      const {name, email, phone, work, password, cpassword} = user;
       const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phone, work, password, cpassword  //key:value
        })
       });

       const data = await res.json();

       if (data.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Registration Invalid");
       }
       else{
        window.alert("Registration Sucessfull!");
        console.log("Sucessfull Registration");

        history.push("/login");
       }

  }

  return (
    <>
      <section className="signup">
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Sign up</h2>
              <form method="POST" className='register-form' id='register-form'>
                <div className='form-group'>
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account meterial-icons-name"></i>
                  </label>
                  <input type="text" name="name" id='name' autoComplete='off'
                    value={user.name}
                    onChange={handleInputs}
                  placeholder="Your Name" />
                </div>

                <div className='form-group'>
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email meterial-icons-name"></i>
                  </label>
                  <input type="email" name="email" id='email' autoComplete='off'
                    value={user.email}
                    onChange={handleInputs}
                  placeholder="Your Email" />
                </div>
                
                <div className='form-group'>
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone meterial-icons-name"></i>
                  </label>
                  <input type="number" name="phone" id='phone' autoComplete='off'
                    value={user.phone}
                    onChange={handleInputs}
                  placeholder="Your Phone" />
                </div>

                <div className='form-group'>
                  <label htmlFor="work">
                    <i class="zmdi zmdi-slideshow meterial-icons-name"></i>
                  </label>
                  <input type="text" name="work" id='work' autoComplete='off'
                    value={user.work}
                    onChange={handleInputs}
                  placeholder="Your Profession" />
                </div>

                <div className='form-group'>
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock meterial-icons-name"></i>
                  </label>
                  <input type="password" name="password" id='password' autoComplete='off'
                    value={user.password}
                    onChange={handleInputs}
                  placeholder="Your Password" />
                </div>

                <div className='form-group'>
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock meterial-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword" id='cpassword' autoComplete='off'
                    value={user.cpassword}
                    onChange={handleInputs}
                  placeholder="Cofirm Your Password" />
                </div>

                <div className='from-group form-button'>
                  <input type="submit" name="signup" id='signup' className='form-submit'
                  value="Register" onClick={postData}
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
