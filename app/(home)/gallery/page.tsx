/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { images } from '@/data';

interface Image {
    id: number;
    url: string;
    thumbnail: string;
    alt: string;
}

const ImageGallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleImageClick = useCallback((image: Image, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    }, []);

    const navigateImage = useCallback((direction: 'next' | 'prev') => {
        if (!selectedImage) return;

        const newIndex = direction === 'next'
            ? (currentIndex + 1) % images.length
            : (currentIndex - 1 + images.length) % images.length;

        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    }, [currentIndex, images, selectedImage]);

    const FullscreenViewer = useMemo(() => {
        if (!selectedImage) return null;

        return (
            <div
                className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
                onClick={(e: React.MouseEvent) =>
                    e.target === e.currentTarget && setSelectedImage(null)
                }
            >
                <button
                    className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-2"
                    onClick={() => setSelectedImage(null)}
                >
                    <X size={24} />
                </button>

                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-gray-700 rounded-full p-2"
                    onClick={() => navigateImage('prev')}
                >
                    <ChevronLeft size={32} />
                </button>

                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-gray-700 rounded-full p-2"
                    onClick={() => navigateImage('next')}
                >
                    <ChevronRight size={32} />
                </button>

                <img
                    src={selectedImage.url}
                    alt={selectedImage.alt}
                    className="max-w-[90%] max-h-[90%] object-contain"
                />
            </div>
        );
    }, [selectedImage, navigateImage]);

    return (
        <main className="flex-1 w-[95%] flex-col">
            <div className="flex items-center justify-center gap-x-5 max-w-8xl">
                <div className='py-8 md:py-12'>
                    <h1 className="text-5xl gap-x-3 relative z-50 text-left font-bold leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                        Image <span className="text-red-600 inline-flex"> Gallery</span>
                    </h1>
                </div>
            </div>
            <div className="grid w-full grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 overflow-y-auto">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className="aspect-square overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick(image, index)}
                    >
                        <img
                            src={image.thumbnail}
                            alt={image.alt}
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            {FullscreenViewer}

        </main>
    );
};

export default ImageGallery;