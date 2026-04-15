import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight, MapPin, Sparkles, Heart } from 'lucide-react';

// Use available images for gallery (fallback to unsplash if missing)
import bgImage from '../../du.jpg';
import img1 from '../../mo.jpg';
import img2 from '../../cl.jpg';
import img3 from '../../y.jpg';

const pujasList = [
  { rank: 1, name: "Sreebhumi Sporting Club", theme: "Grand Architectural Marvels", zone: "Lake Town" },
  { rank: 2, name: "Suruchi Sangha", theme: "Bengal's Cultural Heritage", zone: "New Alipore" },
  { rank: 3, name: "College Square", theme: "Spectacular Lighting & Lake Reflection", zone: "Central Kolkata" },
  { rank: 4, name: "Maddox Square", theme: "The Ultimate Adda Zone & Traditional Idol", zone: "Ballygunge" },
  { rank: 5, name: "Bagbazar Sarbojonin", theme: "Classic Ekchala Pratima", zone: "North Kolkata" }
];

const gallery = [img1, img2, img3];

const DurgaPuja = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const audioRef = useRef(null);

  // Next Durga Puja Target (Approx. October 2026/2027)
  const targetDate = new Date("October 18, 2026 00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const toggleDhak = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % gallery.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', paddingBottom: '150px' }}
    >
      {/* Background Image */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ duration: 30, repeat: Infinity }}
          style={{ width: '100%', height: '100%', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.2) contrast(1.2)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,0.2), rgba(10,0,0,0.9))' }} />
      </div>

      {/* Hidden Audio Element for Dhak */}
      <audio ref={audioRef} src="https://actions.google.com/sounds/v1/foley/indian_drum_loop.ogg" loop />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity }}
            style={{ fontSize: '4rem', marginBottom: '1rem', color: '#ff4081', filter: 'drop-shadow(0 0 20px rgba(233,30,99,0.5))' }}
          >
            🌺
          </motion.div>
          
          <h1 className="bangla-text shimmer-text" style={{ fontSize: 'min(5rem, 10vw)', marginBottom: '1rem', color: 'white', fontWeight: 300 }}>
            দুর্গাপূজা
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--accent-color)', letterSpacing: '8px', textTransform: 'uppercase', fontWeight: 900 }}>
            The Heart of Bengali Culture
          </p>

          <br/>
          <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '2rem auto', lineHeight: 1.8, fontWeight: 300 }}>
            Celebrate the grandeur of Durga Puja — the most awaited and vibrant festival of Bengal. It marks the victory of Goddess Durga over evil, symbolizing the triumph of good over darkness. It is not just a festival, but an emotion that brings together art, devotion, culture, and community.
          </p>
        </div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
          className="glass-panel"
          style={{ padding: '4rem', borderRadius: '40px', background: 'rgba(20,5,5,0.6)', border: '1px solid rgba(255,64,129,0.2)', textAlign: 'center', marginBottom: '8rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(255,64,129,0.1)' }}
        >
          <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '3rem', fontWeight: 300, letterSpacing: '4px' }}>WAITING FOR MAA DURGA</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1rem, 4vw, 4rem)', flexWrap: 'wrap' }}>
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: '#ff4081', textShadow: '0 0 30px rgba(233,30,99,0.4)', fontFamily: 'monospace' }}>
                  {value.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '4px', marginTop: '1rem' }}>
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Magical Elements Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
          
          <motion.div 
            initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            className="glass-panel"
            style={{ padding: '3.5rem', borderRadius: '30px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Sparkles /> What makes it special?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: 2.2, color: 'rgba(255,255,255,0.8)' }}>
              <li style={{ display: 'flex', gap: '1rem' }}><span>🏵️</span> Magnificent pandals with creative themes</li>
              <li style={{ display: 'flex', gap: '1rem' }}><span>🎨</span> Beautiful idols of Goddess Durga</li>
              <li style={{ display: 'flex', gap: '1rem' }}><span>👗</span> Traditional attire & festive vibes</li>
              <li style={{ display: 'flex', gap: '1rem' }}><span>🍛</span> Delicious bhog and Bengali delicacies</li>
            </ul>
          </motion.div>

          {/* Interactive Dhak Section */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onClick={toggleDhak}
            className="glass-panel"
            style={{ 
              padding: '3.5rem', borderRadius: '30px', background: isPlaying ? 'rgba(255,64,129,0.1)' : 'rgba(255,255,255,0.02)', 
              border: `1px solid ${isPlaying ? '#ff4081' : 'rgba(255,255,255,0.05)'}`,
              cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              boxShadow: isPlaying ? '0 0 50px rgba(233,30,99,0.3)' : 'none',
              transition: 'all 0.4s ease'
            }}
          >
            <motion.div 
              animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }} 
              transition={{ repeat: Infinity, duration: 0.5 }}
              style={{ fontSize: '5rem', marginBottom: '2rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}
            >
              🥁
            </motion.div>
            <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>
              {isPlaying ? "Feel the Beats..." : "Play Dhak Beats"}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>Click to {isPlaying ? 'pause' : 'experience'} the cultural rhythm</p>
          </motion.div>
        </div>

        {/* Cinematic Pandal Gallery Slider */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '8rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', textAlign: 'center', marginBottom: '4rem', fontWeight: 300 }}>Glimpses of Grandeur</h2>
          
          <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
            <AnimatePresence initial={false}>
              <motion.img
                key={currentSlide}
                src={gallery[currentSlide]}
                alt={`Pandal Gallery ${currentSlide}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </AnimatePresence>
            
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }} />

            <div style={{ position: 'absolute', bottom: '3rem', left: '0', width: '100%', display: 'flex', justifyContent: 'center', gap: '1rem', zIndex: 10 }}>
              <button onClick={prevSlide} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '1rem', borderRadius: '50%', cursor: 'pointer', backdropFilter: 'blur(10px)' }}><ChevronLeft /></button>
              <button onClick={nextSlide} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '1rem', borderRadius: '50%', cursor: 'pointer', backdropFilter: 'blur(10px)' }}><ChevronRight /></button>
            </div>
          </div>
        </motion.div>

        {/* Top Kolkata Puja List */}
        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="glass-panel" style={{ padding: '5rem', borderRadius: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,179,0,0.1)' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--accent-color)', textAlign: 'center', marginBottom: '4rem', fontWeight: 300 }}>Top Kolkata Pujas</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {pujasList.map((puja) => (
              <motion.div 
                key={puja.rank}
                whileHover={{ x: 20, background: 'rgba(255,255,255,0.05)' }}
                style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem', borderRadius: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}
              >
                <div style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.2)', fontWeight: 900, minWidth: '60px' }}>
                  #{puja.rank}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '0.5rem' }}>{puja.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent-color)', fontSize: '1rem' }}>
                    <MapPin size={16} /> <span>{puja.zone}</span>
                  </div>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: '30%', textAlign: 'right', fontStyle: 'italic' }}>
                  "{puja.theme}"
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Quote Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '10rem' }}>
          <Heart size={40} color="#ff4081" fill="#ff4081" style={{ margin: '0 auto 2rem' }} />
          <h3 className="bangla-text shimmer-text" style={{ fontSize: '4rem', color: 'white', marginBottom: '2rem', fontWeight: 300 }}>
            আসছে বছর আবার হবে
          </h3>
          <p style={{ fontSize: '1.5rem', color: 'var(--accent-color)', fontStyle: 'italic', opacity: 0.8 }}>
            "The spirit that keeps the celebration alive forever."
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default DurgaPuja;
