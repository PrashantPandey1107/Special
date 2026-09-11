import { config } from '../config';
import HeroCountdown from './HeroCountdown';
import MemorySection from './MemorySection';
import TimelineSection from './TimelineSection';
import LoveMessages from './LoveMessages';
import PhotoGallery from './PhotoGallery';
import './CountdownDashboard.css';

const CountdownDashboard = ({ timeLeft }) => {
  // Determine which daily message to show
  const activeMessage = config.dailyMessages
    .sort((a, b) => a.days - b.days)
    .find(m => timeLeft.days <= m.days)?.message || config.defaultMessage;

  return (
    <div className="dashboard-container animate-fade-in">
      <div className="container">
        
        {/* Hero Section */}
        <section className="hero-section flex-center">
          <HeroCountdown timeLeft={timeLeft} dailyMessage={activeMessage} />
        </section>

        {/* Memory Section */}
        <MemorySection />

        {/* Timeline & Interactive Grid */}
        <section className="grid-cols-2">
          <TimelineSection currentDaysLeft={timeLeft.days} />
          <LoveMessages />
        </section>

        {/* Photo Gallery */}
        <PhotoGallery />

        {/* Footer */}
        <footer className="footer-message">
          <p className="font-script">Every single one. ❤️</p>
        </footer>

      </div>
    </div>
  );
};

export default CountdownDashboard;
