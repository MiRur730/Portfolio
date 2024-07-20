

import emailjs from '@emailjs/browser'
import './index.scss'
import { useRef } from 'react'
import LinearWithValueLabel from '../Progress/Progress'
const Contactpart = () => {
  
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs
      

      .sendForm("service_ekekg3f","template_vtd7xiq", form.current,"GMAIL" )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
   
    



   <LinearWithValueLabel progress={80}/>

      <div className="form-main">
      
      <div className="main-wrapper">
        <h2 className="form-head">Message here</h2>
        <form ref={form}  onSubmit={sendEmail} className="form-wrapper">
          <div className="form-card">
            <input
              className="form-input"
              type="text"
              name="full_name"
              required="required"
            />
            <label className="form-label" htmlFor="full_name">Name</label>
          </div>

          <div className="form-card">
            <input
              className="form-input"
              type="email"
              name="email"
              required="required"
            />
            <label className="form-label" htmlFor="email">Email</label>
          </div>

          <div className="form-card">
            <input
              className="form-input"
              type="text"
              name="phone_number"
              required="required"
            />
            <label className="form-label" htmlFor="phone_number">Subject</label>
          </div>

          <div className="form-card">
            <textarea
              className="form-textarea"
              maxLength="420"
              rows="3"
              name="phone_number"
              required="required"
            ></textarea>
            <label className="form-textarea-label" htmlFor="phone_number"
              >Message</label>
            
          </div>
          <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
        </form>
      </div>
    </div>

            
    
 
    
    </>
  );
}

export default Contactpart;



// 

