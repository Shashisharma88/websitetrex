import React from 'react';
import CountdownTimer from './CountdownTimer';
import './Countdown.css';

export default function Countdown() {
 

  // Create a new Date object for April 25, 2024, at 2:30 PM
var date = new Date(2024, 3, 2, 16, 24).getTime(); // Note: Months are zero-based, so 3 represents April, and hours are in 24-hour format


  const countDown = date;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h2>Expires after 7 days!!!</h2>
      <CountdownTimer targetDate={countDown} />
    </div>
  );
}
