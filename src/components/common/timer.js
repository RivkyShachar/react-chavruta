import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ myTime }) => {
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const calculateTimeDifference = () => {
      const currentTime = new Date().getTime();
      const targetTime = new Date(myTime).getTime();
      const difference = targetTime - currentTime;
      setTimeDifference(difference);
    };

    // Calculate initial time difference
    calculateTimeDifference();

    // Update time difference every second
    const intervalId = setInterval(calculateTimeDifference, 1000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [myTime]);

  // Format the time difference into hours, minutes, and seconds
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return (
    <div>
      <p>
        Time left: {hours} hours, {minutes} minutes, {seconds} seconds
      </p>
    </div>
  );
};

export default CountdownTimer;
