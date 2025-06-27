import { useEffect, useState } from "react";
import Ticket from "../components/Ticket";
import Header from "../components/Header";
import "./MyTickets.css";

const TICKETS_PER_LOAD = 4;

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [visibleCount, setVisibleCount] = useState(TICKETS_PER_LOAD);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("myTickets")) || [];
    setTickets(storedTickets);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + TICKETS_PER_LOAD);
  };

  const handleDelete = (indexToDelete) => {
    const updatedTickets = tickets.filter((_, index) => index !== indexToDelete);
    setTickets(updatedTickets);
    localStorage.setItem("myTickets", JSON.stringify(updatedTickets));
  };

  return (
    <div className="main-section">
      <Header />
      <div className="my-tickets-page">
        <h2 className="my-tickets-heading">My Tickets</h2>
        {tickets.length === 0 ? (
          <p className="no-tickets-message">
            No tickets found. Book one from the homepage.
          </p>
        ) : (
          <>
            <div className="my-tickets-grid">
              {tickets.slice(0, visibleCount).map((ticket, index) => (
                <div key={index} className="my-ticket-wrapper">
                  <Ticket
                    name={ticket.name}
                    email={ticket.email}
                    ticketData={ticket.ticketData}
                    img={ticket.img}
                    fromMyTicketsPage={true}
                  />
                  <button className="delete-button" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
            {visibleCount < tickets.length && (
              <div className="load-more-container">
                <button className="load-more-button" onClick={handleLoadMore}>
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyTickets;
