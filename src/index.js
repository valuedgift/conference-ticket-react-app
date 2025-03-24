import ReactDom from "react-dom/client";
import "./index.css";
import "./App.css";

import React, { useState, useEffect } from "react";

const TicketSelection = ({ onNextStep, onCancelStep }) => {
  const [selectedTicket, setSelectedTicket] = useState('vip');
  const [ticketCount, setTicketCount] = useState(1);

  const handleTicketSelect = (type) => {
    setSelectedTicket(type);
  };

  const handleTicketCount = (count) => {
    setTicketCount(count);
  };

  return (
    <div className="container-main">
      <div className="main-card">
        <header>
          <h3>Ticket Selection</h3>
          <h4>Step 1/3</h4>
        </header>

        <div className="progressive-bar">
          <div className="progressive-bar-absolute"></div>
        </div>
        <div className="caption-card">
          <h1>Aptiw Fest "25</h1>
          <p>Join us for an unforgettable experience at Aptiw</p>
          <p>Secure your spot now.</p>
          <p>#9 GRA Phase 2 || March 27, 2025 || 7:00 PM</p>
        </div>

        <div className="bar-horizontal"></div>

        <h4>Select Ticket Type</h4>
        <div className="ticket-type-cards-container">
          <div
            className={`card ${selectedTicket === "regular" ? "active" : ""}`}
            onClick={() => handleTicketSelect("regular")}
          >
            <p className="bold">Free</p>
            <p className="small-text">REGULAR ACCESS</p>
            <p className="small-text">20/52</p>
          </div>
          <div
            className={`card ${selectedTicket === "vip" ? "active" : ""}`}
            onClick={() => handleTicketSelect("vip")}
          >
            <p className="bold">$150</p>
            <p className="small-text">VIP ACCESS</p>
            <p className="small-text">20/52</p>
          </div>
          <div
            className={`card ${selectedTicket === "vvip" ? "active" : ""}`}
            onClick={() => handleTicketSelect("vvip")}
          >
            <p className="bold">$300</p>
            <p className="small-text">VVIP ACCESS</p>
            <p className="small-text">10/25</p>
          </div>
        </div>

        <h4>Number of Tickets</h4>
        <div className="dropdown">
          <select onChange={(e) => handleTicketCount(e.target.value)} value={ticketCount}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="cancel-next-container">
          <button className="cancel" onClick={onCancelStep}>Cancel</button>
          <button className={`next ${selectedTicket ? "active-next" : ""}`} onClick={onNextStep}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};


//import React, { useState, useEffect } from "react";
function Step2({ onNextStep, onCancelStep }) {
  const [img, setimg] = useState(localStorage.getItem("img") || "");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [errors, setErrors] = useState({});
  const [ticketGenerated, setTicketGenerated] = useState(false);

  useEffect(() => {
    localStorage.setItem("img", img);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }, [name, email, img]);

  const validateForm = () => {
    let newErrors = {};
    if (!img.trim() || !img.startsWith("http"))
      newErrors.img = "Valid image URL is required";
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
    <header className="header-3">
      <h3>Attendee Details</h3>
      <h4>Step 2/3</h4>
    </header>
    <div class="progressive-barr">
      <div class="progressive-barr-absolute"></div>
    </div>
    <form onSubmit={handleSubmit} className="form">
      <label>Upload Profile Photo</label>
      <input
        type="text"
        value={img}
        onChange={(e) => setimg(e.target.value)}
        className={errors.img ? "input error" : "input"}
        aria-describedby="imgError"
      />
      {errors.img && <span id="imgError" className="error-text">{errors.img}</span>}

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
          <h3 className="ready">Ready</h3>
          <h4 className="three">3/3</h4>
        </div>
        <div className="progress-barr">
          <div className="progress-barr-absolute"></div>
        </div>
        <h2 className="ticket-title">Your Ticket is Booked!</h2>
        <p>Check your email for a copy or you can download</p>
        <div className='aptiw-section'>
          <h3>Aptiw Fest "25</h3>
          <p>04 Aggrey Road, Rivers-State, Nigeria</p>
          <p>March 15, 2025 | 7:00 PM</p>
          <img src={img} alt="img" className="ticket-img" />
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
          <div class="barr"></div>
          <label className='second-request'>Special Request?</label>
          <textarea></textarea>
        </div>
      </div>
    )}
  </div>
  )
}

function App() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 1 || step > 2) {
      throw new Error("invalid step: step " + step);
    }
    setStep(step => step + 1)
  }

  const handleCancelStep = () => {
    // implementation...
    setStep(1)
  }

  return (
    <>
      {step == 1 ? <TicketSelection onNextStep={handleNextStep} onCancelStep={handleCancelStep} /> : null}
      {step == 2 ? <Step2 onNextStep={handleNextStep} onCancelStep={handleCancelStep} /> : null}
      {/* {step == 3 ? <Step3 /> : null} */}
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<App />);


