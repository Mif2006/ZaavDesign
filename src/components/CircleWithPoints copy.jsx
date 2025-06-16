import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CirclePoint } from './CirclePoint';
import { Radio, X, Zap } from 'lucide-react';
import { points } from '../constants';

const CircleWithPoints = () => {
  const circleRef = useRef(null);
  const rotationRef = useRef(null);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

 
  const getPrevPoint = (current) => (current - 1 + points.length) % points.length;
  const getNextPoint = (current) => (current + 1) % points.length;

  useEffect(() => {
    if (!circleRef.current) return;

    rotationRef.current = gsap.to(circleRef.current, {
      rotation: 360,
      duration: 60,
      ease: 'linear',
      repeat: -1,
      transformOrigin: 'center center',
    });

    return () => {
      rotationRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectedPoint !== null &&
        cardRef.current &&
        !cardRef.current.contains(event.target) &&
        !event.target.closest('.circle-point')
      ) {
        setShowCard(false);
        setSelectedPoint(null);

        if (circleRef.current) {
          rotationRef.current = gsap.to(circleRef.current, {
            rotation: 360,
            duration: 60,
            ease: 'linear',
            repeat: -1,
            transformOrigin: 'center center',
          });
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedPoint]);

  const handlePointClick = (index) => {
    if (!circleRef.current || !rotationRef.current) return;

    setShowCard(false);
    setSelectedPoint(index);

    rotationRef.current.kill();

    const currentRotation = gsap.getProperty(circleRef.current, 'rotation');
    const targetAngle = (-index * (360 / points.length)) - 90;

    let delta = targetAngle - (currentRotation % 360);
    if (Math.abs(delta) > 180) {
      delta = delta > 0 ? delta - 360 : delta + 360;
    }

    gsap.to(circleRef.current, {
      rotation: currentRotation + delta,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => setShowCard(true),
    });
  };

  useEffect(() => {
    if (showCard && cardRef.current) {
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
  }, [showCard]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className={`absolute z-10 text-center pointer-events-none transition-opacity duration-500 ${selectedPoint !== null ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-wider">
          CELESTIAL
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base font-light tracking-widest">
          INTERFACE
        </p>
      </div>

      <div
        ref={circleRef}
        className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[540px] md:h-[540px] lg:w-[640px] lg:h-[640px]"
      >
        <div className="absolute inset-0 rounded-full border border-gray-400 opacity-60"></div>
        <div className="absolute inset-1 rounded-full border border-gray-300 opacity-30 blur-[1px]"></div>
        <div className="absolute -inset-1 rounded-full border border-gray-200 opacity-10 blur-[2px]"></div>

        {points.map((point, index) => {
          const angle = (index * (360 / points.length)) * (Math.PI / 180);
          const radius = 50;

          return (
            <CirclePoint
              key={index}
              className="circle-point"
              angle={angle}
              radius={radius}
              Icon={point.Icon}
              color={point.color}
              onClick={() => handlePointClick(index)}
            />
          );
        })}
      </div>

      {selectedPoint !== null && showCard && (
        <div
          ref={cardRef}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[340px] bg-cover bg-center"
          style={{ marginTop: '-40px', transformOrigin: 'center center',  }}
        >
          <div className="relative backdrop-blur-xl  bg-cover bg-center rounded-2xl py-12 p-6" style={{ backgroundImage: `url(${points[selectedPoint].image})`}}>
            <button
              onClick={() => {
                gsap.to(cardRef.current, {
                  opacity: 0,
                  scale: 0.8,
                  duration: 0.3,
                  ease: 'power2.in',
                  onComplete: () => {
                    setShowCard(false);
                    setSelectedPoint(null);
                    if (circleRef.current) {
                      rotationRef.current = gsap.to(circleRef.current, {
                        rotation: 360,
                        duration: 60,
                        ease: 'linear',
                        repeat: -1,
                        transformOrigin: 'center center',
                      });
                    }
                  },
                });
              }}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full bg-white/50 text-xs font-medium mb-4">COMPLETE</div>
            <div className="text-gray-400 text-sm mb-6">Feb 2024</div>
            <h2 className="text-xl font-light text-white mb-2">{points[selectedPoint].title}</h2>
            <p className="text-gray-400 text-sm mb-6">{points[selectedPoint].description}</p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Energy Level
                </span>
                <span className="text-sm text-white">{points[selectedPoint].status}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ width: `${points[selectedPoint].status}%` }}
                ></div>
              </div>
            </div>

            <div>
              <h3 className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <Radio className="w-4 h-4" /> CONNECTED NODES
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handlePointClick(getPrevPoint(selectedPoint))}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  {(() => {
                    const PrevIcon = points[getPrevPoint(selectedPoint)].Icon;
                    return <PrevIcon className="w-4 h-4" />;
                  })()}
                  ← {points[getPrevPoint(selectedPoint)].title}
                </button>
                <button
                  onClick={() => handlePointClick(getNextPoint(selectedPoint))}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  {(() => {
                    const NextIcon = points[getNextPoint(selectedPoint)].Icon;
                    return <NextIcon className="w-4 h-4" />;
                  })()}
                  {points[getNextPoint(selectedPoint)].title} →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CircleWithPoints;
