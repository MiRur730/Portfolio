import './index.scss';
import { useRef } from 'react';
import LinearWithValueLabel from '../Progress/Progress';

const Contactpart = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get('full_name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mitalisalaria55@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.open(gmailLink, '_blank');
  };

  return (
    <>
      <LinearWithValueLabel progress={80} />

      <div className="form-main">
        <div className="main-wrapper">
          <h2 className="form-head">Message here</h2>
          <form ref={form} onSubmit={sendEmail} className="form-wrapper">
            <div className="form-card">
              <input
                className="form-input"
                type="text"
                name="full_name"
                required
              />
              <label className="form-label" htmlFor="full_name">Name</label>
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="email"
                name="email"
                required
              />
              <label className="form-label" htmlFor="email">Email</label>
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="text"
                name="subject"
                required
              />
              <label className="form-label" htmlFor="subject">Subject</label>
            </div>

            <div className="form-card">
              <textarea
                className="form-textarea"
                maxLength="420"
                rows="3"
                name="message"
                required
              ></textarea>
              <label className="form-textarea-label" htmlFor="message">Message</label>
            </div>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactpart;

