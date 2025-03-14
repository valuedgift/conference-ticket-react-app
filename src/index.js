import ReactDom from 'react-dom/client';
import './index.css';

import React, { useState, useEffect } from "react";
const TicketGenerator = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [errors, setErrors] = useState({});
  const [ticketGenerated, setTicketGenerated] = useState(false);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("avatar", avatar);
  }, [name, email, avatar]);

  const validateForm = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "Full Name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Valid email is required";
    if (!avatar.trim() || !avatar.startsWith("http"))
      newErrors.avatar = "Valid image URL is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTicketGenerated(true);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Conference Ticket Generator</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "input error" : "input"}
          aria-describedby="nameError"
        />
        {errors.name && <span id="nameError" className="error-text">{errors.name}</span>}

        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "input error" : "input"}
          aria-describedby="emailError"
        />
        {errors.email && <span id="emailError" className="error-text">{errors.email}</span>}

        <label>Avatar URL</label>
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className={errors.avatar ? "input error" : "input"}
          aria-describedby="avatarError"
        />
        {errors.avatar && <span id="avatarError" className="error-text">{errors.avatar}</span>}

        <button type="submit" className="button">Generate Ticket</button>
      </form>

      {ticketGenerated && (
        <div className="ticket">
          <h2 className="ticket-title">Ticket Approved</h2>
          <p className="ticket-name">{name}</p>
          <p className="ticket-email">{email}</p>
          <img src={avatar} alt="Avatar" className="ticket-avatar" />
        </div>
      )}
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<TicketGenerator />);

