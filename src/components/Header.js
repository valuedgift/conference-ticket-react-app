// File: src/components/Header.jsx
import { PiTicketDuotone } from "react-icons/pi";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import "../index.css";
// import "../App.css";

const Header = () => (
  <nav className="main-header">
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
);

export default Header;
