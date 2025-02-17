import { useState } from "react";
import "./App.css";

function App() {
  const [ticket, setTicket] = useState(0);
  const [message, setMessage] = useState("");

  const getTicket = () => {
    let ticketNumber = Math.floor((Math.random() * 900) + 99);
    setTicket(ticketNumber);
    checkWinCondition(ticketNumber);
  };

  const checkWinCondition = (ticketNumber) => {
    const ticketSum = ticketNumber
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, current) => acc + current, 0);

    if (ticketSum === 15) {
      setMessage("You win! The sum of the digits is 15!");
    } else {
      setMessage("Try again! The sum of the digits is not 15.");
    }
  };

  return (
    <>
      <div>
        <h3>{message}</h3>
        <h1>Lottery Ticket</h1>
        <p>Ticket No: {ticket} </p>
        <button onClick={getTicket}>Get new Ticket</button>
      </div>
    </>
  );
}

export default App;
