import React from 'react';

const GridBackground = () => {
  const backgroundImage = `
    linear-gradient(to right, transparent 19.9%, #CBD5E1 19.9%, #CBD5E1 20.1%, transparent 20.1%, transparent 39.9%, #CBD5E1 39.9%, #CBD5E1 40.1%, transparent 40.1%, transparent 59.9%, #CBD5E1 59.9%, #CBD5E1 60.1%, transparent 60.1%, transparent 79.9%, #CBD5E1 79.9%, #CBD5E1 80.1%, transparent 80.1%),
    repeating-linear-gradient(to bottom, transparent 0px, transparent 47.5px, #CBD5E1 47.5px, #CBD5E1 48.5px),
    radial-gradient(circle, #94A3B8 0%, #94A3B8 3px, transparent 3px),
    radial-gradient(circle, #94A3B8 0%, #94A3B8 3px, transparent 3px),
    radial-gradient(circle, #94A3B8 0%, #94A3B8 3px, transparent 3px),
    radial-gradient(circle, #94A3B8 0%, #94A3B8 3px, transparent 3px)
  `;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage,
        backgroundSize: '100% 100%, 100% 48px, 25% 48px, 25% 48px, 25% 48px, 25% 48px',
        backgroundPosition: '0 0, 0 0, 20% 0, 40% 0, 60% 0, 80% 0',
        backgroundRepeat: 'no-repeat, repeat, repeat, repeat, repeat, repeat',
      }}
    />
  );
};

export default GridBackground;