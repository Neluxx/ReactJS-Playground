import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const Pomodoro = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25);
  const [counter, setCounter] = useState(0);

  const calculateSecondsToMinutes = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft - minutes * 60;
    return seconds;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0 && isRunning) {
        setTimeLeft(timeLeft - 1);
      } else if (timeLeft <= 0 && isRunning) {
        setIsRunning(false);
        setCounter(counter + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center">
      <br />
      <h1>Pomodoro</h1>
      <h2>{counter} Pomodori</h2>
      <h2>{timeLeft} Seconds</h2>
      <h2>{() => calculateSecondsToMinutes()}</h2>
      <br />
      <ButtonGroup>
        <Button variant="success" onClick={() => setIsRunning(true)}>
          Start
        </Button>
        <Button variant="danger" onClick={() => setIsRunning(false)}>
          Stop
        </Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup>
        <Button variant="light" onClick={() => setTimeLeft(5)}>
          5
        </Button>
        <Button variant="light" onClick={() => setTimeLeft(10)}>
          10
        </Button>
        <Button variant="light" onClick={() => setTimeLeft(20)}>
          20
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Pomodoro;
