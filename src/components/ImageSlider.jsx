'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CustomDot({ onClick, active, index }) {
  return (
    <button
      className={`custom-dot ${active ? 'active' : ''}`}
      onClick={onClick}
      aria-label={`Go to slide ${index + 1}`}
    />
  );
}

export default function ImageSlider({ images, title, onClose }) {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 0 }, items: 1 },
  };

  return (
    <div className="slider-overlay">
      <div className="slider-box">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2 className="slider-title">{title}</h2>

        <div style={{ paddingBottom: '40px', position: 'relative' }}>
          <Carousel
            responsive={responsive}
            arrows
            infinite
            draggable
            swipeable
            keyBoardControl
            pauseOnHover
            showDots
            renderDotsOutside
            customDot={<CustomDot />}
            containerClass="carousel-container"
            itemClass="carousel-slide"
            slidesToSlide={1}
          >
            {images.map((img, i) => (
              <div key={i} className="carousel-slide">
                <img src={img} alt={`slide-${i}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
