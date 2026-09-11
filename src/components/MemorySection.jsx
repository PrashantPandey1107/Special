import { config } from '../config';

const MemorySection = () => {
  return (
    <section className="memory-section" style={{ padding: '2rem 0' }}>
      <div className="memory-note">
        <h3 className="font-script memory-title">{config.memoryStory.title}</h3>
        <p className="font-script memory-text">{config.memoryStory.text}</p>
      </div>
    </section>
  );
};

export default MemorySection;
