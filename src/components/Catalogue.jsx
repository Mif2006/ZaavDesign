"use client";

import React, { useState, useRef, useEffect } from "react";
import { MoveLeft, MoveRight, MoveUpRight, ShoppingCart } from "lucide-react";
import { gsap } from "gsap";
import video1 from "../assets/videos/1012.mov";
import video2 from "../assets/videos/1013.mov";

import IMG1 from "../assets/images/IMG_4795.jpg";
import IMG2 from "../assets/images/IMG_4797.jpg";
import IMG3 from "../assets/images/IMG_4798.jpg";
import IMG4 from "../assets/images/IMG_4800.jpg";
import IMG5 from "../assets/images/IMG_4803.jpg";
import IMG6 from "../assets/images/IMG_4804.jpg";
import IMG7 from "../assets/images/IMG_4805.jpg";
import IMG8 from "../assets/images/IMG_4806.jpg";
import shop from "../assets/images/shop.jpg";
import InsideCatalogue from "./InsideCatalogue";
import CartModal from "./CardModal";

const Catalogue = () => {
  const videos = [video1, video2, video1];
  const topCards = [
    { img: IMG2, title: "Подвески" },
    { img: IMG2, title: "Цепочки" },
    { img: IMG2, title: "Фаланговые Кольца" },
  ];
  const bottomCards = [
    { img: IMG7, title: "Новинки" },
    { img: IMG2, title: "Кольца" },
  ];
  const sideVideos = [video2, video2, video2];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const videoRef = useRef(null);

  const animateVideo = (direction) => {
    const nextIndex =
      direction === "left"
        ? currentIndex === 0
          ? videos.length - 1
          : currentIndex - 1
        : currentIndex === videos.length - 1
        ? 0
        : currentIndex + 1;

    gsap.to(videoRef.current, {
      x: direction === "left" ? "100%" : "-100%",
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        videoRef.current.pause();
        setCurrentIndex(nextIndex);
        gsap.fromTo(
          videoRef.current,
          { x: direction === "left" ? "-100%" : "100%" },
          { x: "0%", duration: 0.7, ease: "power2.inOut", onComplete: () => videoRef.current.play() }
        );
      },
    });
  };

  const handleMoveLeft = () => animateVideo("left");
  const handleMoveRight = () => animateVideo("right");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveFromCart = (itemIndex) => {
    const updatedCart = cart.filter((_, index) => index !== itemIndex);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleProceedToCheckout = () => {
    alert("Proceeding to checkout...");
    // Implement checkout logic here
  };

  useEffect(() => {
    gsap.set(videoRef.current, { x: "0%" });
    videoRef.current.play();
  }, []);

  return (
    <div>
      <div className="w-screen px-2 min-h-screen flex items-end pt-[5vh]">
        <div className="w-full flex flex-row gap-2 items-center">
          {/* Search Bar and Cart Button */}
          <div className="flex flex-col w-[50vw] gap-2 pt-[2px]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="searchbar bg-gray-400 w-[50vw] h-[10vh] rounded-full px-4 text-gray-700"
              />
              <button
                onClick={() => setIsCartModalOpen(true)}
                className="bg-blue-600 text-white rounded-full p-4 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-all"
              >
                <ShoppingCart />
              </button>
            </div>

            <div className="flex flex-row gap-2">
              {topCards
                .filter((card) =>
                  card.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((card, index) => (
                  <div key={index} className="h-[38vh] cursor-pointer transition-transform duration-500 scale-[1] hover:scale-[1.03] w-[17vw] bg-gray-400 rounded-[27px]">
                    <img
                      alt={shop}
                      width={800}
                      height={800}
                      src={card.img}
                      className="h-[80%] w-full object-cover object-center rounded-[27px]"
                    />
                    <div className="flex justify-between h-[20%] px-[12px] items-center">
                      <h3 className="font-semibold text-[20px]">{card.title}</h3>
                      <div
                        onClick={() => handleAddToCart(card)}
                        className="rounded-full cursor-pointer text-white flex  items-center justify-center h-[6vh] w-[6vh] bg-black transition-transform duration-500 hover:scale-105"
                      >
                        <MoveUpRight />
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex flex-row gap-2">
              {bottomCards
                .filter((card) =>
                  card.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((card, index) => (
                  <div key={index} className="h-[45vh] cursor-pointer transition-transform duration-500 scale-[1] hover:scale-[1.02]  w-[25vw] bg-gray-400 rounded-[27px]">
                    <img
                      alt={card.title}
                      src={card.img}
                      width={800}
                      height={800}
                      className="h-[80%] w-full object-cover object-center rounded-[27px]"
                    />
                    <div className="flex justify-between h-[20%] px-[12px] items-center">
                      <h3 className="font-semibold text-[20px]">{card.title}</h3>
                      <div
                        onClick={() => handleAddToCart(card)}
                        className="rounded-full cursor-pointer text-white flex items-center justify-center h-[6vh] w-[6vh] bg-black transition-transform duration-500 hover:scale-105"
                      >
                        <MoveUpRight />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {sideVideos.map((video, index) => (
              <div key={index} className={`relative w-[50vw]  ${index === 1 ? "h-[35vh]" : "h-[28vh]"} rounded-[37px] bg-gray-900 overflow-hidden`}>
                <video
                  ref={videoRef}
                  src={video}
                  className="object-cover absolute w-full h-full inset-0 rounded-[37px]"
                  autoPlay
                  muted
                  loop
                />
                <div className="absolute px-[12px] flex justify-between bottom-0 left-0 right-0 h-16 border-t border-transparent">
                  <div className="rounded-full text-white flex items-center justify-center h-[6vh] w-[6vh] bg-gray-900 opacity-0"></div>
                  <div className="rounded-full text-white cursor-pointer flex items-center justify-center h-[6vh] w-[6vh] bg-gray-900 transition-transform duration-500 hover:scale-105">
                    <MoveUpRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartModalOpen && (
 <CartModal 
 cart={cart} 
 setCart={setCart} 
 setIsCartModalOpen={setIsCartModalOpen} 
/>
      )}

      <InsideCatalogue />
    </div>
  );
};

export default Catalogue;
