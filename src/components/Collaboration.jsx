import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import shop from '../assets/images/shop.jpg';
import Footer from './Footer';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Collaboration = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    contactMode: 'whatsapp'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { data, error } = await supabase
        .from('collaboration_requests')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            city: formData.city,
            contact_mode: formData.contactMode
          }
        ])
        .select();

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        city: '',
        contactMode: 'whatsapp'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(() => {
    gsap.from('.collaboration-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    });

    gsap.from('.collaboration-text', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out'
    });

    gsap.from('.collaboration-form', {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.7,
      ease: 'power2.out'
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className="relative min-h-screen w-full flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: `url(${shop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl w-full">
          <motion.h1
            className="collaboration-title text-4xl md:text-6xl font-bold text-center mb-8 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Сотрудничество
          </motion.h1>

          <motion.p
            className="collaboration-text text-lg md:text-xl text-white text-center mb-12 leading-relaxed px-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Мы с нашими представителями из России, США, Польши, Чехии, Франции и Украины растем и развиваемся каждый день, даря нашим клиентам не только красивые украшения высокого качества, но и море положительных эмоций и улыбок.
          </motion.p>

          <motion.div
            className="collaboration-form backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Свяжитесь с нами
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 text-sm font-medium">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2 text-sm font-medium">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm"
                  placeholder="+7 (xxx) xxx-xx-xx"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-white mb-2 text-sm font-medium">
                  Город *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm"
                  placeholder="Введите ваш город"
                />
              </div>

              <div>
                <label className="block text-white mb-3 text-sm font-medium">
                  Предпочитаемый способ связи *
                </label>
                <div className="flex flex-wrap gap-4">
                  {['whatsapp', 'telegram', 'viber'].map((mode) => (
                    <label key={mode} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="contactMode"
                        value={mode}
                        checked={formData.contactMode === mode}
                        onChange={handleInputChange}
                        className="w-5 h-5 mr-2 accent-white cursor-pointer"
                      />
                      <span className="text-white capitalize group-hover:text-white/80 transition-colors">
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-white text-center">
                  Спасибо! Ваша заявка успешно отправлена.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-white text-center">
                  Произошла ошибка. Пожалуйста, попробуйте позже.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-lg bg-white/90 hover:bg-white text-black font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collaboration;
