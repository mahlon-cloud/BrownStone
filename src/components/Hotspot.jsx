'use client';

export default function Hotspot({ spot, onClick }) {
  return (
    <button
      className="hotspot neon-pulse"
      style={{
        position: "absolute",    
        top: spot.y,
        left: spot.x,
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
      onClick={() => onClick(spot)}
    >
      {spot.name}
    </button>
  );
}
