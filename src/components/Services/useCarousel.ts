import { useState, useEffect, useCallback, useRef } from 'react';

interface CardPosition {
  scale: number;
  translateZ: number;
  translateY: number;
  rotateY: number;
  opacity: number;
}

export const useCarousel = (totalItems: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  const getCardPosition = useCallback((position: number): CardPosition => {
    // Calculate relative position from current index
    const relativePos = (position - currentIndex + totalItems) % totalItems;
    
    // Define positions based on specifications
    switch (relativePos) {
      case 0: // Center card
        return {
          scale: 1,
          translateZ: 300,
          translateY: 0,
          rotateY: 0,
          opacity: 1
        };
      case 1: // First right pair
      case totalItems - 1: // First left pair
        return {
          scale: 0.8,
          translateZ: 200,
          translateY: 20,
          rotateY: relativePos === 1 ? 20 : -20,
          opacity: 0.9
        };
      case 2: // Second right pair
      case totalItems - 2: // Second left pair
        return {
          scale: 0.6,
          translateZ: 100,
          translateY: 40,
          rotateY: relativePos === 2 ? 30 : -30,
          opacity: 0.85
        };
      case 3: // Third right pair
      case totalItems - 3: // Third left pair
        return {
          scale: 0.4,
          translateZ: 0,
          translateY: 60,
          rotateY: relativePos === 3 ? 40 : -40,
          opacity: 0.8
        };
      case 4: // Back center
        return {
          scale: 0.3,
          translateZ: -100,
          translateY: -30,
          rotateY: 180,
          opacity: 0.7
        };
      default:
        return {
          scale: 0.2,
          translateZ: -200,
          translateY: 0,
          rotateY: 0,
          opacity: 0
        };
    }
  }, [currentIndex, totalItems]);

  const calculateCardStyle = useCallback((index: number) => {
    const position = getCardPosition(index);
    
    return {
      transform: `
        translateZ(${position.translateZ}px)
        translateY(${position.translateY}px)
        rotateY(${position.rotateY}deg)
        scale(${position.scale})
      `,
      opacity: position.opacity,
      zIndex: Math.round(position.scale * 100),
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: `0 ${10 * position.scale}px ${20 * position.scale}px rgba(0,0,0,${0.3 * position.scale})`
    };
  }, [getCardPosition]);

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