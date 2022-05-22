import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p className="form__result">
      Your message has been sent. I will contact you soon.
    </p>
  );
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r6r1q4l",
        "template_ddsxtrm",
        form.current,
        "gzuG-8n8L9RcvpbJh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 10000);

  return (
    <div className="form__wrapper">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Your name
            <input
              className="card"
              type="text"
              id="name"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input
              className="card"
              type="text"
              id="email"
              email="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              className="card"
              type="text"
              id="message"
              message="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="form__button button" type="submit">
          Send me a message
        </button>
        <div className="row">{result ? <Result /> : null}</div>
      </form>
    </div>
  );
}
