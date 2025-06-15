import { useState, useEffect, useCallback } from 'react';
import { useViewportSize } from './useViewportSize';
import { useCarouselPosition } from './useCarouselPosition';

export const useCarousel = (totalItems: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const { width: viewportWidth } = useViewportSize();
  const getCardPosition = useCarouselPosition(viewportWidth);

  const calculateCardStyle = useCallback((index: number) => {
    const relativePos = ((index - currentIndex + totalItems) % totalItems);
    const normalizedPos = relativePos > totalItems / 2 ? relativePos - totalItems : relativePos;
    const position = getCardPosition(normalizedPos, totalItems);
    
    return {
      transform: `
        translateX(${position.translateX}px)
        translateZ(${position.translateZ}px)
        rotateY(${position.rotateY}deg)
        scale(${position.scale})
      `,
      opacity: position.opacity,
      zIndex: Math.round(position.scale * 100),
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: `0 ${10 * position.scale}px ${20 * position.scale}px rgba(0,0,0,${0.3 * position.scale})`
    };
  }, [currentIndex, totalItems, getCardPosition]);

  const rotateToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!isRotating) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isRotating, totalItems]);

  return {
    currentIndex,
    isRotating,
    setIsRotating,
    calculateCardStyle,
    rotateToIndex,
  };
};