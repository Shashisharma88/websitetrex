import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../../hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>$TX20 is LIVE NOW!</span>
      
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
       <p className='dot'>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p className='dot'>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p className='dot'>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds >= 0) {

    return (    <div className='countdown-tab'>
     
    <p >Launching Soon</p>
    <ShowCounter
    days={days}
    hours={hours}
    minutes={minutes}
    seconds={seconds}
  />
    
  </div> );
  } else {
    return (
     <ExpiredNotice/>
    );
  }
};


export default CountdownTimer;
