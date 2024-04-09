import React from 'react';
import CountdownTimer from './CountdownTimer';
import './Countdown.css';

export default function Countdown() {
 

  // Create a new Date object for April 25, 2024, at 2:30 PM
// var date = new Date(2024, 3, 9, 17, 29).getTime(); // Note: Months are zero-based, so 3 represents April, and hours are in 24-hour format

var date = new Date(Date.UTC(2024, 3, 9, 13, 0, 0));
  const countDown = date;

  return (
    <CountdownTimer targetDate={countDown} />
  );
}
