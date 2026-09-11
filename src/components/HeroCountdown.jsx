import { Heart } from 'lucide-react';

const HeroCountdown = ({ timeLeft, dailyMessage }) => {
  return (
    <>
      <h2 className="font-script daily-message">
        {dailyMessage}
      </h2>
      
      <div className="countdown-box pulse-glow-box">
        <div className="time-unit">
          <span className="time-value">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="time-label">Days</span>
        </div>
        <span className="colon">:</span>
        <div className="time-unit">
          <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="time-label">Hours</span>
        </div>
        <span className="colon">:</span>
        <div className="time-unit">
          <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="time-label">Minutes</span>
        </div>
        <span className="colon">:</span>
        <div className="time-unit">
          <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Heart className="animate-heartbeat" color="var(--color-heart)" size={32} fill="var(--color-heart)" />
      </div>
    </>
  );
};

export default HeroCountdown;
