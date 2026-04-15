import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight, MapPin, Sparkles, Heart, Crown, Music, X } from 'lucide-react';

import bgImage from '../../du.jpg';
import img1 from '../../mo.jpg';
import img2 from '../../cl.jpg';
import img3 from '../../y.jpg';

const pujasList = [
  { rank: 1, name: "Sreebhumi Sporting Club", theme: "Grand Architectural Marvels", zone: "Lake Town", desc: "Famous for replicating iconic global monuments like the Burj Khalifa or Vatican City. It attracts millions with its mesmerizing lighting and sheer scale." },
  { rank: 2, name: "Suruchi Sangha", theme: "Bengal's Cultural Heritage", zone: "New Alipore", desc: "Known for promoting different states of India and focusing on intricate artistry to showcase unity in diversity. Their outdoor art installations are breathtaking." },
  { rank: 3, name: "College Square", theme: "Spectacular Lighting & Lake Reflection", zone: "Central Kolkata", desc: "Set against a massive lake, the magical reflection of the illuminations on the water is College Square's signature charm. The traditional idol here is majestic." },
  { rank: 4, name: "Maddox Square", theme: "The Ultimate Adda Zone & Traditional Idol", zone: "Ballygunge", desc: "The cultural hub for youths and families to gather, chat (adda), and enjoy street food. Maddox relies on beautiful, highly traditional Goddess idols and an open grassy field." },
  { rank: 5, name: "Bagbazar Sarbojonin", theme: "Classic Ekchala Pratima", zone: "North Kolkata", desc: "Steeped in more than a century of history, Bagbazar sticks to the purest form of the festival with a classic 'Daker Saaj' Idol. A magnificent display of tradition." }
];

const gallery = [img1, img2, img3];

const DurgaPuja = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPuja, setSelectedPuja] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const audioRef = useRef(null);

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
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '100%', height: '100%', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.55) contrast(1.1) saturate(1.2)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(139,0,0,0.1) 0%, rgba(10,0,0,0.85) 100%)' }} />
        {/* Soft magical particles for Durga Puja vibe */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }}>
           {[...Array(15)].map((_,i) => (
              <motion.div 
                key={i} animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0], rotate: 360 }} 
                transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 2 }}
                style={{ position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: '4px', height: '4px', background: '#ffd700', borderRadius: '50%', boxShadow: '0 0 10px #ffd700' }}
              />
           ))}
        </div>
      </div>

      <audio ref={audioRef} src="https://actions.google.com/sounds/v1/foley/indian_drum_loop.ogg" loop />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{ position: 'relative', textAlign: 'center', marginBottom: '8rem', padding: '6rem 2rem', background: 'radial-gradient(circle, rgba(139,0,0,0.3) 0%, transparent 60%)' }}>
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: 'inline-block', padding: '20px', background: 'rgba(255, 215, 0, 0.05)', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '50%', marginBottom: '2rem' }}
          >
            <Crown size={48} color="#FFD700" style={{ filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.6))' }} />
          </motion.div>
          
          <h1 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(5rem, 12vw, 8rem)', margin: '0', color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
            দুর্গাপূজা
          </h1>
          <p style={{ fontSize: '1.4rem', color: '#FFD700', letterSpacing: '12px', textTransform: 'uppercase', fontWeight: 900, marginTop: '1rem', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
            The Heart of Bengal
          </p>
          <div style={{ height: '1px', width: '200px', background: 'linear-gradient(90deg, transparent, #FFD700, transparent)', margin: '3rem auto' }} />
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', maxWidth: '750px', margin: '0 auto', lineHeight: 2, fontWeight: 300, fontStyle: 'italic' }}>
            It is not just a festival, but an emotion that brings together art, devotion, culture, and community. Symbolizing the triumph of good over darkness.
          </p>
        </div>

        {/* Elegant Countdown */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
          style={{ 
            display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255, 215, 0, 0.02))',
            padding: '4rem', borderRadius: '50px', border: '1px solid rgba(255, 215, 0, 0.1)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 0 30px rgba(255, 215, 0, 0.05)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFD700', marginBottom: '3rem' }}>
            <Sparkles size={24} /> <h2 style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '6px', textTransform: 'uppercase', margin: 0 }}>Waiting For Maa Durga</h2> <Sparkles size={24} />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(2rem, 5vw, 6rem)', flexWrap: 'wrap' }}>
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 300, color: '#fff', textShadow: '0 0 40px rgba(255, 215, 0, 0.3)', fontFamily: 'serif', lineHeight: 1 }}>
                  {value.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '5px', fontWeight: 600 }}>
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </motion.div>


        {/* Interactive Features Block */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', marginBottom: '10rem' }}>
          
          {/* Cinematc Slider */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} 
            className="glass-panel"
            style={{ position: 'relative', height: '600px', borderRadius: '40px', overflow: 'hidden', padding: '1rem', border: '1px solid rgba(255,215,0,0.1)' }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '30px', overflow: 'hidden' }}>
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentSlide}
                  src={gallery[currentSlide]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)' }} />
              
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                   <h3 style={{ fontSize: '2rem', color: '#FFD700', marginBottom: '0.5rem', fontWeight: 300 }}>Glimpses of Grandeur</h3>
                   <p style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Magnificent Pandals & Art</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={prevSlide} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1.2rem', borderRadius: '50%', cursor: 'pointer', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }} onMouseOver={(e) => e.target.style.background='rgba(255,215,0,0.3)'} onMouseOut={(e) => e.target.style.background='rgba(255,255,255,0.1)'}><ChevronLeft size={24} /></button>
                  <button onClick={nextSlide} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1.2rem', borderRadius: '50%', cursor: 'pointer', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }} onMouseOver={(e) => e.target.style.background='rgba(255,215,0,0.3)'} onMouseOut={(e) => e.target.style.background='rgba(255,255,255,0.1)'}><ChevronRight size={24} /></button>
                </div>
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             {/* Dhak Interactive Panel */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
               whileHover={{ scale: 1.02 }}
               onClick={toggleDhak}
               style={{ 
                 flex: 1, borderRadius: '40px', padding: '4rem 3rem', cursor: 'pointer',
                 background: isPlaying ? 'linear-gradient(135deg, rgba(139,0,0,0.6), rgba(255,215,0,0.2))' : 'rgba(255,255,255,0.02)',
                 border: `1px solid ${isPlaying ? 'rgba(255,215,0,0.4)' : 'rgba(255,255,255,0.05)'}`,
                 display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                 boxShadow: isPlaying ? '0 0 60px rgba(139,0,0,0.5)' : 'none',
                 transition: 'all 0.5s ease'
               }}
             >
               <motion.div 
                 animate={{ scale: isPlaying ? [1, 1.3, 1] : 1 }} 
                 transition={{ repeat: Infinity, duration: 0.6 }}
                 style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px dashed rgba(255,215,0,0.5)' }}
               >
                 <Music size={40} color="#FFD700" />
               </motion.div>
               <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem', fontWeight: 300 }}>{isPlaying ? "Rhythm of the Soul" : "Play the Dhak"}</h3>
               <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>{isPlaying ? "Click to calm the beats..." : "Click to awaken the festive energy"}</p>
             </motion.div>

             {/* Culture Info Box */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
               style={{ padding: '3rem', borderRadius: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', flex: 1 }}
             >
               <h4 style={{ fontSize: '1.2rem', color: '#FFD700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem', fontWeight: 900 }}>The Festive Vibe</h4>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'white', fontSize: '1.1rem', fontWeight: 300 }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: '#FFD700', fontSize: '1.5rem' }}>•</span> Magnificent Pandals</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: '#FFD700', fontSize: '1.5rem' }}>•</span> Exquisite Pratima (Idols)</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: '#FFD700', fontSize: '1.5rem' }}>•</span> Sizzling Street Food & Bhog</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: '#FFD700', fontSize: '1.5rem' }}>•</span> Vibrant Traditional Attire</li>
               </ul>
             </motion.div>
          </div>
        </div>

        {/* Premium Puja Locations */}
        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>Top Kolkata Destinations</h2>
            <p style={{ color: '#FFD700', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Where art meets devotion</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {pujasList.map((puja, index) => (
              <motion.div 
                key={puja.rank}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)', borderColor: 'rgba(255,215,0,0.3)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPuja(puja)}
                style={{ 
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(20,20,20,0.8) 100%)', 
                  borderRadius: '30px', border: '1px solid rgba(255,215,0,0.08)', padding: '3rem',
                  position: 'relative', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, fontSize: '12rem', fontWeight: 900, color: 'rgba(255,215,0,0.03)', lineHeight: 0.8, userSelect: 'none' }}>
                  {puja.rank}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFD700', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 900 }}>
                    <MapPin size={16} /> {puja.zone}
                  </div>
                  <h3 style={{ fontSize: '2.2rem', color: '#fff', fontWeight: 300, marginBottom: '2rem', lineHeight: 1.2 }}>{puja.name}</h3>
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Signature Theme</div>
                    <div style={{ fontSize: '1.2rem', color: 'var(--accent-color)', fontStyle: 'italic' }}>"{puja.theme}"</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emotion Sign-off */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '12rem', padding: '8rem 0', borderTop: '1px solid rgba(255,215,0,0.1)' }}>
          <Heart size={40} color="#FFD700" style={{ margin: '0 auto 3rem', filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.5))' }} />
          <h3 className="bangla-text shimmer-text" style={{ fontSize: '5rem', color: 'white', marginBottom: '2rem', fontWeight: 300 }}>
            আসছে বছর আবার হবে
          </h3>
          <p style={{ fontSize: '1.6rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            The emotion that promises return. The spirit that refuses to say a final goodbye.
          </p>
        </motion.div>


      </div>

      {/* Puja Details Modal */}
      <AnimatePresence>
        {selectedPuja && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPuja(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(10,0,0,0.85)', backdropFilter: 'blur(30px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{ 
                maxWidth: '700px', width: '100%', padding: '6rem', 
                background: 'linear-gradient(135deg, rgba(139,0,0,0.9) 0%, rgba(20,5,5,0.95) 100%)', 
                borderRadius: '40px', 
                border: '1px solid rgba(255,215,0,0.3)', 
                boxShadow: '0 40px 100px -20px rgba(0,0,0,1), inset 0 0 50px rgba(255,215,0,0.1)',
                textAlign: 'center', position: 'relative', overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '150%', height: '5px', background: 'radial-gradient(ellipse, #FFD700 0%, transparent 70%)' }} />
              
              <button 
                onClick={() => setSelectedPuja(null)}
                style={{ 
                  position: 'absolute', top: '2rem', right: '2rem', 
                  background: 'transparent', border: 'none', color: 'rgba(255,215,0,0.5)', 
                  cursor: 'pointer', zIndex: 10, transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.color = '#FFD700'; e.currentTarget.style.transform = 'scale(1.2)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,215,0,0.5)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <X size={32} strokeWidth={1.5} />
              </button>

              <div style={{ marginBottom: '2rem' }}>
                 <div style={{ fontSize: '1rem', color: '#FFD700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 900 }}>
                   Rank #{selectedPuja.rank}
                 </div>
                 <h2 className="shimmer-text" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white', lineHeight: 1.2 }}>
                   {selectedPuja.name}
                 </h2>
                 <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', padding: '0.8rem 2rem', background: 'rgba(255,215,0,0.1)', borderRadius: '100px', border: '1px solid rgba(255,215,0,0.2)' }}>
                   <MapPin size={20} color="#FFD700" /> {selectedPuja.zone}
                 </div>
              </div>
              
              <div style={{ height: '1px', width: '60%', background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)', margin: '3rem auto' }} />

              <div style={{ marginBottom: '4rem' }}>
                <h4 style={{ color: '#FFD700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Signature Theme</h4>
                <p style={{ fontSize: '1.6rem', color: 'white', fontWeight: 300, fontStyle: 'italic', marginBottom: '2rem' }}>"{selectedPuja.theme}"</p>
                <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
                  {selectedPuja.desc}
                </p>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,215,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPuja(null)}
                style={{ 
                  width: '100%', padding: '1.8rem', fontSize: '1.2rem', 
                  borderRadius: '100px', background: 'linear-gradient(135deg, #FFD700, #ffb300)',
                  color: 'black', fontWeight: 900, border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
                  letterSpacing: '2px', textTransform: 'uppercase'
                }}
              >
                Experience {selectedPuja.name.split(' ')[0]} <Sparkles size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DurgaPuja;
