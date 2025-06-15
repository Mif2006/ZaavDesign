import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
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

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sizeTrigger.current,
        start: "top top",
        end: "+=100%", // Adjust based on how much scroll space you want
        scrub: true,
        pin: true,
      },
    });

    // First animation: move the layer horizontally into position
    tl.to(".layer", {
      x: 0,
      onComplete: () => {
        gsap.to(".maintext", {
          scale: 0,
          opacity: 0,
        });
        gsap.to(".paragraphs", {
          scale: 0,
          opacity: 0,
        });
        gsap.to('.columns', {
          opacity: 1,
          delay: 1,
          y: -120
        });
      },
      onReverseComplete: () => {
        gsap.to(".maintext", {
          scale: 1,
          opacity: 1,
        });
        gsap.to(".paragraphs", {
          scale: 1,
          opacity: 1,
        });
        gsap.to('.columns', {
          opacity: 0,
          y: 0
        });
      },
    })
    .to(".layer", {
      scale: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={sizeTrigger}
      className="relative bg-zinc flex flex-col items-center justify-center gap-12 py-12 items-center min-h-screen bg-gradient-to-bl from-black via-purple-900/20 to-black min-w-screen w-full"
    >
       {/* Animated background elements */}
       {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] top-1/4 left-1/4 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bottom-1/4 right-1/4 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute w-[400px] h-[400px] top-1/2 left-1/2 rounded-full bg-yellow-500/10 blur-3xl animate-pulse delay-2000"></div>
      </div> */}
      <h1 className="text-8xl font-semibold z-[4] text-center text-indigo-500 white">Как Узнать Размер?</h1>

      <p className="maintext text-white w-[82vw] md:w-[62vw] pt-6 text-center z-[4] text-[20px]">
        Перед приобретением кольца необходимо знать его точный размер. Это маленькое украшение способно доставить массу хлопот, если окажется мало. А когда изделие немножко велико, оно может незаметно ускользнуть от своего владельца. Поэтому кольцо - такой аксессуар, с размером которого нельзя экспериментировать.
      </p>

      <p className="paragraphs text-white w-[85vw] md:w-[65vw] pt-6 text-center z-[4] text-[20px]">
        Самый надежный и верный способ - прийти в любой ювелирный магазин и попросить специалиста измерить ваш палец и подобрать подходящий размер кольца. Как правило, шаг градации в размерах составляет 0,5 – в ювелирных магазинах вы увидите размеры 16, затем 16,5, затем 17 и так далее. Теперь, когда вы будете знать свой размер, вы можете смело отправлять нам заявку на колечко вашей мечты.
        <br/><br/>
        Также существует несколько способов, которыми можно измерить размер пальца для кольца, не покидая пределов квартиры.
        <br/><br/>
        !!! Но важно отметить, что самостоятельное измерение в домашних условиях не дают гарантии в том, что украшение подойдет идеально по размеру. Так как следует учитывать следующие нюансы:
        <ul className="list-disc list-inside">
          <li>не стоит замерять пальцы в жаркие дни</li>
          <li>и также после активных занятий спортом</li>
        </ul>
      </p>
     
      <div className="columns opacity-0  flex items-center justify-center gap-12 px-8 text-white w-full z-5"> 
        <div className="grid w-[50%] h-full grid-cols-1 md:grid-cols-2 flex items-center justify-center gap-12 px-8">
          <div className="card flex items-center justify-center max-w-[75vw] md:max-w-[25vw] transition-transform duration-500 scale-[1] hover:scale-[1.1] flex flex-col gap-4 text-center p-6 bg-transparent border border-purple-500 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white">Итак, измеряем размер пальчика</h2>
            <p className="text-white">
              Если у вас есть уже кольцо, возьмите украшение и обведите карандашом по внутренней стороне. А затем замерьте диаметр получившегося круга.
            </p>
          </div>
          <div className="card flex flex-col gap-4 text-center p-6 bg-transparent transition-transform duration-500 scale-[1] hover:scale-[1.1] border border-purple-500 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white">Измерение пальца дома</h2>
            <p className="text-white">
              Измеряйте палец в конце дня, когда он немного расширен. Не рекомендуется проводить замеры после активных физических нагрузок или в холодное время суток.
            </p>
          </div>
          <div className="card flex flex-col gap-4 text-center p-6 bg-transparent transition-transform duration-500 scale-[1] hover:scale-[1.1] border border-purple-500 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white">Определение размера кольца</h2>
            <p className="text-white">
              Чтобы узнать размер кольца, можно воспользоваться специальными кольцемерами, которые доступны в ювелирных магазинах. Каждый ювелир поможет вам подобрать правильный размер.
            </p>
          </div>
          <div className="card flex flex-col gap-4 text-center p-6 bg-transparent transition-transform duration-500 scale-[1] hover:scale-[1.1] border border-purple-500 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white">Измерение пальца дома</h2>
            <p className="text-white">
              Если у вас есть кольцо, которое хорошо сидит, вы можете измерить его диаметр и обратиться в ювелирный магазин, чтобы узнать точный размер по диаметру.
            </p>
          </div>
        </div>
      </div>


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
