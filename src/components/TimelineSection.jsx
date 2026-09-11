import { config } from '../config';

const TimelineSection = ({ currentDaysLeft }) => {
  return (
    <div className="romantic-card" style={{ height: '100%' }}>
      <h3 className="section-title font-script" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
        The Journey
      </h3>
      <div className="timeline-container">
        {config.timeline.map((event, index) => {
          // A simple check: if the event date is less than or equal to current date, it's active
          const isPassed = new Date(event.date) <= new Date();
          
          return (
            <div key={index} className={`timeline-item ${isPassed ? 'active' : ''}`}>
              <div className="text-sm text-gray-500" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
              </div>
              <div style={{ fontWeight: isPassed ? '600' : '400' }}>
                {event.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineSection;
