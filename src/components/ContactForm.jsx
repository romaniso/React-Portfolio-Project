import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [popUp, setPopUp] = useState(false);
  const [success, setSuccess] = useState(false);
  const handlePopup = (success) => {
    if (success) {
      setSuccess(true);
    }
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r6r1q4l",
        "template_6ibf87l",
        form.current,
        "gzuG-8n8L9RcvpbJh"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          handlePopup(true);
        },
        (error) => {
          handlePopup(false);
        }
      );
  };

  return (
    <div className="form__wrapper">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_message">Message</label>
          <textarea name="message" id="message" required />
        </div>
        <input
          className="form__button button button--active"
          type="submit"
          value="Send me a message"
        />
      </form>
      <article className={popUp ? "popup" : "popup hidden"}>
        <p
          className={
            success
              ? "popup__content popup__content--success"
              : "popup__content popup__content--failure"
          }
        >
          {success
            ? "You message has been sent successfully"
            : "Ooops, something went wrong. Try again"}
        </p>
      </article>
    </div>
  );
};

export default ContactForm;
