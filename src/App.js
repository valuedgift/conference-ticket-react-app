import "./App.css";

import React, { useState, useEffect } from "react";
const App = () => {
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [errors, setErrors] = useState({});
  const [ticketGenerated, setTicketGenerated] = useState(false);

  useEffect(() => {
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }, [name, email, avatar]);

  const validateForm = () => {
    let newErrors = {};
    if (!avatar.trim() || !avatar.startsWith("http"))
      newErrors.avatar = "Valid image URL is required";
    setErrors(newErrors);
    if (!name.trim()) newErrors.name = "Full Name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Valid email is required";
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
      <header>
        <h3>Attendee Details</h3>
        <h4>Step 2/3</h4>
      </header>
      <div class="progressive-bar">
        <div class="progressive-bar-absolute"></div>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label>Upload Profile Photo</label>
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className={errors.avatar ? "input error" : "input"}
          aria-describedby="avatarError"
        />
        {errors.avatar && <span id="avatarError" className="error-text">{errors.avatar}</span>}

        <div class="bar"></div>

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

        <label>Special Request</label>
        <textarea></textarea>

        <div class="cancel-next-container">
          <div class="cancel">Back</div>
          <div class="next">Get My Free Ticket</div>
        </div>

        <button type="submit" className="button">Generate Ticket</button>
      </form>

      {ticketGenerated && (
        <div className="ticket-container">
          <div className='ready-container'>
            <h3>Ready</h3>
            <h4>3/3</h4>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-absolute"></div>
          </div>
          <h2 className="ticket-title">Your Ticket is Booked!</h2>
          <p>Check your email for a copy or you can download</p>
          <div className='aptiw-section'>
            <h3>Aptiw Fest "25</h3>
            <p>04 Aggrey Road, Rivers-State, Nigeria</p>
            <p>March 15, 2025 | 7:00 PM</p>
            <img src={avatar} alt="Avatar" className="ticket-avatar" />
          </div>
          <div className='ticket-sample'>
            <div className='email-name-container'>
              <div className='name-container'>
                <p className="enter-name">Enter your name</p>
                <h5 className="ticket-name">{name}</h5>
              </div>
              <div className='email-container'>
                <p className="enter-email">Enter your email</p>
                <h5 className="ticket-email">{email}</h5>
              </div>
            </div>
            <div class="bar"></div>
            <div className='vip-number-container'>
              <div className='ticket-type-container'>
                <p className="ticket-type">Ticket Type:</p>
                <h5 className="ticket-vip">VIP</h5>
              </div>
              <div className='ticket-counter-container'>
                <p className="ticket-for">Ticket for:</p>
                <h5 className="ticket-count">1</h5>
              </div>
            </div>
            <div class="bar"></div>
            <label className='second-request'>Special Request?</label>
            <textarea></textarea>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

