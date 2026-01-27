'use client';

export default function HotspotMobile({ spot, onClick }) {
  return (
    <button
      className="hotspot neon-pulse hotspot-mobile"
      style={{
        position: "absolute",    
        top: spot.y,
        left: spot.x,
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
      onClick={() => onClick(spot)}
      title={spot.name}
    >
      {spot.name}
    </button>
  );
}
