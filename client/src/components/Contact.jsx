import React, { useEffect, useState } from 'react';

const Contact = () => {

  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });



  const callContactPage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    callContactPage();
  }, []);

  // we are storing data in satate 
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value })
  }

  // send the data to backend 
  const submitContactBtn = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, 
        email, 
        phone, 
        message     //key:value
      })
    });

    const data = await res.json();

    if (!data) {
      console.log("message not sent");
    }
    else{
      alert("message send...! Thanks");
      setUserData({...userData, message:""});
    }
  }

  return (
    <>
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className="row">
            <div className='co-lg-10 offset-lg-1 d-flex justify-content-between' >
              {/* phone number */}
              <div className='contact_info_item d-flex jsutify-content-start align-items-center'>
                <i class="zmdi zmdi-phone meterial-icons-name"></i>
                <div className='contact_info_contact'>
                  <div className='conatact_info_title'>
                    <b>Phone</b>
                  </div>
                  <div className='conatact_info_text'>
                    {userData.phone}
                  </div>

                </div>

              </div>
              {/* Email address */}
              <div className='contact_info_item d-flex jsutify-content-start align-items-center'>
                <i class="zmdi zmdi-email meterial-icons-name"></i>
                <div className='contact_info_contact'>
                  <div className='conatact_info_title'>
                    <b>Email</b>
                  </div>
                  <div className='conatact_info_text'>
                    {userData.email}
                  </div>

                </div>

              </div>
              {/* Home address */}
              <div className='contact_info_item d-flex jsutify-content-start align-items-center'>
                <i class="zmdi zmdi-slideshow meterial-icons-name"> </i>
                <div className='contact_info_contact'>
                  <div className='conatact_info_title'>
                    <b>Address</b>
                  </div>
                  <div className='conatact_info_text'>
                    Faisalabad, Pakistan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* contact us form  */}
      <div className='contact_form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact_form_container py-5'>
                <div className='contact_form_title'>
                  Get In Touch
                </div>
                <form method="POST" id='contact_form'>
                  <div className='contact_form_name d-flex justify-content-between align-items-between'>

                    <input type="text" id="contact_form_name"
                      className='contact_form_name input_field'
                      onChange={handleInputs}
                      name="name"
                      value={userData.name}
                      placeholder='Your Name' required="true" />

                    <input type="email" id="contact_form_email"
                      className='contact_form_name input_field'
                      onChange={handleInputs}
                      name="email"
                      value={userData.email}
                      placeholder='Your Email' required="true" />

                    <input type="number" id="contact_form_phone"
                      className='contact_form_name input_field'
                      onChange={handleInputs}
                      name="phone"
                      value={userData.phone}
                      placeholder='Your Phone Number' required="true" />
                  </div>

                  <div className='contact_from_text mt-5'>
                    <textarea className='text_field contact_form_message'
                      cols="30" rows="10" placeholder='Enter Your Message'
                      onChange={handleInputs}
                      name="message"
                      value={userData.message}>

                    </textarea>
                  </div>

                  <div className='contact_form_button'>
                    <button type='submit' className='button contact_submit_button'
                      onClick={submitContactBtn}>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact;
