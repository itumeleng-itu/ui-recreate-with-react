import React from 'react';
import GalleryItem from './GalleryItem';

interface GalleryItemData {
  icon: string;
  bgColor: string;
  onClick: () => void;
}

interface GallerySectionProps {
  items: GalleryItemData[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  return (
    <section className="gallery-section">
      {items.map((item, index) => (
        <GalleryItem key={index} {...item} />
      ))}
    </section>
  );
};

export default GallerySection;
