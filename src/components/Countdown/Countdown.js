import React from 'react';
import CountdownTimer from './CountdownTimer';
import './Countdown.css';

export default function Countdown() {
 

  // Create a new Date object for April 25, 2024, at 2:30 PM
var date = new Date(2024, 3, 9, 2, 24).getTime(); // Note: Months are zero-based, so 3 represents April, and hours are in 24-hour format


  const countDown = date;

  return (
    <div className='countdown-tab'>
      <h1 style={{color:"#fff"}}>Launching Soon...</h1>
      
      <CountdownTimer targetDate={countDown} />
      <h2 style={{fontFamily:"Pixelify Sans"}}>Countdown Begins...</h2>
    </div>
  );
}
