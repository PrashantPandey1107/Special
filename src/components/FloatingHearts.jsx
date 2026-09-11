import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate hearts periodically
    const interval = setInterval(() => {
      setHearts(prev => {
        // Keep a maximum of 15 hearts at a time to prevent performance issues
        const newHearts = [...prev].filter(h => h.id > Date.now() - 10000);
        if (newHearts.length < 15) {
          newHearts.push({
            id: Date.now(),
            left: Math.random() * 100, // random position 0-100%
            size: Math.random() * 1.5 + 0.5, // random size 0.5 - 2
            duration: Math.random() * 5 + 5, // random duration 5-10s
          });
        }
        return newHearts;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts-container">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            transform: `scale(${heart.size})`
          }}
        >
          <Heart fill="currentColor" size={24} />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
