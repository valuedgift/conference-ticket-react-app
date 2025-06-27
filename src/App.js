// File: src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TicketSelection from "./components/TicketSelection";
import Step2 from "./components/Step2";
// import Events from "./pages/Events";
import MyTickets from "./pages/MyTickets";
import AboutProject from "./pages/AboutProject";

import './index.css';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState({ ticketType: "vip", ticketCount: 1 });

  const handleNextStep = () => setStep(step + 1);
  const handleBackStep = () => setStep(1);
  const handleCancelStep = () => {
    setTicketData({ ticketType: "vip", ticketCount: 1 });
    setStep(1);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            step === 1 ? (
              <TicketSelection
                onNextStep={handleNextStep}
                onCancelStep={handleCancelStep}
                setTicketData={setTicketData}
              />
            ) : (
              <Step2 onBackStep={handleBackStep} ticketData={ticketData} />
            )
          }
        />
        {/* <Route path="/events" element={<Events />} /> */}
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/about" element={<AboutProject />} />
      </Routes>
    </>
  );
};

export default App;
