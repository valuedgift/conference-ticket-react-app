import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { MdArrowRightAlt } from "react-icons/md";
// import { PiTicketDuotone } from "react-icons/pi";
import Header from "./Header";

const TicketSelection = ({ onNextStep, onCancelStep, setTicketData }) => {
  const [selectedTicket, setSelectedTicket] = useState("vip");
  const [ticketCount, setTicketCount] = useState(1);

  const handleTicketSelect = (type) => {
    setSelectedTicket(type);
  };

  const handleTicketCount = (count) => {
    setTicketCount(parseInt(count));
  };

  const handleNext = () => {
    setTicketData({ ticketType: selectedTicket, ticketCount });
    onNextStep();
  };

  const handleCancel = () => {
    setSelectedTicket("vip");
    setTicketCount(1);
    onCancelStep();
  };

  useEffect(() => {
    setTicketData({ ticketType: selectedTicket, ticketCount });
  }, [selectedTicket, ticketCount]);

  return (
    <div className="main-section">
      <Header />

      <div className="container-main">
        <header>
          <h3>Ticket Selection</h3>
          <h4>Step 1/3</h4>
        </header>

        <div className="progressive-bar">
          <div className="progressive-bar-absolute"></div>
        </div>

        <div className="main-card">
          {/* Event Details */}
          <div className="caption-card-section">
            <div className="caption-card">
              <h1>Aptiw Fest "25</h1>
              <p>
                Join us for an unforgettable experience at <br /> Aptiw Fest. Secure your spot now.
              </p>
            </div>
            <div className="text-deets-section">
              <p>#9 GRA Phase 2</p>
              <p>||</p>
              <p>March 27, 2025 || 7:00 PM</p>
            </div>
          </div>

          <div className="bar-horizontal"></div>

          {/* Ticket Type Selection */}
          <div className="select-ticket-section">
            <h4 className="select-ticket">Select Ticket Type</h4>
            <div className="ticket-type-cards-container-main">
              <div className="ticket-type-cards-container">
                {["regular", "vip", "vvip"].map((type) => (
                  <div
                    key={type}
                    className={`card ${selectedTicket === type ? "active" : ""}`}
                    onClick={() => handleTicketSelect(type)}
                  >
                    <p className="bold">
                      {type === "regular" ? "Free" : type === "vip" ? "$150" : "$300"}
                    </p>
                    <div className="small-text-section">
                      <p className="small-text">{type.toUpperCase()} ACCESS</p>
                      <p className="small-text small-text-button">{type === "vvip" ? "10/25" : "20/52"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ticket Count Selection */}
          <div className="dropdown">
            <h4 className="num-tickets">Number of Tickets</h4>
            <div className="select-wrapper">
              <select onChange={(e) => handleTicketCount(e.target.value)} value={ticketCount}>
                {[1, 2, 3].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <RiArrowDropDownLine className="select-icon" />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="cancel-next-container">
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className={`next ${selectedTicket ? "active-next" : ""}`} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
