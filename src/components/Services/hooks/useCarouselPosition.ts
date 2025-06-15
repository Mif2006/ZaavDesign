import { useCallback } from 'react';

interface CardPosition {
  scale: number;
  translateX: number;
  translateZ: number;
  rotateY: number;
  opacity: number;
}

export const useCarouselPosition = (viewportWidth: number) => {
  const getCardPosition = useCallback((relativePos: number, totalItems: number): CardPosition => {
    const baseSpacing = viewportWidth * 0.2; // 20% of viewport width
    
    switch (relativePos) {
      case 0: // Center
        return {
          scale: 1,
          translateX: 0,
          translateZ: 200,
          rotateY: 0,
          opacity: 1
        };
      case 1: // First right
        return {
          scale: 0.8,
          translateX: baseSpacing,
          translateZ: 100,
          rotateY: 20,
          opacity: 0.9
        };
      case -1: // First left
        return {
          scale: 0.8,
          translateX: -baseSpacing,
          translateZ: 100,
          rotateY: -20,
          opacity: 0.9
        };
      case 2: // Second right
        return {
          scale: 0.6,
          translateX: baseSpacing * 1.8,
          translateZ: 0,
          rotateY: 30,
          opacity: 0.8
        };
      case -2: // Second left
        return {
          scale: 0.6,
          translateX: -baseSpacing * 1.8,
          translateZ: 0,
          rotateY: -30,
          opacity: 0.8
        };
      default:
        return {
          scale: 0.4,
          translateX: relativePos > 0 ? baseSpacing * 2.5 : -baseSpacing * 2.5,
          translateZ: -100,
          rotateY: relativePos > 0 ? 40 : -40,
          opacity: 0.6
        };
    }
  }, [viewportWidth]);

  return getCardPosition;
};