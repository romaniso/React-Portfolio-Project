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
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        formData,
        process.env.YOUR_PUBLIC_KEY
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
      <form className="form">
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
          onClick={(e) => sendEmail(e)}
        />
      </form>
      <div className="row">{result ? <Result /> : null}</div>
    </div>
  );
};

export default ContactForm;

// Old version - it doesn't work, maybe because of useState hooks

// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";

// const Result = () => {
//   return (
//     <p className="form__result">
//       Your message has been sent. I will contact you soon.
//     </p>
//   );
// };

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const form = useRef();

//   const [result, showResult] = useState(false);
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_r6r1q4l",
//         "template_ddsxtrm",
//         form.current,
//         "gzuG-8n8L9RcvpbJh"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//     showResult(true);
//   };

//   setTimeout(() => {
//     showResult(false);
//   }, 10000);

//   return (
//     <div className="form__wrapper">
//       <form className="form" ref={form} onSubmit={sendEmail}>
//         <div className="form-group">
//           <label htmlFor="name">
//             Your name
//             <input
//               className="card"
//               type="text"
//               id="name"
//               name="user_name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">
//             Your email
//             <input
//               className="card"
//               type="email"
//               id="email"
//               name="user_email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">
//             Your message
//             <textarea
//               className="card"
//               type="text"
//               id="message"
//               name="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         <button className="form__button button" type="submit">
//           Send me a message
//         </button>
//         <div className="row">{result ? <Result /> : null}</div>
//       </form>
//     </div>
//   );
// }
