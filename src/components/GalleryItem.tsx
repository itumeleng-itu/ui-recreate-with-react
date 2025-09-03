//import React from 'react';

type GalleryItemProps = {
  photo: string;
  onClick: () => void;
}

export default function MyGallery({photo, onClick}: GalleryItemProps) {
  return (
    <div 
      className="gallery-item" 
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onClick={onClick}
    />
  );
}
