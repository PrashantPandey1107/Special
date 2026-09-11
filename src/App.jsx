import { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import CountdownDashboard from './components/CountdownDashboard';
import BirthdayCelebration from './components/BirthdayCelebration';
import { config } from './config';

function App() {
  const [isBirthday, setIsBirthday] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(config.targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (newTimeLeft.total <= 0) {
        setIsBirthday(true);
        clearInterval(timer);
      }
    }, 1000);

    // Initial check
    if (calculateTimeLeft().total <= 0) {
      setIsBirthday(true);
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-wrapper">
      <FloatingHearts />
      {isBirthday ? (
        <BirthdayCelebration />
      ) : (
        <CountdownDashboard timeLeft={timeLeft} />
      )}
    </div>
  );
}

export default App;
