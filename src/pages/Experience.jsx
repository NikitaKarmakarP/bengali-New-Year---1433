import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Star, Compass, ArrowRight, RefreshCw, Feather, Wind, Shield } from 'lucide-react';
import hBg from '../../h.jpg';
import lakshmiImg from '../../Lakshmi.jpg';

const tagoreQuotes = [
  "Let your life lightly dance on the edges of Time like dew on the tip of a leaf.",
  "You can't cross the sea merely by standing and staring at the water.",
  "Faith is the bird that feels the light when the dawn is still dark.",
  "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky."
];

const dailyMessages = [
  "আজকের দিনটি আপনার জীবনে নতুন সম্ভাবনা নিয়ে আসুক।",
  "সফলতা আপনার দরজায় কড়া নাড়ুক, নতুন বছরের প্রতিটি ক্ষণ হোক আনন্দময়।",
  "আপনার স্বপ্নগুলো সত্যি হোক, আর জীবন ভরে উঠুক শান্তিতে।",
  "নতুন বছর মানেই নতুন আশা, নতুন পথ চলা। পদযাত্রা হোক শুভ।"
];

const Experience = () => {
  const [stage, setStage] = useState('entrance');
  const [activeBlessing, setActiveBlessing] = useState(null);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(dailyMessages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % tagoreQuotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const generateNewMessage = () => {
    const randomIdx = Math.floor(Math.random() * dailyMessages.length);
    setCurrentMessage(dailyMessages[randomIdx]);
  };

  return (
    <motion.div
      className="page-container texture-paper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '100vh', overflow: 'hidden' }}
    >
      {/* Cinematic Ken Burns Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute', inset: -100,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${hBg})`,
            backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(1.1) saturate(1.1)'
          }}
        />

        {/* Animated Light Beams */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute', top: '-50%', left: `${i * 25}%`,
                width: '200px', height: '200%',
                background: 'linear-gradient(to right, transparent, rgba(255,215,0,0.05), transparent)',
                transform: 'rotate(20deg)', filter: 'blur(60px)'
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                x: [0, 100, 0]
              }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)' }} />
      </div>

      {/* Floating Sacred Motifs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.5, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            style={{ position: 'absolute', fontSize: `${Math.random() * 2.5 + 1.5}rem`, filter: 'blur(1px)' }}
          >
            {['🌸', '☸️', '✨', '🌼', '🪷'][i % 5]}
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {stage === 'entrance' && (
          <motion.section
            key="entrance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(30px)' }}
            transition={{ duration: 1.5 }}
            style={{
              minHeight: '100vh', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', position: 'relative', zIndex: 1
            }}
          >
            <motion.div
              style={{
                maxWidth: '1100px', width: '95%', padding: '6rem 4rem',
                textAlign: 'center',
                position: 'relative'
              }}
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              {/* Corner Ornaments */}
              <div style={{ position: 'absolute', top: '2rem', left: '2rem', fontSize: '3rem', opacity: 0.1 }}>⚜️</div>
              <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '3rem', opacity: 0.1 }}>⚜️</div>

              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ color: 'var(--accent-color)', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}
              >
                <div style={{ height: '1px', width: '50px', background: 'var(--accent-color)', opacity: 0.3 }} />
                <Compass className="floating" size={48} />
                <span style={{ fontWeight: 900, letterSpacing: '0.6em', textTransform: 'uppercase', fontSize: '1.2rem', textShadow: '0 0 15px rgba(255,179,0,0.3)' }}>The Sacred Journey</span>
                <div style={{ height: '1px', width: '50px', background: 'var(--accent-color)', opacity: 0.3 }} />
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                <motion.h1
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  className="bangla-text shimmer-text"
                  style={{ fontSize: 'clamp(5rem, 12vw, 9rem)', margin: '0', color: 'white', lineHeight: 1.1 }}
                >
                  শুভ নববর্ষ
                </motion.h1>
                <motion.div
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 0.8 }
                  }}
                  className="bangla-text"
                  style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--accent-color)', margin: '1rem 0 4rem' }}
                >
                  ১৪৩৩
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                style={{ position: 'relative', margin: '5rem 0', minHeight: '180px' }}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={quoteIdx}
                    initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{ fontSize: '2.4rem', fontStyle: 'italic', color: 'white', lineHeight: 1.6, opacity: 0.9, fontWeight: 300 }}
                  >
                    "{tagoreQuotes[quoteIdx]}"
                  </motion.p>
                </AnimatePresence>
                <motion.div
                  animate={{ width: ['0%', '150px', '0%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)', margin: '3rem auto' }}
                />
                <span style={{ display: 'block', fontWeight: 900, letterSpacing: '5px', color: 'var(--accent-color)', fontSize: '1.2rem', opacity: 0.8 }}>
                  — RABINDRANATH TAGORE
                </span>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                  margin: '5rem 0 6rem', padding: '4rem',
                  position: 'relative'
                }}
              >
                <Sparkles size={32} style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', color: 'var(--accent-color)' }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <Star size={24} fill="var(--accent-color)" color="var(--accent-color)" className="floating" />
                  <h3 className="bangla-text" style={{ color: 'var(--accent-color)', fontSize: '2.4rem', margin: 0, letterSpacing: '2px' }}>আজকের আশীর্বাদ</h3>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentMessage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    style={{ fontSize: '1.8rem', color: 'white', opacity: 0.9, marginBottom: '3rem', fontWeight: 500 }}
                  >
                    {currentMessage}
                  </motion.p>
                </AnimatePresence>

                <motion.button
                  onClick={generateNewMessage}
                  className="btn-secondary"
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '0.8rem 2.5rem'
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)', borderColor: 'var(--accent-color)' }}
                >
                  <RefreshCw size={20} /> Seek New Guidance
                </motion.button>
              </motion.div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <motion.button
                  className="btn-premium"
                  onClick={() => setStage('blessing')}
                  style={{
                    fontSize: '1.8rem', width: '100%', maxWidth: '500px',
                    padding: '2rem 4rem', borderRadius: '100px',
                    boxShadow: '0 20px 40px rgba(var(--primary-color-rgb), 0.4)'
                  }}
                  whileHover={{ scale: 1.02, letterSpacing: '2px' }}
                >
                  Proceed to Sanctuary <ArrowRight size={28} />
                </motion.button>
                <div style={{ height: '40px', width: '2px', background: 'linear-gradient(to bottom, var(--primary-color), transparent)' }} />
              </div>
            </motion.div>
          </motion.section>
        )}

        {stage === 'blessing' && (
          <motion.section
            key="blessing"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            style={{ minHeight: '100vh', padding: '8rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginBottom: '6rem' }}
            >
              <h1 className="bangla-text shimmer-text" style={{ fontSize: '6rem', color: 'white', marginBottom: '1rem' }}>ঐশ্বরিক আশীর্বাদ</h1>
              <p style={{ fontSize: '1.8rem', color: 'white', opacity: 0.6, letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 800 }}>Seek the Divine Light</p>
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', maxWidth: '1200px' }}>
              <div style={{ flex: 1, minWidth: '350px' }}>
                <BlessingCard
                  title="শ্রী গণেশ"
                  subtitle="Remover of Obstacles"
                  img="https://pngimg.com/uploads/ganesha/ganesha_PNG34.png"
                  onClick={() => setActiveBlessing('ganesha')}
                  color="var(--accent-color)"
                  icon={<Shield size={24} />}
                />
              </div>
              <div style={{ flex: 1, minWidth: '350px' }}>
                <BlessingCard
                  title="মা লক্ষ্মী"
                  subtitle="Goddess of Abundance"
                  img={lakshmiImg}
                  onClick={() => setActiveBlessing('lakshmi')}
                  color="#fa2e69"
                  icon={<Heart size={24} />}
                />
              </div>
            </div>

            <motion.button
              className="btn-premium"
              onClick={() => setStage('festival')}
              style={{ marginTop: '8rem', background: 'transparent', border: '2px solid white', color: 'white', padding: '1.25rem 4rem' }}
              whileHover={{ background: 'white', color: 'black' }}
            >
              The Celebration Awaits <Wind />
            </motion.button>
          </motion.section>
        )}

        {stage === 'festival' && (
          <motion.section
            key="festival"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              minHeight: '100vh', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', padding: '2rem'
            }}
          >
            <h2 className="bangla-text shimmer-text" style={{ fontSize: '6rem', marginBottom: '1rem', color: 'white' }}>উৎসবের আমেজ</h2>
            <p style={{ color: 'white', opacity: 0.6, fontSize: '1.5rem', marginBottom: '4rem', fontWeight: 800 }}>Atmosphere of Celebration</p>

            <div className="glass-panel" style={{
              maxWidth: '1100px', width: '95%', minHeight: '650px',
              position: 'relative', overflow: 'hidden', padding: '5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)',
              boxShadow: '0 60px 120px rgba(0,0,0,0.6)'
            }}>
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{ position: 'absolute', fontSize: '3rem' }}
                    initial={{ top: '-10%', left: `${Math.random() * 100}%`, opacity: 0 }}
                    animate={{
                      top: '110%',
                      opacity: [0, 1, 1, 0],
                      x: (Math.random() - 0.5) * 300,
                      rotate: 720
                    }}
                    transition={{
                      duration: 8 + Math.random() * 8,
                      repeat: Infinity,
                      delay: Math.random() * 10,
                      ease: "linear"
                    }}
                  >
                    {['🌸', '🏵️', '🌺', '✨', '🍃'][Math.floor(Math.random() * 5)]}
                  </motion.div>
                ))}
              </div>

              <div style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
                <motion.div
                  animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  style={{ fontSize: '6rem', marginBottom: '3rem', filter: 'drop-shadow(0 0 30px var(--primary-color))' }}
                >
                  ✨
                </motion.div>
                <div style={{ marginBottom: '4rem' }}>
                  <h3 className="bangla-text" style={{ fontSize: '4.5rem', color: 'white', lineHeight: 1.2, margin: 0 }}>
                    শুভ নববর্ষের পূর্ণ আলোয়
                  </h3>
                  <p className="bangla-text" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginTop: '1rem', opacity: 0.9 }}>
                    আপনার জীবন হোক সমৃদ্ধ।
                  </p>
                </div>
                <button
                  className="btn-premium"
                  onClick={() => setStage('entrance')}
                  style={{ padding: '1.5rem 5rem' }}
                >
                  Re-Experience <RefreshCw />
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Divine Blessing Modal */}
      <AnimatePresence>
        {activeBlessing && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <motion.div
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(30px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveBlessing(null)}
            />

            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{ position: 'absolute', top: '-50%', left: `${i * 20}%`, width: '150px', height: '200%', background: 'linear-gradient(to bottom, transparent, rgba(255,215,0,0.1), transparent)', transform: 'rotate(25deg)', filter: 'blur(40px)' }}
                  animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 50, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: i }}
                />
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 1.2, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="glass-panel"
              style={{
                position: 'relative', maxWidth: '850px', width: '100%',
                textAlign: 'center', padding: '6rem 5rem', background: 'rgba(255,255,255,0.015)',
                borderColor: 'rgba(255,255,255,0.08)', overflow: 'hidden',
                borderRadius: '60px', boxShadow: '0 100px 200px rgba(0,0,0,0.9)'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(var(--accent-color-rgb), 0.1)', pointerEvents: 'none', margin: '1.5rem', borderRadius: '45px' }} />

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  filter: ['drop-shadow(0 0 30px rgba(255,215,0,0.3))', 'drop-shadow(0 0 70px rgba(255,215,0,0.6))', 'drop-shadow(0 0 30px rgba(255,215,0,0.3))']
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ marginBottom: '4rem' }}
              >
                <img
                  src={activeBlessing === 'ganesha' ? "https://pngimg.com/uploads/ganesha/ganesha_PNG34.png" : lakshmiImg}
                  alt="Divine Presence"
                  style={{ height: '420px', width: 'auto', objectFit: 'contain', filter: 'saturate(1.2) contrast(1.1)' }}
                />
              </motion.div>

              <h2 className="bangla-text shimmer-text" style={{ fontSize: '5rem', color: 'white', marginBottom: '2.5rem', fontWeight: 300 }}>
                {activeBlessing === 'ganesha' ? 'গণেশ আশীর্বাদ' : 'লক্ষ্মী আশীর্বাদ'}
              </h2>
              <div style={{ height: '2px', width: '80px', background: 'var(--accent-color)', margin: '0 auto 3rem', opacity: 0.5 }} />

              <p style={{ fontSize: '2rem', color: 'white', opacity: 0.9, lineHeight: 1.7, marginBottom: '5rem', fontWeight: 300, maxWidth: '650px', marginInline: 'auto' }}>
                {activeBlessing === 'ganesha'
                  ? "আপনার জীবনের সকল পথের কাঁটা দূর হোক। নতুন বছরের প্রতিটি পদক্ষেপে আসুক সিদ্ধি ও শান্তি।"
                  : "আপনার অন্দরমহলে বিরাজ করুক সুখ, শান্তি এবং চিরস্থায়ী ঐশ্বর্য। শুভ নববর্ষের মঙ্গলকামনা রইল।"}
              </p>
              <motion.button
                className="btn-premium"
                onClick={() => setActiveBlessing(null)}
                whileHover={{ scale: 1.05, letterSpacing: '2px' }}
                style={{ padding: '2rem 7rem', fontSize: '1.6rem', borderRadius: '100px' }}
              >
                Receive Blessing <Sparkles size={28} />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const BlessingCard = ({ title, subtitle, img, onClick, color, icon }) => (
  <motion.div
    onClick={onClick}
    className="glass-panel texture-paper"
    style={{
      padding: '5rem 3rem',
      background: 'rgba(255,255,255,0.02)',
      borderColor: 'rgba(255,255,255,0.05)', cursor: 'pointer',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      position: 'relative', overflow: 'hidden'
    }}
    whileHover={{
      y: -15,
      borderColor: `${color}88`,
      background: 'rgba(255,255,255,0.05)',
      boxShadow: `0 30px 60px ${color}22`
    }}
    whileTap={{ scale: 0.98 }}
  >
    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: color, opacity: 0.6 }}>
      {icon}
    </div>

    <div style={{ height: '320px', marginBottom: '3rem', position: 'relative' }}>
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ position: 'absolute', inset: 0, background: color, borderRadius: '50%', filter: 'blur(40px)', zIndex: -1 }}
      />
      <img src={img} alt={title} style={{ height: '100%', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }} />
    </div>

    <h3 className="bangla-text" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ color: color, opacity: 0.8, fontSize: '1.2rem', marginBottom: '3rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>{subtitle}</p>

    <div style={{
      padding: '1rem 3rem', background: color,
      borderRadius: '50px', color: 'white', fontWeight: 900,
      display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem',
      boxShadow: `0 15px 30px ${color}44`, textTransform: 'uppercase', letterSpacing: '1px'
    }}>
      Seek Blessings <Star size={20} fill="currentColor" />
    </div>
  </motion.div>
);

export default Experience;
