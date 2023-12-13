import "./css/Contact.scss";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Verifying Email
    const inputEmail = formData.email;
    console.log(inputEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(inputEmail);
    setIsValid(validEmail);
    // Clearing Fields
    setFormData({
      name: "",
      email: "",
      text: "",
    });
  };

  return (
    <>
      <h1>Contact Me</h1>
      <div>
        <h2>Feel free to contact me down below:</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="container">
            <label>Name:</label>
            <input
              id="nameInput"
              type="text"
              value={formData.name}
              placeholder="Enter your name"
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            ></input>
          </div>
          <div className="container">
            <label>E-Mail:</label>
            <input
              id="emailInput"
              type="text"
              value={formData.email}
              placeholder="Enter your email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            ></input>
            {isValid ? null : <p>Enter a valid email address.</p>}
          </div>
          <div className="container">
            <label>Message:</label>
            <textarea
              id="messageInput"
              placeholder="Send me a message!"
              value={formData.text}
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
            ></textarea>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}
