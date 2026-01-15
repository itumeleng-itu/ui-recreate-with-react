

type GalleryItemProps = {
  photo: string;
  alt?: string;
  onClick?: () => void;
}

export default function MyGallery({ photo, alt = "Gallery image", onClick }: GalleryItemProps) {
  return (
    <div 
      className="galleryitem" 
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      aria-label={alt}
    />
  );
}
