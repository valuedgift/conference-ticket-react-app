// import React from "react";
import { PiTicketDuotone } from "react-icons/pi";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <>
      <nav className="header">
        <ul className="header-list">
          <li className="tics-container">
            <Link to="/" className="tics-logo-link">
              <PiTicketDuotone className="tics-logo" />
              <span>ticz</span>
            </Link>
          </li>

          <li className="header-events-container">
            <Link to="/" className="nav-link">Events</Link>
            <Link to="/my-tickets" className="nav-link">My Tickets</Link>
            <Link to="/about" className="nav-link">About Project</Link>
          </li>

          <li className="header-ticket-container">
            <Link to="/my-tickets" className="icon-button">
              My Tickets <MdArrowRightAlt className="arrow-icon" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* About Content */}
      <main className="about-container">
        <h1>Event Ticket Booking UI Open Source Practice Project</h1>
        <section className="about-section">
          <h2>Overview</h2>
          <p>
            This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.
          </p>

          <h2>Flow & Features</h2>
          <ol>
            <li><strong>Ticket Selection</strong>
              <ul>
                <li>Users can browse available tickets (Free & Paid).</li>
                <li>Ticket options are displayed in a list or card view.</li>
                <li>For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee details.</li>
                <li>For Paid Tickets → Clicking “Purchase Ticket” would ideally open a payment modal.</li>
              </ul>
            </li>
            <li><strong>Attendee Details Form</strong>
              <ul>
                <li>Users input their Name, Email, and optional Phone Number.</li>
                <li>Profile picture upload option with preview functionality.</li>
                <li>Ticket summary is visible to ensure users review their details before submission.</li>
              </ul>
            </li>
            <li><strong>Payment or Success Page</strong>
              <ul>
                <li>If the ticket is free, the user is taken directly to the Ticket Confirmation Page.</li>
                <li>If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.</li>
                <li>Upon successful booking, users should receive:
                  <ul>
                    <li>A visual ticket preview with a unique QR Code.</li>
                    <li>An option to download the ticket as PDF or save it to their device.</li>
                    <li>An email confirmation containing ticket details.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>

          <h2>How to Build This</h2>
          <p>This UI can be implemented using:</p>
          <h3>Frontend (Next.js or React)</h3>
          <ul>
            <li><strong>Component Breakdown:</strong> TicketCard.tsx, AttendeeForm.tsx, PaymentModal.tsx, SuccessScreen.tsx</li>
            <li>State Management: React's Context API, Zustand, or Redux (if needed).</li>
            <li>File Handling: Users should be able to upload images using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL().</li>
          </ul>

          <h3>Backend (Optional)</h3>
          <ul>
            <li>If persistence is required, a backend can be built using Node.js & Express or Firebase Functions.</li>
            <li>Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records.</li>
          </ul>

          <h3>Payment Integration</h3>
          <ul>
            <li>Stripe Checkout (for international transactions).</li>
            <li>Paystack or Flutterwave (for African users).</li>
          </ul>

          <h2>What You'll Learn</h2>
          <ul>
            <li>File handling & validation (profile picture uploads).</li>
            <li>Dynamic UI updates based on ticket selection.</li>
            <li>Persisting bookings using local state or a backend.</li>
            <li>Integrating payment gateways for ticket purchases.</li>
            <li>Generating & validating QR Codes for event check-in (Advanced).</li>
          </ul>

          <p><strong>Need Help? Reach Out!</strong></p>
        </section>
      </main>
    </>
  );
};

export default AboutProject;