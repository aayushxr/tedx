import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageModalProps {
  images: any[];
  selectedImage: number;
  onClose: () => void;
  onNavigate: (id: number) => void;
}

export default function ImageModal({ images, selectedImage, onClose, onNavigate }: ImageModalProps) {
  const currentIndex = images.findIndex((img) => img.id === selectedImage);
  const currentImage = images[currentIndex];

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(images[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(images[nextIndex].id);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
      >
        <X size={24} />
      </button>
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
      >
        <ChevronRight size={48} />
      </button>
      <div className="relative max-w-4xl max-h-full">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
}

