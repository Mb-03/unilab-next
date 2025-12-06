"use client"

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialSeconds: number; 
}

const CountdownTimer = ({ initialSeconds }: CountdownTimerProps) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  
  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  
  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div>
      {format(hours)}:{format(minutes)}:{format(seconds)}
    </div>
  );
};

export default CountdownTimer;
