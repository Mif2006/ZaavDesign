// PointCard.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { X, Zap, Radio } from 'lucide-react';

const PointCard = ({
  point,
  index,
  onClose,
  onNavigate,
  getPrevPoint,
  getNextPoint,
  points,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.set(cardRef.current, {
        opacity: 0,
        scale: 0.8,
        transformOrigin: 'center center',
      });

      gsap.to(cardRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
      });
    }
  }, []);

  const handleClose = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };

  const prevIndex = getPrevPoint(index);
  const nextIndex = getNextPoint(index);
  const PrevIcon = points[prevIndex].Icon;
  const NextIcon = points[nextIndex].Icon;

  return (
    <div
      ref={cardRef}
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[340px] bg-cover bg-center"
      style={{ marginTop: '-40px' }}
    >
      <div
        className="relative backdrop-blur-xl bg-cover bg-center rounded-2xl py-12 p-6"
        style={{ backgroundImage: `url(${point.image})` }}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>

        <div className="inline-block px-3 py-1 rounded-full bg-white/50 text-xs font-medium mb-4">
          COMPLETE
        </div>
        <div className="text-gray-400 text-sm mb-6">Feb 2024</div>
        <h2 className="text-xl font-light text-white mb-2">{point.title}</h2>
        <p className="text-gray-400 text-sm mb-6">{point.description}</p>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Energy Level
            </span>
            <span className="text-sm text-white">{point.status}%</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ width: `${point.status}%` }}
            ></div>
          </div>
        </div>

        <div>
          <h3 className="text-sm text-gray-400 flex items-center gap-2 mb-3">
            <Radio className="w-4 h-4" /> CONNECTED NODES
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => onNavigate(prevIndex)}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <PrevIcon className="w-4 h-4" />
              ← {points[prevIndex].title}
            </button>
            <button
              onClick={() => onNavigate(nextIndex)}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <NextIcon className="w-4 h-4" />
              {points[nextIndex].title} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointCard;
