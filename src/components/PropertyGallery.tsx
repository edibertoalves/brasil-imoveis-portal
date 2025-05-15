
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="relative h-96 overflow-hidden rounded-lg">
        <img
          src={images[currentImage]}
          alt={`${title} - Imagem ${currentImage + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
      
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={20} />
      </button>
      
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Ver imagem ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
        {currentImage + 1} / {images.length}
      </div>
    </div>
  );
};

export default PropertyGallery;
