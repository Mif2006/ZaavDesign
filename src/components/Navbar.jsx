import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ShoppingBag, Star, Store, Users, Ruler, Gem } from 'lucide-react';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const navItems = [
    {
      name: "Главная",
      icon: Home,
      action: () => scrollToSection('hero'),
      type: 'scroll'
    },
    {
      name: "Особенности",
      icon: Star,
      action: () => scrollToSection('highlights'),
      type: 'scroll'
    },
    {
      name: "Бестселлеры",
      icon: Gem,
      action: () => scrollToSection('bestsellers'),
      type: 'scroll'
    },
    {
      name: "Магазин",
      icon: Store,
      action: () => scrollToSection('shop'),
      type: 'scroll'
    },
    {
      name: "Отзывы",
      icon: Users,
      action: () => scrollToSection('testimonials'),
      type: 'scroll'
    },
    {
      name: "Размеры",
      icon: Ruler,
      action: () => scrollToSection('size'),
      type: 'scroll'
    },
    {
      name: "Каталог",
      icon: ShoppingBag,
      link: "/catalogue",
      type: 'link'
    }
  ];

  const scrollToSection = (sectionId) => {
    // Only scroll if we're on the home page
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }

    let targetElement;
    
    switch(sectionId) {
      case 'hero':
        targetElement = document.querySelector('section'); // First section (TrueHero)
        break;
      case 'highlights':
        targetElement = document.querySelector('#highlight') || 
                      document.querySelector('[class*="Highlights"]') ||
                      document.querySelectorAll('section')[1]; // Second section
        break;
      case 'bestsellers':
        targetElement = document.querySelector('#tech') || 
                      document.querySelector('[class*="ImageSlider"]') ||
                      document.querySelectorAll('section')[3]; // ImageSlider section
        break;
      case 'shop':
        targetElement = document.querySelector('[class*="Shop"]') ||
                      document.querySelectorAll('section')[4]; // Shop section
        break;
      case 'testimonials':
        targetElement = document.querySelector('[class*="Testimonials"]') ||
                      document.querySelectorAll('section')[5]; // Testimonials section
        break;
      case 'size':
        targetElement = document.querySelector('[class*="Size"]') ||
                      document.querySelectorAll('section')[6]; // Size section
        break;
      case 'about':
        targetElement = document.querySelector('[class*="CircleWithPoints"]') ||
                      document.querySelectorAll('section')[7]; // CircleWithPoints section
        break;
      default:
        targetElement = document.querySelector('section');
    }

    if (targetElement) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: targetElement,
          offsetY: 80 // Account for navbar height
        },
        ease: "power2.inOut"
      });
    }

    setIsMenuOpen(false);
  };

  const handleItemClick = (item) => {
    if (item.type === 'scroll') {
      item.action();
    }
    setIsMenuOpen(false);
  };

  useGSAP(() => {
    // Animate navbar on load
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <nav 
      ref={navRef}
      className='fixed top-0 left-0 right-0 w-full h-[80px] bg-black/80 backdrop-blur-md border-b border-purple-500/20 z-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
        <div className='flex items-center justify-between h-full'>
          
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link 
              to="/" 
              className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-300 hover:to-indigo-300 transition-all duration-300'
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ZAAVG
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-1'>
            {navItems.map((item, index) => {
              const Icon = item.icon;
              
              if (item.type === 'link') {
                return (
                  <Link
                    key={index}
                    to={item.link}
                    className='group flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:text-purple-300 transition-all duration-300 hover:bg-purple-500/10'
                  >
                    <Icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />
                    <span className='text-sm font-medium'>{item.name}</span>
                  </Link>
                );
              }

              return (
                <button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className='group flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:text-purple-300 transition-all duration-300 hover:bg-purple-500/10'
                >
                  <Icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />
                  <span className='text-sm font-medium'>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 rounded-lg text-white hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300'
            >
              {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-purple-500/20 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className='px-4 py-6 space-y-2'>
            {navItems.map((item, index) => {
              const Icon = item.icon;
              
              if (item.type === 'link') {
                return (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className='group flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:text-purple-300 transition-all duration-300 hover:bg-purple-500/10'
                  >
                    <Icon className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
                    <span className='font-medium'>{item.name}</span>
                  </Link>
                );
              }

              return (
                <button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className='group w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:text-purple-300 transition-all duration-300 hover:bg-purple-500/10'
                >
                  <Icon className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
                  <span className='font-medium'>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;