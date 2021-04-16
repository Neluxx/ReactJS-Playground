import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  const handleChange = (event) => {
    setTimeLeft(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0 && isRunning) {
        console.log("The timer is running!");
        setTimeLeft(timeLeft - 1);
      } else if (timeLeft <= 0) {
        alert("The timer has run out!");
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(5);
  };

  return (
    <div className="text-center">
      <br />
      <h1>Timer</h1>
      <h2>{timeLeft} Seconds</h2>
      <br />
      <Form>
        <Form.Group>
          <Form.Control
            id="slider"
            className="slider w-25 mx-auto"
            type="range"
            min="1"
            max="60"
            step="1"
            value={timeLeft}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Set how many seconds the timer should run.
          </Form.Text>
        </Form.Group>
        <ButtonGroup>
          <Button variant="danger" onClick={() => setIsRunning(false)}>
            Stop
          </Button>
          <Button variant="warning" onClick={resetTimer}>
            Reset
          </Button>
          <Button variant="success" onClick={() => setIsRunning(true)}>
            Start
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}

export default Timer;
