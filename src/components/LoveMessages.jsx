import { useState } from 'react';
import { config } from '../config';
import { Heart } from 'lucide-react';

const LoveMessages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMessage = () => {
    setActiveIndex((prev) => (prev + 1) % config.loveMessages.length);
  };

  return (
    <div className="romantic-card" style={{ height: '100%' }}>
      <h3 className="section-title font-script" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
        For You
      </h3>
      
      <div 
        className="love-message-card" 
        style={{ minHeight: '150px', background: 'rgba(255, 179, 193, 0.2)', borderRadius: '12px' }}
        onClick={nextMessage}
      >
        <div style={{ padding: '2rem' }}>
          "{config.loveMessages[activeIndex]}"
        </div>
        
        <div className="message-reveal">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Heart size={40} fill="white" className="animate-heartbeat" style={{ marginBottom: '1rem' }} />
            <span className="font-script">Tap to reveal</span>
          </div>
        </div>
      </div>
      
      <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
        Tap the card for more messages
      </p>
    </div>
  );
};

export default LoveMessages;
