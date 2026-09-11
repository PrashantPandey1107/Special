import { config } from '../config';

const PhotoGallery = () => {
  return (
    <section>
      <h3 className="section-title font-script text-center" style={{ fontSize: '2.5rem' }}>
        Our Memories
      </h3>
      <div className="photo-grid">
        {config.photos.map((url, index) => (
          <div key={index} className="polaroid">
            <img src={url} alt={`Memory ${index + 1}`} />
            <div className="font-script" style={{ textAlign: 'center', marginTop: '15px', fontSize: '1.2rem', color: '#555' }}>
              Special Moments
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
