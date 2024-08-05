import { useState, useEffect } from 'react';

export default function Countdown() {
  const [ time, setTime ] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if(seconds > 0) {
          return { ...prevTime, seconds: seconds - 1}
        } else if(minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59}
        } else if(hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59};
        } else if(days > 0) {
          return { days: days - 1, hours: 24, minutes: 59, seconds: 59};
        } else {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0};
        }
      });
    }, 1000)

    return () => clearInterval(timer);
  }, [])


  return (
    <div className="countdown flex items-start gap-9 font-bold ml-0 md:ml-20 flex-grow">
      {Object.entries(time).map(([unit, value]) => (
        <div key={unit} className={`${unit} 
          relative 
          text-4xl 
          before:content-['${(unit).replace(unit.charAt(0), unit.charAt(0).toUpperCase())}'] 
          before:text-xs
          before:font-medium 
          before:absolute 
          before:-top-4
          ${unit !== 'seconds' && "after:content-[':']"}
          after:text-primaryRed
          after:font-medium
          after:absolute
          after:-top-1
          after:-right-6`
        }>
          {String(value).padStart(2, '0')}
        </div>
      ))}
    </div>
  )
};