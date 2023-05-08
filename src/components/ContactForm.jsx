import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p className="form__result">
      Your message has been sent. I will contact you soon.
    </p>
  );
};

const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    user_message: "",
  });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData);

    emailjs
      .sendForm(
        "service_r6r1q4l",
        "temp_my_react_portfo",
        form.current,
        "gzuG-8n8L9RcvpbJh"
      )
      .then(
        (result) => {
          setFormData({
            user_email: "",
            user_name: "",
            user_message: "",
          });
          console.log(result.text);
        },
        (error) => {
          // place where error must appear
          console.log(error.text);
        }
      );

    showResult(true);
    setTimeout(() => {
      e.target.reset();
      showResult(false);
    }, 5000);
  };

  return (
    <div className="form__wrapper">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="card"
            id="user_name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input
            onChange={handleChange}
            value={formData.user_email}
            type="email"
            name="user_email"
            className="card"
            id="user_email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_message">Message</label>
          <textarea
            onChange={handleChange}
            value={formData.user_message}
            name="message"
            className="card"
            id="user_message"
            required
          />
        </div>

        <input
          className="form__button button"
          type="submit"
          value="Send me a message"
        />
      </form>
      <div className="row">{result ? <Result /> : null}</div>
    </div>
  );
};

export default ContactForm;
