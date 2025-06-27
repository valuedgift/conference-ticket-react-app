import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



// import ReactDOM from "react-dom/client";
// import Barcode from "react-barcode";
// import html2canvas from "html2canvas";
// import { MdArrowRightAlt } from "react-icons/md";
// import { SiCloudinary } from "react-icons/si";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { PiTicketDuotone } from "react-icons/pi";
// import backgroundImage from './images/background-image.png';

// import "./index.css";
// import "./App.css";

// import React, { useState, useEffect } from "react";

// const TicketSelection = ({ onNextStep, onCancelStep, setTicketData }) => {
//   const [selectedTicket, setSelectedTicket] = useState("vip");
//   const [ticketCount, setTicketCount] = useState(1);

//   const handleTicketSelect = (type) => {
//     setSelectedTicket(type);
//   };

//   const handleTicketCount = (count) => {
//     setTicketCount(parseInt(count));
//   };

//   const handleNext = () => {
//     setTicketData({ ticketType: selectedTicket, ticketCount });
//     onNextStep();
//   };

//   useEffect(() => {
//     setTicketData({ ticketType: selectedTicket, ticketCount });
//   }, [selectedTicket, ticketCount]);

//   const handleCancel = () => {
//     setSelectedTicket("vip");
//     setTicketCount(1);
//     onCancelStep();
//   };

//   return (
//     <div className="main-section">
//       <nav className="main-header">
//         <ul className="header-list">
//           <li className="tics-container">
//             <a href="/" className="tics-logo-link">
//               <PiTicketDuotone className="tics-logo" />
//               <span>ticz</span>
//             </a>
//           </li>

//           <li className="header-events-container">
//             <a href="/events" className="nav-link">Events</a>
//             <a href="/my-tickets" className="nav-link">My Tickets</a>
//             <a href="about" className="nav-link">About Project</a>
//           </li>

//           <li className="header-ticket-container">
//             <a href="/my-tickets" className="icon-button">
//               My Tickets <MdArrowRightAlt className="arrow-icon" />
//             </a>
//           </li>
//         </ul>
//       </nav>

//       <div className="container-main">
//         <header>
//           <h3>Ticket Selection</h3>
//           <h4>Step 1/3</h4>
//         </header>
//         <div className="progressive-bar">
//           <div className="progressive-bar-absolute"></div>
//         </div>
//         <div className="main-card">
//           <div className="caption-card-section">
//             <div className="caption-card">
//               <h1>Aptiw Fest "25</h1>
//               <p>Join us for an unforgettable experience at <br></br>Aptiw Fest. Secure your spot now.</p>
//             </div>
//             <div className="text-deets-section">
//               <p>#9 GRA Phase 2</p>
//               <p>||</p>
//               <p>March 27, 2025 || 7:00 PM</p>
//             </div>
//           </div>

//           <div className="bar-horizontal"></div>

//           <div className="select-ticket-section">
//             <h4 className="select-ticket">Select Ticket Type</h4>
//             <div className="ticket-type-cards-container-main">
//               <div className="ticket-type-cards-container">
//                 <div
//                   className={`card ${selectedTicket === "regular" ? "active" : ""}`}
//                   onClick={() => handleTicketSelect("regular")}
//                 >
//                   <p className="bold">Free</p>
//                   <div className="small-text-section">
//                     <p className="small-text">REGULAR ACCESS</p>
//                     <p className="small-text small-text-button">20/52</p>
//                   </div>
//                 </div>
//                 <div
//                   className={`card ${selectedTicket === "vip" ? "active" : ""}`}
//                   onClick={() => handleTicketSelect("vip")}
//                 >
//                   <p className="bold">$150</p>
//                   <div className="small-text-section">
//                     <p className="small-text">VIP ACCESS</p>
//                     <p className="small-text small-text-button">20/52</p>
//                   </div>
//                 </div>
//                 <div
//                   className={`card ${selectedTicket === "vvip" ? "active" : ""}`}
//                   onClick={() => handleTicketSelect("vvip")}
//                 >
//                   <p className="bold">$300</p>
//                   <div className="small-text-section">
//                     <p className="small-text">VVIP ACCESS</p>
//                     <p className="small-text small-text-button">10/25</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="dropdown">
//             <h4 className="num-tickets">Number of Tickets</h4>
//             <div className="select-wrapper">
//               <select onChange={(e) => handleTicketCount(e.target.value)} value={ticketCount}>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//               <RiArrowDropDownLine className="select-icon" />
//             </div>
//           </div>

//           <div className="cancel-next-container">
//             <button className="cancel" onClick={handleCancel}>Cancel</button>
//             <button className={`next ${selectedTicket ? "active-next" : ""}`} onClick={handleNext}>
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// };


// const DownloadLink = ({ handleDownload }) => {
//   const [isDefaultText, setIsDefaultText] = useState(true);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 640) {
//         setIsDefaultText(false);
//       } else {
//         setIsDefaultText(true);
//       }
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <a href="#" className="check-email-copy">
//       {isDefaultText ? (
//         <>
//           Check your email for a copy or you can{" "}
//           <span
//             style={{ fontWeight: "bold", cursor: "pointer" }}
//             onClick={handleDownload}
//           >
//             download
//           </span>
//         </>
//       ) : (
//         "You can download or Check your email for a copy"
//       )}
//     </a>
//   );
// };

// const SpecialRequestContainer = () => {
//   const [labelText, setLabelText] = useState("Special Request");

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 640) {
//         setLabelText("Special Request?");
//       } else {
//         setLabelText("About the Project");
//       }
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="input-container">
//       <label className="label">{labelText}</label>
//       <textarea className="textarea"></textarea>
//     </div>
//   );
// };

// function Ticket({ name, email, ticketData, img }) {
//   const barcodeValue = `${name}-${email}-${ticketData.ticketType}`;

//   return (
//     <div className="ticket-wrapper" id="ticket-to-download">
//       <img src={backgroundImage} alt="Ticket-Background" className="ticket-background" />
//       <div className="aptiw-section">
//         <div className="aptiw-fest-container">
//           <h3>Aptiw Fest '25</h3>
//           <p>04 Aggrey Road, Rivers-State, Nigeria</p>
//           <p>March 15, 2025 | 7:00 PM</p>
//         </div>
//         <div className="final-img-container">
//           <img
//             src={img}
//             alt="img"
//             style={{
//               width: "120px",
//               height: "110px",
//               objectFit: "cover",
//               borderRadius: "10px",
//               borderWidth: "4px",
//               borderStyle: "solid",
//               borderColor: "#24A0B580",
//             }}
//           />
//         </div>
//         <div className="ticket-sample">
//           <div className="email-name-container">
//             <div className="name-container">
//               <p className="enter-name">Enter your name</p>
//               <h5 className="ticket-name">{name}</h5>
//             </div>
//             <div className="email-container">
//               <p className="enter-email">Enter your email</p>
//               <h5 className="ticket-email">{email}</h5>
//             </div>
//           </div>
//           <div className="vip-number-container">
//             <div className="ticket-type-container">
//               <p className="ticket-type">Ticket Type:</p>
//               <h5 className="ticket-vip">{ticketData.ticketType.toUpperCase()}</h5>
//             </div>
//             <div className="ticket-counter-container">
//               <p className="ticket-for">Ticket for:</p>
//               <h5 className="ticket-count">{ticketData.ticketCount}</h5>
//             </div>
//           </div>
//           <div className="special-request-container">
//             <label className="special-request">Special Request?</label>
//             <p className="request">
//               Nil? Or the user's sad story they write in there
//               <br />
//               gets this whole space, Max of three rows
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Barcode */}
//       <div className="barcode-container">
//         <Barcode
//           value={barcodeValue}
//           format="CODE128"
//           width={0.55}
//           height={63}
//           displayValue={true}
//           font="monospace"
//           fontSize={11}
//           background="transparent"
//           lineColor="#24A0B5"
//         />
//       </div>
//     </div>
//   );
// }


// function Step2({ onBackStep, ticketData }) {
//   const [img, setImg] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [errors, setErrors] = useState({});
//   const [ticketGenerated, setTicketGenerated] = useState(false);
//   const [freeTicketWarning, setFreeTicketWarning] = useState("");
//   const [isLoading, setIsLoading] = useState(false);


//   const uploadToCloudinary = async (file) => {
//     const cloudName = "dmc6nes1j";
//     const uploadPreset = "jsx13579";

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", uploadPreset);

//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       return data.secure_url;
//     } catch (err) {
//       console.error("Cloudinary Upload Failed:", err);
//       return null;
//     }
//   };

//   useEffect(() => {
//     // Reset image on mount
//     localStorage.removeItem("img");
//     setImg("");
//     setName(localStorage.getItem("name") || "");
//     setEmail(localStorage.getItem("email") || "");
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//   }, [name, email]);

//   const validateForm = () => {
//     let newErrors = {};
//     if (!img.trim()) newErrors.img = "Valid image is required";
//     if (!name.trim()) newErrors.name = "Full Name is required";
//     if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
//       newErrors.email = "Valid email is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const uploadedUrl = await uploadToCloudinary(file);
//     if (uploadedUrl) {
//       setImg(uploadedUrl);
//     } else {
//       alert("Image upload failed. Please try again.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setTicketGenerated(true);
//     }
//   };

//   const handleDownload = () => {
//     const ticketElement = document.getElementById("ticket-to-download");
//     if (!ticketElement) return;

//     html2canvas(ticketElement).then((canvas) => {
//       const link = document.createElement("a");
//       link.download = "ticket.png";
//       link.href = canvas.toDataURL("image/png");
//       link.click();
//     });
//   };


//   if (ticketGenerated) {
//     return (
//       <div className="main-section">

//         <nav className="main-header">
//           <ul className="header-list">
//             <li className="tics-container">
//               <a href="/" className="tics-logo-link">
//                 <PiTicketDuotone className="tics-logo" />
//                 <span>ticz</span>
//               </a>
//             </li>

//             <li className="header-events-container">
//               <a href="/events" className="nav-link">Events</a>
//               <a href="/my-tickets" className="nav-link">My Tickets</a>
//               <a href="about" className="nav-link">About Project</a>
//             </li>

//             <li className="header-ticket-container">
//               <a href="/my-tickets" className="icon-button">
//                 My Tickets <MdArrowRightAlt className="arrow-icon" />
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <div className="final-ticket-section">
//           <div className="ready-bar-section">
//             <div className='ready-container'>
//               <h3 className="ready">Ready</h3>
//               <h4 className="three">3/3</h4>
//             </div>
//             <div className="progress-barr">
//               <div className="progress-barr-absolute"></div>
//             </div>
//           </div>
//           <div className="ticket-container-section">

//             <div className="ticket-title-section">
//               <h2 className="ticket-title">Your Ticket is Booked!</h2>
//               <DownloadLink handleDownload={handleDownload} />
//             </div>

//             <div className="ticket-container">

//               <Ticket name={name} email={email} ticketData={ticketData} img={img} />

//               <div className="ticket-actions">
//                 <button className="back-button" onClick={() => window.location.reload()}>
//                   Book Another Ticket
//                 </button>
//                 <button
//                   className="download-button"
//                   onClick={() => {
//                     const ticketElement = document.getElementById("ticket-to-download");
//                     if (ticketElement) {
//                       html2canvas(ticketElement, {
//                         useCORS: true,
//                         allowTaint: true,
//                         backgroundColor: null,
//                         scale: 2,
//                       }).then((canvas) => {
//                         const link = document.createElement("a");
//                         link.href = canvas.toDataURL("image/png");
//                         link.download = "ticket.png";
//                         link.click();
//                       });
//                     }
//                   }}
//                 >
//                   Download Ticket
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="main-section">
//       <nav className="main-header">
//         <ul className="header-list">
//           <li className="tics-container">
//             <a href="/" className="tics-logo-link">
//               <PiTicketDuotone className="tics-logo" />
//               <span>ticz</span>
//             </a>
//           </li>

//           <li className="header-events-container">
//             <a href="/events" className="nav-link">Events</a>
//             <a href="/my-tickets" className="nav-link">My Tickets</a>
//             <a href="about" className="nav-link">About Project</a>
//           </li>

//           <li className="header-ticket-container">
//             <a href="/my-tickets" className="icon-button">
//               My Tickets <MdArrowRightAlt className="arrow-icon" />
//             </a>
//           </li>
//         </ul>
//       </nav>

//       <div>
//         <div className="container">
//           <header className="header-3">
//             <h3>Attendee Details</h3>
//             <h4>Step 2/3</h4>
//           </header>
//           <div className="progressive-barr">
//             <div className="progressive-barr-absolute"></div>
//           </div>
//           <form onSubmit={handleSubmit} className="form">
//             {/* Upload Section */}
//             <div className="box-container">
//               <label>Upload Profile Photo</label>
//               <div className="upload-box-container">
//                 <div className={`upload-box ${img ? "no-padding" : "with-padding"}`}>
//                   <label htmlFor="fileUpload" className="upload-label">
//                     {img ? (
//                       <img src={img} alt="Preview" className="image-preview" />
//                     ) : (
//                       <div className="icon-load-container">
//                         <SiCloudinary className="cloudinary-icon" />
//                         <p>Drag & drop or click to upload</p>
//                       </div>
//                     )}
//                     <input
//                       type="file"
//                       id="fileUpload"
//                       accept="image/*"
//                       onChange={handleImageUpload}
//                       className="upload-input"
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>
//             {errors.img && <span id="imgError" className="error-text">{errors.img}</span>}

//             {/* Form Fields */}
//             <div className="bar"></div>

//             <div className="input-container">
//               <label className="label">Full Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className={errors.name ? "input error" : "input"}
//                 aria-describedby="nameError"
//               />
//             </div>
//             {errors.name && <span id="nameError" className="error-text">{errors.name}</span>}

//             <div className="input-container">
//               <label className="label">Email Address</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className={errors.email ? "input error" : "input"}
//                 aria-describedby="emailError"
//               />
//             </div>
//             {errors.email && <span id="emailError" className="error-text">{errors.email}</span>}

//             <SpecialRequestContainer />

//             {/* Navigation Buttons */}
//             <div className="cancel-next-container cancel-nxt-contnr">
//               <button type="button" className="cancel" onClick={onBackStep}>Back</button>

//               {ticketData.ticketType === "regular" ? (
//                 <button
//                   type="button"
//                   className="next second-next"
//                   disabled={isLoading}
//                   onClick={() => {
//                     if (validateForm()) {
//                       setIsLoading(true);
//                       setTimeout(() => {
//                         setTicketGenerated(true);
//                         setIsLoading(false);
//                       }, 1500); // simulate loading
//                     }
//                   }}
//                 >
//                   {isLoading && <span className="spinner"></span>}
//                   {isLoading ? "Processing..." : "Get My Free Ticket"}
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   className="next second-next"
//                   disabled={isLoading}
//                   onClick={() => {
//                     if (ticketData.ticketType === "vip" || ticketData.ticketType === "vvip") {
//                       if (validateForm()) {
//                         setIsLoading(true);
//                         setTimeout(() => {
//                           setTicketGenerated(true);
//                           setIsLoading(false);
//                         }, 1500); // simulate loading
//                       }
//                     } else {
//                       setFreeTicketWarning("Select a Regular ticket to get access.");
//                       setTimeout(() => setFreeTicketWarning(""), 3000);
//                     }
//                   }}
//                 >
//                   {isLoading && <span className="spinner"></span>}
//                   {isLoading ? "Processing..." : "Get My Ticket"}
//                 </button>
//               )}
//             </div>

//             {/* Warning */}
//             {freeTicketWarning && (
//               <p className="warning-text fade-in-out">{freeTicketWarning}</p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [step, setStep] = useState(1);
//   const [ticketData, setTicketData] = useState({ ticketType: "vip", ticketCount: 1 });

//   const handleNextStep = () => {
//     setStep((step) => step + 1);
//   };

//   const handleCancelStep = () => {
//     setTicketData({ ticketType: "vip", ticketCount: 1 });
//     setStep(1);
//   };

//   const handleBackStep = () => {
//     setStep(1);
//   };

//   return (
//     <>
//       {step === 1 && (
//         <TicketSelection
//           onNextStep={handleNextStep}
//           onCancelStep={handleCancelStep}
//           setTicketData={setTicketData}
//         />
//       )}
//       {step === 2 && (
//         <Step2
//           onBackStep={handleBackStep}
//           ticketData={ticketData}
//         />
//       )}
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
