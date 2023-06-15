import React from 'react'

const Contact = () => {
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
                    +92-308-493-345-3
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
                    mehrgee826@gmail.com
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
                    Nazimabad, Faisalabad
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
                <form id='contact_form'>
                  <div className='contact_form_name d-flex justify-content-between align-items-between'>
                   
                    <input type="text" id="contact_form_name"
                      className='contact_form_name input_field'
                      placeholder='Your Name' required="true" />

                    <input type="email" id="contact_form_email"
                      className='contact_form_name input_field'
                      placeholder='Your Email' required="true" />

                    <input type="number" id="contact_form_phone"
                      className='contact_form_name input_field'
                      placeholder='Your Phone Number' required="true" />
                  </div>

                  <div className='contact_from_text mt-5'>
                    <textarea name="message" className='text_field contact_form_message' 
                    cols="30" rows="10"></textarea>
                  </div>

                  <div className='contact_form_button'>
                    <button type='submit' className='button contact_submit_button'>
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
