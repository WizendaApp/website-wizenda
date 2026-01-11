import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CarouselProps {
  images: Array<{ url: string; alt: string; label: string }>;
}

export function Carousel({ images }: CarouselProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const getImagePosition = (index: number) => {
    const diff = (index - currentIndex + images.length) % images.length;
    
    if (diff === 0) {
      return 'z-30 scale-100 translate-x-0 opacity-100';
    } else if (diff === 1) {
      return 'z-10 scale-90 translate-x-[40%] opacity-70';
    } else {
      return 'z-20 scale-90 -translate-x-[40%] opacity-70';
    }
  };

  return (
    <div className="relative">
      <div className="relative h-97 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out w-[305px] h-105 rounded-2xl overflow-hidden ${getImagePosition(index)}`}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                {image.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-gray-800' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="ml-4 bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-gray-800" fill="currentColor" />
          ) : (
            <Play className="w-5 h-5 text-gray-800" fill="currentColor" />
          )}
        </button>
      </div>
    </div>
  );
}
