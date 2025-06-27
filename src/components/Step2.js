import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { SiCloudinary } from "react-icons/si";
// import { PiTicketDuotone } from "react-icons/pi";
// import { MdArrowRightAlt } from "react-icons/md";
import Ticket from "./Ticket";
import DownloadLink from "./DownloadLink";
import SpecialRequestContainer from "./SpecialRequestContainer";
import Header from "./Header";

const Step2 = ({ onBackStep, ticketData }) => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [freeTicketWarning, setFreeTicketWarning] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const uploadToCloudinary = async (file) => {
    const cloudName = "dmc6nes1j";
    const uploadPreset = "jsx13579";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data.secure_url;
    } catch (err) {
      console.error("Cloudinary Upload Failed:", err);
      return null;
    }
  };

  useEffect(() => {
    localStorage.removeItem("img");
    setImg("");
    setName(localStorage.getItem("name") || "");
    setEmail(localStorage.getItem("email") || "");
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }, [name, email]);

  const validateForm = () => {
    let newErrors = {};
    if (!img.trim()) newErrors.img = "Valid image is required";
    if (!name.trim()) newErrors.name = "Full Name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Valid email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadedUrl = await uploadToCloudinary(file);
    if (uploadedUrl) {
      setImg(uploadedUrl);
    } else {
      alert("Image upload failed. Please try again.");
    }
  };

  const handleDownload = () => {
    const ticketElement = document.getElementById("ticket-to-download");
    if (!ticketElement) return;

    html2canvas(ticketElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "ticket.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  // const handleGenerateTicket = () => {
  //   if (validateForm()) {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setTicketGenerated(true);
  //       setIsLoading(false);
  //     }, 1500);
  //   }
  // };


  const handleGenerateTicket = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        //Build new ticket object here
        const newTicket = {
          name,
          email,
          img,
          ticketType: ticketData.ticketType,
          ticketCount: ticketData.ticketCount,
          specialRequest: localStorage.getItem("specialRequest") || "Nil",
          date: new Date().toLocaleString(),
        };

        //Store it in localStorage under "myTickets"
        const existingTickets = JSON.parse(localStorage.getItem("myTickets")) || [];
        localStorage.setItem("myTickets", JSON.stringify([...existingTickets, newTicket]));

        setTicketGenerated(true);
        setIsLoading(false);
      }, 1500);
    }
  };


  // Final Ticket Screen
  if (ticketGenerated) {
    return (
      <div className="main-section">
        <Header />

        <div className="final-ticket-section">
          <div className="ready-bar-section">
            <div className="ready-container">
              <h3 className="ready">Ready</h3>
              <h4 className="three">3/3</h4>
            </div>
            <div className="progress-barr">
              <div className="progress-barr-absolute"></div>
            </div>
          </div>

          <div className="ticket-container-section">
            <div className="ticket-title-section">
              <h2 className="ticket-title">Your Ticket is Booked!</h2>
              <DownloadLink handleDownload={handleDownload} />
            </div>

            <div className="ticket-container">
              <Ticket name={name} email={email} ticketData={ticketData} img={img} />
              <div className="ticket-actions">
                <button className="back-button" onClick={() => window.location.reload()}>
                  Book Another Ticket
                </button>
                <button className="download-button" onClick={handleDownload}>
                  Download Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Attendee Form
  return (
    <div className="main-section">
      <Header />

      <div className="container">
        <header className="header-3">
          <h3>Attendee Details</h3>
          <h4>Step 2/3</h4>
        </header>

        <div className="progressive-barr">
          <div className="progressive-barr-absolute"></div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="form">
          {/* Upload Section */}
          <div className="box-container">
            <label>Upload Profile Photo</label>
            <div className="upload-box-container">
              <div className={`upload-box ${img ? "no-padding" : "with-padding"}`}>
                <label htmlFor="fileUpload" className="upload-label">
                  {img ? (
                    <img src={img} alt="Preview" className="image-preview" />
                  ) : (
                    <div className="icon-load-container">
                      <SiCloudinary className="cloudinary-icon" />
                      <p>Drag & drop or click to upload</p>
                    </div>
                  )}
                  <input
                    type="file"
                    id="fileUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="upload-input"
                  />
                </label>
              </div>
            </div>
          </div>
          {errors.img && <span id="imgError" className="error-text">{errors.img}</span>}

          {/* Form Fields */}
          <div className="bar"></div>

          <div className="input-container">
            <label className="label">Enter your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? "input error" : "input"}
              aria-describedby="nameError"
            />
          </div>
          {errors.name && <span id="nameError" className="error-text">{errors.name}</span>}

          <div className="input-container">
            <label className="label">Enter your email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "input error" : "input"}
              aria-describedby="emailError"
            />
          </div>
          {errors.email && <span id="emailError" className="error-text">{errors.email}</span>}

          <SpecialRequestContainer />

          {/* Navigation Buttons */}
          <div className="cancel-next-container cancel-nxt-contnr">
            <button type="button" className="cancel" onClick={onBackStep}>
              Back
            </button>

            <button
              type="button"
              className="next second-next"
              disabled={isLoading}
              onClick={handleGenerateTicket}
            >
              {isLoading && <span className="spinner"></span>}
              {isLoading
                ? "Processing..."
                : ticketData.ticketType === "regular"
                  ? "Get My Free Ticket"
                  : "Get My Ticket"}
            </button>
          </div>

          {/* Warning */}
          {freeTicketWarning && (
            <p className="warning-text fade-in-out">{freeTicketWarning}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Step2;
