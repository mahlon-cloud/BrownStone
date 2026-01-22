// FloorPlanMobile.jsx
'use client';

import { useRef, useState } from "react";
import Hotspot from "./Hotspot";
import ImageSlider from "./ImageSlider";

export default function FloorPlanMobile({ hotspots }) {
  const [activeRoom, setActiveRoom] = useState(null);
  const containerRef = useRef(null);

  return (
    <div className="mobile-map-root">
      <div className="mobile-map-inner" ref={containerRef}>
        <img src="/plan4.jpg" className="mobile-plan-image" />

        {hotspots.map((spot) => (
          <Hotspot
            key={spot.id}
            spot={spot}
            onClick={setActiveRoom}
          />
        ))}
      </div>

      {activeRoom && (
        <ImageSlider
          images={activeRoom.images}
          title={activeRoom.name}
          onClose={() => setActiveRoom(null)}
        />
      )}
    </div>
  );
}
