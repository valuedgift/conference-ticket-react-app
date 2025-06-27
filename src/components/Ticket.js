import { useEffect, useState } from "react";
import Barcode from "react-barcode";
import backgroundImage from "../images/background-image.png";

const Ticket = ({ name, email, ticketData = {}, img, fromMyTicketsPage = false }) => {
  const ticketType = ticketData.ticketType || "regular";
  const ticketCount = ticketData.ticketCount || 1;
  const barcodeValue = `${name}-${email}-${ticketType}`;

  const [sectionStyle, setSectionStyle] = useState({
    width: "270px",
    padding: "14px",
    top: "55px",
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 640;
      setSectionStyle({
        width: isMobile ? "260px" : "270px",
        padding: isMobile ? "8px" : "14px",
        top: isMobile ? "65px" : "55px",
      });
    };

    handleResize(); // Initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const aptiwSectionStyle = {
    position: "absolute",
    left: "50%", // Center horizontally
    transform: "translateX(-50%)",
    zIndex: 1,
    border: "solid 1px #24A0B5",
    borderRadius: "20px",
    ...sectionStyle,
  };

  return (
    <div
      className="ticket-wrapper"
      id="ticket-to-download"
      style={{
        position: "relative",
        maxWidth: "650px",
        // width: "100%",
        margin: "0 auto",
      }}
    >
      <img
        src={backgroundImage}
        alt="Ticket Background"
        className="ticket-background"
        style={{
          // width: "100%",
          maxWidth: "650px",
          // height: "auto",
          display: "block",
        }}
      />

      <div className="aptiw-section" style={aptiwSectionStyle}>
        <div className="aptiw-fest-container">
          <h3>Aptiw Fest '25</h3>
          <p>04 Aggrey Road, Rivers-State, Nigeria</p>
          <p>March 15, 2025 | 7:00 PM</p>
        </div>

        <div className="final-img-container">
          <img
            src={img}
            alt="User"
            style={{
              width: "120px",
              height: "110px",
              objectFit: "cover",
              borderRadius: "10px",
              border: "4px solid #24A0B580",
            }}
          />
        </div>

        <div className="ticket-sample">
          <div className="email-name-container">
            <div className="name-container">
              <p className="enter-name">Enter your name</p>
              <h5 className="ticket-name">{name}</h5>
            </div>
            <div className="email-container">
              <p className="enter-email">Enter your email*</p>
              <h5 className="ticket-email">{email}</h5>
            </div>
          </div>

          <div className="vip-number-container">
            <div className="ticket-type-container">
              <p className="ticket-type">Ticket Type:</p>
              <h5 className="ticket-vip">{ticketType.toUpperCase()}</h5>
            </div>
            <div className="ticket-counter-container">
              <p className="ticket-for">Ticket for:</p>
              <h5 className="ticket-count">{ticketCount}</h5>
            </div>
          </div>

          <div className="special-request-container">
            <label className="special-request">Special Request?</label>
            <p className="request">Nil? Or user's message.</p>
          </div>
        </div>
      </div>

      <div className="barcode-container">
        <Barcode
          value={barcodeValue}
          format="CODE128"
          width={0.55}
          height={63}
          displayValue={true}
          font="monospace"
          fontSize={11}
          background="transparent"
          lineColor="#24A0B5"
        />
      </div>
    </div>
  );
};

export default Ticket;