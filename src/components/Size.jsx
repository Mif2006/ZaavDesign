import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Ruler, Search, CheckCircle, AlertCircle } from 'lucide-react';
import IMG1 from '../assets/images/IMG_4795.jpg';
import IMG2 from '../assets/images/IMG_4797.jpg';
import IMG3 from '../assets/images/IMG_4798.jpg';
import IMG4 from '../assets/images/IMG_4800.jpg';
import IMG5 from '../assets/images/IMG_4803.jpg';
import IMG6 from '../assets/images/IMG_4804.jpg';
import IMG7 from '../assets/images/IMG_4805.jpg';
import IMG8 from '../assets/images/IMG_4806.jpg';

gsap.registerPlugin(ScrollTrigger);

const Size = () => {
  const sizeTrigger = useRef(null);
  const scrollContainer = useRef(null);
  const lastCard = useRef(null);

  useGSAP(() => {
    // Main timeline for the entire section
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sizeTrigger.current,
        start: "top top",
        end: "+=300%", // Extended to accommodate internal scrolling
        scrub: true,
        pin: true,
      },
    });

    // Internal scroll animation for the content
    const scrollTimeline = gsap.timeline();
    
    // First phase: scroll through the content
    scrollTimeline.to(scrollContainer.current, {
      y: "-60%", // Scroll up to reveal all content
      duration: 0.7,
      ease: "power2.inOut",
    });

    // Second phase: trigger layer animation only after content is fully scrolled
    scrollTimeline.to(".layer", {
      x: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onStart: () => {
        gsap.to(".maintext", {
          scale: 0,
          opacity: 0,
          duration: 0.3,
        });
        gsap.to(".paragraphs", {
          scale: 0,
          opacity: 0,
          duration: 0.3,
        });
        gsap.to(".columns", {
          opacity: 0,
          duration: 0.3,
        });
      },
      onReverseComplete: () => {
        gsap.to(".maintext", {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
        gsap.to(".paragraphs", {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
        gsap.to(".columns", {
          opacity: 1,
          duration: 0.3,
        });
      },
    }, "+=0.3") // Delay before layer animation starts
    .to(".layer", {
      scale: 0.5,
      duration: 0.3,
      ease: "power2.out",
    });

    // Add the scroll timeline to the main timeline
    mainTimeline.add(scrollTimeline);

    // Animate cards visibility as they come into view during scroll
    gsap.to('.columns', {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".columns",
        start: "top 90%",
        end: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

  }, []);

  return (
    <section
      ref={sizeTrigger}
      className="relative bg-zinc flex flex-col items-center justify-start gap-4 md:gap-8 py-4 md:py-8 h-[120vh] bg-gradient-to-bl from-black via-purple-900/20 to-black min-w-screen w-full overflow-hidden"
    >
      {/* Scrollable Content Container */}
      <div 
        ref={scrollContainer}
        className="w-full flex flex-col items-center justify-start gap-4 md:gap-8 py-4 md:py-8"
      >
        {/* Title */}
        <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
          <Ruler className="text-indigo-500 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />
          <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold z-[4] text-center text-indigo-500">
            Как Узнать Размер?
          </h1>
          <Ruler className="text-indigo-500 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rotate-180" />
        </div>

        {/* Enhanced Main Text */}
        <div className="maintext bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border border-purple-500/30 shadow-2xl max-w-5xl mx-4">
          <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
            <Search className="text-purple-400 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-300 mb-2 md:mb-3">
                Важность правильного размера
              </h3>
              <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                Перед приобретением кольца необходимо знать его точный размер. Это маленькое украшение способно доставить массу хлопот, если окажется мало. А когда изделие немножко велико, оно может незаметно ускользнуть от своего владельца. Поэтому кольцо - такой аксессуар, с размером которого нельзя экспериментировать.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Paragraphs */}
        <div className="paragraphs bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border border-indigo-500/30 shadow-2xl max-w-6xl mx-4">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start gap-3 md:gap-4">
              <CheckCircle className="text-green-400 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-green-300 mb-2 md:mb-3">
                  Профессиональный способ
                </h3>
                <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                  Самый надежный и верный способ - прийти в любой ювелирный магазин и попросить специалиста измерить ваш палец и подобрать подходящий размер кольца. Как правило, шаг градации в размерах составляет 0,5 – в ювелирных магазинах вы увидите размеры 16, затем 16,5, затем 17 и так далее.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <AlertCircle className="text-yellow-400 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-yellow-300 mb-2 md:mb-3">
                  Домашние методы измерения
                </h3>
                <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed mb-3 md:mb-4">
                  Также существует несколько способов, которыми можно измерить размер пальца для кольца, не покидая пределов квартиры.
                </p>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 md:p-4">
                  <p className="text-red-200 text-sm md:text-base font-medium mb-2">
                    ⚠️ Важно отметить:
                  </p>
                  <p className="text-white text-sm md:text-base leading-relaxed mb-2 md:mb-3">
                    Самостоятельное измерение в домашних условиях не дают гарантии в том, что украшение подойдет идеально по размеру. Следует учитывать следующие нюансы:
                  </p>
                  <ul className="list-disc list-inside text-white text-sm md:text-base space-y-1">
                    <li>не стоит замерять пальцы в жаркие дни</li>
                    <li>и также после активных занятий спортом</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {/* Responsive Cards Grid */}
        <div className="columns opacity-0 flex items-center justify-center px-4 md:px-8 text-white w-full z-5 mt-6 md:mt-12"> 
          <div className="grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <div className="card flex flex-col gap-3 md:gap-4 text-center p-4 md:p-6 bg-transparent border border-purple-500 rounded-lg shadow-lg transition-transform duration-500 scale-[1] hover:scale-[1.05] md:hover:scale-[1.1]">
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Search className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-purple-400" />
                </div>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
                Измеряем размер пальчика
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Если у вас есть уже кольцо, возьмите украшение и обведите карандашом по внутренней стороне. А затем замерьте диаметр получившегося круга.
              </p>
            </div>

            <div className="card flex flex-col gap-3 md:gap-4 text-center p-4 md:p-6 bg-transparent border border-purple-500 rounded-lg shadow-lg transition-transform duration-500 scale-[1] hover:scale-[1.05] md:hover:scale-[1.1]">
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-indigo-400" />
                </div>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
                Измерение пальца дома
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Измеряйте палец в конце дня, когда он немного расширен. Не рекомендуется проводить замеры после активных физических нагрузок или в холодное время суток.
              </p>
            </div>

            <div className="card flex flex-col gap-3 md:gap-4 text-center p-4 md:p-6 bg-transparent border border-purple-500 rounded-lg shadow-lg transition-transform duration-500 scale-[1] hover:scale-[1.05] md:hover:scale-[1.1]">
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Ruler className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-green-400" />
                </div>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
                Определение размера кольца
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Чтобы узнать размер кольца, можно воспользоваться специальными кольцемерами, которые доступны в ювелирных магазинах. Каждый ювелир поможет вам подобрать правильный размер.
              </p>
            </div>

            <div 
              ref={lastCard}
              className="card flex flex-col gap-3 md:gap-4 text-center p-4 md:p-6 bg-transparent border border-purple-500 rounded-lg shadow-lg transition-transform duration-500 scale-[1] hover:scale-[1.05] md:hover:scale-[1.1]"
            >
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-yellow-400" />
                </div>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
                Измерение по диаметру
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Если у вас есть кольцо, которое хорошо сидит, вы можете измерить его диаметр и обратиться в ювелирный магазин, чтобы узнать точный размер по диаметру.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Background Layer */}
      <div
        style={{ backgroundImage: `url(${IMG6})` }}
        className="z-[8] bg-cover bg-center layer absolute left-0 top-0 translate-x-[100%] w-screen h-screen"
      >
        <div className="absolute w-full h-full inset-0 bg-black opacity-20" />
      </div>
    </section>
  );
};

export default Size;