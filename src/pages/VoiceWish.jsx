import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Quote, Sparkles, ChevronRight, Music, Mic, Compass, ArrowRight, BookOpen, Volume2, Award, Feather, Globe, PlayCircle, X, Star } from 'lucide-react';
import poBg from '../../t.jpg';
import rnBg from '../../rn.jpg';
import noBg from '../../no.jpg';

const tagoreQuotes = [
  { text: "যদি তোর ডাক শুনে কেউ না আসে, তবে একলা চলো রে", english: "If no one responds to your call, then go forth alone." },
  { text: "বিশ্বাসে মিলায় বস্তু, তর্কে বহুদূর", english: "Faith is the bird that feels the light when the dawn is still dark." },
  { text: "আলো আমার আলো, ওগো আলোয় ভুবন ভরা", english: "Light, my light, the world-filling light." },
  { text: "আনন্দধারা বহিছে ভুবনে", english: "The stream of joy flows through the universe." },
  { text: "মন মোর মেঘের সঙ্গী, উড়ে চলে দিগন্তের পানে", english: "My mind is a companion of the clouds, flying towards the horizon." },
  { text: "বরিষ ধরা-মাঝে শান্তির বারি", english: "Shower the earth with the rain of peace." },
  { text: "যে তোমায় ছাড়ে ছাড়ুক, আমি তোমায় ছাড়ব না", english: "Let them leave who will, I shall never leave you." }
];

const achievements = [
  { icon: <Award size={32} />, title: "Nobel Laureate", logo: noBg, desc: "First non-European to win the Nobel Prize in Literature (1913).", details: "Tagore's 'Gitanjali' (Song Offerings) fascinated the western world with its profoundly sensitive, fresh and beautiful verse. He introduced Indian culture to the West and vice versa, becoming a global voice of spiritual heritage." },
  { icon: <Feather size={32} />, title: "The Bard of Bengal", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rabindranath_Tagore.jpg/330px-Rabindranath_Tagore.jpg", desc: "Author of Gitanjali and the national anthems of two nations.", details: "Affectionately known as Gurudev, he reshaped Bengali literature and music. His compositions span across hundreds of novels, essays, short stories, travelogues, dramas, and over two thousand songs known as Rabindra Sangeet." },
  { icon: <Globe size={32} />, title: "Universal Philospher", logo: rnBg, desc: "Founded Visva-Bharati University, a bridge between East and West.", details: "He founded a unique educational institution in Santiniketan, challenging conventional classroom education. His philosophy emphasized humanity's deep connection with nature and the absolute freedom of the mind." }
];

const VoiceWish = () => {
  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showJourney, setShowJourney] = useState(false);
  const [hasReceivedBlessing, setHasReceivedBlessing] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % tagoreQuotes.length);
  };

  const speakQuote = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(tagoreQuotes[index].text);
      utterance.lang = 'bn-IN';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  }, [index]);

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX - window.innerWidth / 2) / 50,
      y: (e.clientY - window.innerHeight / 2) / 50
    });
  };

  return (
    <div 
      className="page-container" 
      onMouseMove={handleMouseMove}
      style={{ background: '#050505', color: 'white', overflowX: 'hidden' }}
    >
      {/* Dynamic Cinematic Background */}
      <motion.div 
        style={{ 
          position: 'fixed', inset: 0, zIndex: 0, y: backgroundY,
          backgroundImage: `linear-gradient(rgba(20,20,20,0.3), rgba(10,10,10,0.5)), url(${poBg})`,
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(1.15) contrast(1.15) saturate(1.1)'
        }}
        animate={{ 
          scale: [1, 1.05, 1],
          x: mousePos.x * -0.5,
          y: mousePos.y * -0.5
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Elements */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ 
              y: [0, -100, 0], 
              opacity: [0, 0.3, 0], 
              rotate: 360,
              scale: [0.5, 1, 0.5]
            }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: i * 2 }}
            style={{ position: 'absolute', color: 'var(--accent-color)', fontSize: '1.5rem', filter: 'blur(2px)' }}
          >
            {['✨', '🌸', '📜', '🍃'][i % 4]}
          </motion.div>
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* HERO SECTION - QUOTES */}
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 20px' }}>
          <motion.div 
            style={{ opacity, scale, textAlign: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '4rem' }}>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ position: 'absolute', inset: -50, background: 'var(--accent-color)', borderRadius: '50%', filter: 'blur(80px)', zIndex: -1 }}
              />
              <motion.img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rabindranath_Tagore.jpg/330px-Rabindranath_Tagore.jpg" 
                alt="Rabindranath Tagore"
                style={{ width: '240px', height: '240px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.8)' }}
                whileHover={{ scale: 1.05 }}
              />
              <motion.div 
                onClick={speakQuote}
                animate={isSpeaking ? { scale: [1, 1.2, 1] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
                style={{ position: 'absolute', bottom: '20px', right: '0', background: 'var(--accent-color)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
              >
                <Volume2 size={30} fill={isSpeaking ? "currentColor" : "none"} />
              </motion.div>
            </div>

            <h1 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', marginBottom: '1rem' }}>রবীন্দ্রনাথের অমর্ত্য বাণী</h1>
            <p style={{ color: 'var(--accent-color)', letterSpacing: '8px', fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase', opacity: 0.8 }}>The Immortal Verses of Tagore</p>
          </motion.div>

          <motion.div 
            className="glass-panel"
            style={{ 
              maxWidth: '1000px', width: '90%', marginTop: '5rem', padding: '8rem 5rem', 
              background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)', borderRadius: '40px',
              position: 'relative', overflow: 'hidden'
            }}
          >
            <Quote style={{ position: 'absolute', top: '2rem', left: '2rem', color: 'var(--accent-color)', opacity: 0.1, width: '80px', height: '80px' }} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center' }}
              >
                <h2 className="bangla-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.4, color: '#fff', marginBottom: '2rem', fontWeight: 300 }}>
                  "{tagoreQuotes[index].text}"
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', italic: 'true', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                  {tagoreQuotes[index].english}
                </p>
                <div style={{ height: '1px', width: '150px', background: 'linear-gradient(to right, transparent, var(--accent-color), transparent)', margin: '0 auto' }} />
              </motion.div>
            </AnimatePresence>

            <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                onClick={nextQuote}
                className="btn-premium"
                style={{ padding: '1.5rem 4rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <span className="bangla-text" style={{ fontSize: '1.4rem' }}>পরবর্তী বাণী</span> <ArrowRight size={24} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ marginTop: '5rem', opacity: 0.5, cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <p style={{ fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem' }}>Scroll to Explore the Legend</p>
            <div style={{ width: '20px', height: '35px', border: '2px solid white', borderRadius: '10px', margin: '0 auto', position: 'relative' }}>
              <motion.div 
                animate={{ top: [5, 20, 5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ width: '4px', height: '8px', background: 'white', borderRadius: '2px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
              />
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION - THE LEGEND */}
        <section style={{ minHeight: '100vh', padding: '150px 20px', position: 'relative', overflow: 'hidden' }}>
          {/* Subtle Ambient Glow */}
          <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,179,0,0.05), transparent 70%)', filter: 'blur(80px)' }} />
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ textAlign: 'center', marginBottom: '120px' }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 10 }}
                style={{ display: 'inline-block', marginBottom: '2rem' }}
              >
                <Feather size={60} color="var(--accent-color)" opacity={0.6} />
              </motion.div>
              <h2 className="shimmer-text" style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', marginBottom: '30px', fontWeight: 300 }}>The Soul of Bengal</h2>
              <motion.div
                className="glass-panel"
                style={{ 
                  display: 'inline-block', 
                  padding: '3rem 5rem', 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,179,0,0.1)',
                  borderRadius: '30px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(20px)',
                  marginTop: '2rem'
                }}
              >
                <p style={{ fontSize: '1.6rem', color: '#fff', maxWidth: '850px', margin: '0 auto', lineHeight: 1.8, fontWeight: 300, fontStyle: 'italic' }}>
                  <strong style={{ fontWeight: 900 }}>"Everything comes to us that belongs to us if we create the capacity to receive it."</strong>
                  <br />
                  <span style={{ fontSize: '1rem', color: 'var(--accent-color)', letterSpacing: '6px', marginTop: '25px', display: 'block', fontStyle: 'normal', fontWeight: 900 }}>— RABINDRANATH TAGORE</span>
                </p>
              </motion.div>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginTop: '4rem' }}>
              {achievements.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ 
                    y: -20, 
                    boxShadow: `0 30px 60px rgba(0,0,0,0.6), 0 0 30px rgba(var(--accent-color-rgb), 0.15)`
                  }}
                  onClick={() => setSelectedAchievement(item)}
                  className="glass-panel"
                  style={{ 
                    padding: '5rem 4rem', 
                    background: 'rgba(255,255,255,0.01)', 
                    border: '1px solid rgba(255,255,255,0.05)', 
                    borderRadius: '50px',
                    backdropFilter: 'blur(30px)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Subtle Gradient Hover Border */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{ position: 'absolute', inset: 0, border: '2px solid transparent', borderRadius: '50px', borderImage: 'linear-gradient(to bottom right, var(--accent-color), transparent) 1', zIndex: 0, opacity: 0.2 }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      style={{ color: 'var(--accent-color)', marginBottom: '3rem', filter: 'drop-shadow(0 0 10px rgba(255,179,0,0.3))' }}
                    >
                      {item.icon}
                    </motion.div>
                    
                    <span className="bangla-text" style={{ display: 'block', fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1rem', opacity: 0.7, fontWeight: 900 }}>
                      {i === 0 ? "নোবেল বিজয়ী" : i === 1 ? "বিশ্বকবি" : "বিশ্বমানবতা"}
                    </span>
                    
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white', fontWeight: 300, letterSpacing: '1px' }}>{item.title}</h3>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginTop: '180px', display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}
            >
              <div style={{ flex: '1.2', minWidth: '320px' }}>
                <span style={{ color: 'var(--accent-color)', letterSpacing: '6px', fontWeight: 900, fontSize: '0.9rem' }}>HIS PHILOSOPHY</span>
                <h3 className="bangla-text" style={{ fontSize: '4rem', color: '#fff', margin: '2rem 0', lineHeight: 1.2 }}>বিশ্বমানবতার রূপকার</h3>
                <p style={{ fontSize: '1.25rem', lineHeight: 2.2, color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
                  Rabindranath Tagore's journey was a quest for universal harmony. He believed that education should not just give us information but make our life in harmony with all existence. His songs, known as <span style={{ color: 'var(--accent-color)' }}>Rabindra Sangeet</span>, are the heartbeat of every Bengali home.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, gap: '1.5rem', boxShadow: '0 0 30px rgba(var(--accent-color-rgb), 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowJourney(true)}
                  style={{ 
                    marginTop: '4rem', 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,179,0,0.3)', 
                    color: 'var(--accent-color)', 
                    padding: '1.5rem 3.5rem',
                    borderRadius: '100px',
                    fontSize: '1.1rem', 
                    fontWeight: 900, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    cursor: 'pointer', 
                    letterSpacing: '2px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  LEARN ABOUT HIS FULL JOURNEY <ArrowRight size={24} />
                </motion.button>
              </div>
              <div style={{ flex: '1', minWidth: '320px', position: 'relative' }}>
                <div style={{ padding: '30px', background: 'rgba(255,255,255,0.01)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(30px)' }}>
                  <img 
                    src="../../g.jpg" 
                    alt="Poetic parchment" 
                    style={{ width: '100%', borderRadius: '20px', filter: 'sepia(0.2) contrast(1.1) brightness(1.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
                  />
                </div>
                {/* Floating badge */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  style={{ position: 'absolute', top: '-40px', right: '-20px', background: '#fff', color: '#000', padding: '1.5rem 2rem', borderRadius: '15px', fontWeight: 900, fontSize: '0.8rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                >
                  BARD OF BENGAL
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>



        {/* FOOTER QUOTE */}
        <footer style={{ padding: '100px 20px', textAlign: 'center', background: 'transparent' }}>
          <Feather size={48} color="var(--accent-color)" style={{ marginBottom: '3rem', opacity: 0.5 }} />
          <h4 style={{ fontSize: '1.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300, fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
            <strong style={{ fontWeight: 900, color: '#fff' }}>"Everything comes to us that belongs to us if we create the capacity to receive it."</strong>
          </h4>
          <div style={{ marginTop: '4rem', opacity: 0.3, display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <Music size={20} />
            <Sparkles size={20} />
            <Compass size={20} />
          </div>
        </footer>
      </div>

      {/* FULL JOURNEY MODAL/OVERLAY */}
      <AnimatePresence>
        {showJourney && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', inset: 0, zIndex: 1000, 
              background: '#050505', overflowY: 'auto'
            }}
          >
            {/* Modal Background with Ken Burns */}
            <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 40, repeat: Infinity }}
                style={{ 
                  position: 'absolute', inset: 0, 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1544413647-152436de55d1?q=80&w=2000&auto=format&fit=crop")',
                  backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.5) contrast(1.2) sepia(0.2)'
                }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent, #050505 80%)' }} />
            </div>

            <div style={{ padding: '100px 20px' }}>
              {/* Close Button */}
            <motion.div 
              onClick={() => setShowJourney(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              style={{ position: 'fixed', top: '40px', right: '40px', cursor: 'pointer', color: 'white', zIndex: 1001, background: 'rgba(255,255,255,0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Compass size={32} />
            </motion.div>

            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ textAlign: 'center', marginBottom: '8rem' }}
              >
                <h1 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '2rem' }}>জীবনস্মৃতি</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--accent-color)', letterSpacing: '10px', textTransform: 'uppercase', fontWeight: 900 }}>The Full Journey of Rabindranath</p>
                <div style={{ height: '2px', width: '100px', background: 'var(--accent-color)', margin: '3rem auto', opacity: 0.3 }} />
              </motion.div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
                {/* 1. Family Background */}
                <JourneySection 
                  icon="🧬" num="১" title="Family Background & Childhood" banglaTitle="পারিবারিক পটভূমি"
                  themeColor="#ffb300"
                  content={[
                    "Born into the Tagore family, one of the most influential cultural families in Bengal.",
                    "Father: Debendranath Tagore (a religious reformer).",
                    "Mother: Sarada Devi.",
                    "His family was deeply connected with the Brahmo Samaj, which influenced his thinking."
                  ]}
                  highlight="Tagore disliked formal schooling and believed it restricted creativity. Most of his learning came from nature, personal reading, and life experience."
                />

                {/* 2. Literary Career */}
                <JourneySection 
                  icon="✍️" num="২" title="Literary Career (In Depth)" banglaTitle="সাহিত্য জীবন"
                  themeColor="#3949ab"
                  content={[
                    "Tagore revolutionized Bengali literature by making it modern, emotional, and universal.",
                    "📜 Poetry: focus on love, nature, spirituality. Gitanjali is his most famous work.",
                    "📖 Novels: Ghare-Baire (nationalism), Gora (identity), Chokher Bali (relationships).",
                    "🧾 Short Stories: Father of modern Bengali short stories. Kabuliwala is a timeless classic.",
                    "🎭 Drama: Combined music, dance, and drama (Dak Ghar, Raktakarabi)."
                  ]}
                />

                {/* 3. Music & Art */}
                <JourneySection 
                  icon="🎶" num="৩" title="Music & Art" banglaTitle="সঙ্গীত ও শিল্প"
                  themeColor="#ff9800"
                  content={[
                    "Created Rabindra Sangeet, combining classical Indian music and folk traditions.",
                    "His songs are the heartbeat of every Bengali soul.",
                    "🖌️ He started painting at age 60 and became an internationally recognized artist."
                  ]}
                />

                {/* 4. Political Views */}
                <JourneySection 
                  icon="🏛️" num="৪" title="Political Views & Nationalism" banglaTitle="রাজনৈতিক চিন্তা"
                  themeColor="#d32f2f"
                  content={[
                    "Supported freedom but warned against extreme/blind nationalism.",
                    "Returned his Knighthood after the Jallianwala Bagh Massacre in protest.",
                    "A symbol of moral resistance against British rule."
                  ]}
                />

                {/* 5. Education Philosophy */}
                <JourneySection 
                  icon="🏫" num="৫" title="Education Philosophy" banglaTitle="শিক্ষা দর্শন"
                  themeColor="#2e7d32"
                  content={[
                    "Believed learning should be joyful and connected with nature.",
                    "Founded Visva-Bharati University in Santiniketan.",
                    "A bridge between global culture and Indian tradition."
                  ]}
                />

                {/* Exclusive Nobel Prize Showcase */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-panel"
                  style={{ 
                    padding: '0', 
                    display: 'flex', 
                    flexWrap: 'wrap-reverse', 
                    background: 'linear-gradient(135deg, rgba(255,179,0,0.05), rgba(0,0,0,0.6))',
                    border: '1px solid rgba(255,179,0,0.2)',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
                  }}
                >
                  <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '6rem 5rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,179,0,0.1)', border: '1px solid rgba(255,179,0,0.2)', width: 'fit-content', padding: '1rem 2.5rem', borderRadius: '100px', color: '#ffb300', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '2rem' }}>
                      <Award size={24} /> 1913
                    </div>
                    <h3 style={{ fontSize: '4rem', color: 'white', fontWeight: 300, marginBottom: '2rem', lineHeight: 1.1 }}>The Nobel Prize in Literature</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.4rem', lineHeight: 1.8 }}>
                      Tagore became the very first Asian, and first non-European, to win the Nobel Prize. He was globally honored for his profoundly sensitive, fresh, and beautiful verse in <strong style={{ color: 'var(--accent-color)' }}>Gitanjali (Song Offerings)</strong>, which brought his poetic thought deeply into Western literature.
                    </p>
                  </div>
                  <div style={{ flex: '1 1 300px', minHeight: '400px', position: 'relative', overflow: 'hidden', background: '#111' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.9), transparent, rgba(0,0,0,0.2))', zIndex: 1 }} />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Nobel_Prize.png/800px-Nobel_Prize.png" 
                      alt="Nobel Prize Medal" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.1) contrast(1.2)' }} 
                    />
                  </div>
                </motion.div>

                {/* 6-8. Influence, Philosophy, Legacy */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                  <SmallJourneyCard title="International Influence" content="Traveled across the globe, exchanging profound ideas with luminaries like Albert Einstein and Mahatma Gandhi." icon="🌍" themeColor="#0288d1" />
                  <SmallJourneyCard title="Philosophy" content="Championed universal humanism, a deep spiritual connection with nature, and absolute freedom of expression." icon="💡" themeColor="#4caf50" />
                  <SmallJourneyCard title="Death & Legacy" content="Passed away on 7 August 1941, leaving an eternal artistic legacy that continues to define Bengali culture." icon="⚰️" themeColor="#9e9e9e" />
                </div>

                {/* 10. Quotes */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-panel"
                  style={{ 
                    padding: '8rem 4rem', textAlign: 'center', background: 'rgba(255,179,0,0.03)', 
                    border: '1px solid rgba(255,179,0,0.1)', borderRadius: '40px', position: 'relative', overflow: 'hidden'
                  }}
                >
                  <Quote size={120} style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', opacity: 0.05, color: '#ffb300' }} />
                  <h3 className="bangla-text" style={{ fontSize: '4.5rem', marginBottom: '4rem', color: 'var(--accent-color)', position: 'relative', zIndex: 1 }}>অমর বাণী</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative', zIndex: 1 }}>
                    {["“You can’t cross the sea merely by standing and staring at the water.”", "“Faith is the bird that feels the light when the dawn is still dark.”", "“Where the mind is without fear and the head is held high...”"].map((q, i) => (
                      <p key={i} style={{ fontSize: '1.8rem', fontStyle: 'italic', color: 'white', opacity: 0.9, lineHeight: 1.6 }}>{q}</p>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(255,179,0,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowJourney(false)}
                  className="btn-premium"
                  style={{ 
                    margin: '8rem auto 0', padding: '1.5rem 4rem', borderRadius: '100px',
                    background: 'linear-gradient(45deg, var(--accent-color), #ff6f00)',
                    color: '#000', fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase', 
                    letterSpacing: '4px', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '1rem'
                  }}
                >
                  RETURN TO THE GARDEN <ChevronRight size={24} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
      {/* ACHIEVEMENTS MODAL */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(5,5,5,0.85)', backdropFilter: 'blur(40px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
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
                background: 'linear-gradient(135deg, rgba(30,30,30,0.6) 0%, rgba(10,10,10,0.9) 100%)', 
                borderRadius: '40px', 
                border: '1px solid rgba(255,179,0,0.2)', 
                boxShadow: '0 40px 100px -20px rgba(0,0,0,1), inset 0 0 50px rgba(255,179,0,0.05)',
                textAlign: 'center', position: 'relative', overflow: 'hidden'
              }}
            >
              {/* Sacred Background Flare */}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '150%', height: '5px', background: 'radial-gradient(ellipse, var(--accent-color) 0%, transparent 70%)' }} />
              
              <button 
                onClick={() => setSelectedAchievement(null)}
                style={{ 
                  position: 'absolute', top: '2rem', right: '2rem', 
                  background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', 
                  cursor: 'pointer', zIndex: 10, transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent-color)'; e.currentTarget.style.transform = 'scale(1.2)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <X size={32} strokeWidth={1.5} />
              </button>

              <div style={{ marginBottom: '4rem', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                 <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', inset: -40, background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 60%)', borderRadius: '50%', filter: 'blur(50px)', zIndex: 0 }}
                 />
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', width: '140px', height: '140px', border: '1px dashed rgba(255,179,0,0.4)', borderRadius: '50%', zIndex: 0 }}
                 />
                 <div style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))', color: 'var(--accent-color)' }}>
                    {selectedAchievement.logo ? (
                      <div style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', boxShadow: 'insert 0 0 20px rgba(255,179,0,0.2)' }}>
                        <img src={selectedAchievement.logo} alt={selectedAchievement.title} style={{ width: '100px', height: '100px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))', borderRadius: selectedAchievement.title === "The Bard of Bengal" ? '50%' : '0' }} />
                      </div>
                    ) : (
                      React.cloneElement(selectedAchievement.icon, { size: 60 })
                    )}
                 </div>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="bangla-text shimmer-text" style={{ fontSize: '4.5rem', marginBottom: '2rem', color: 'white', lineHeight: 1.2 }}>
                  {selectedAchievement.title === "Nobel Laureate" ? "নোবেল বিজয়ী" : selectedAchievement.title === "The Bard of Bengal" ? "বিশ্বকবি" : "বিশ্বমানবতা"}
                </h2>
                
                <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '2.5rem', fontWeight: 300, letterSpacing: '4px', textTransform: 'uppercase' }}>
                  {selectedAchievement.title}
                </h3>
                
                <div style={{ height: '1px', width: '80%', background: 'linear-gradient(90deg, transparent, rgba(255,179,0,0.3), transparent)', margin: '0 auto 2.5rem' }} />

                <p style={{ fontSize: '1.4rem', lineHeight: 1.8, marginBottom: '2rem', color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>
                  {selectedAchievement.desc}
                </p>

                <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '5rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
                  {selectedAchievement.details}
                </p>
                
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,179,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAchievement(null)}
                  style={{ 
                    width: '100%', padding: '1.8rem', fontSize: '1.3rem', 
                    borderRadius: '100px', background: 'linear-gradient(135deg, var(--accent-color), #ff8c00)',
                    color: 'black', fontWeight: 900, border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
                    letterSpacing: '2px', textTransform: 'uppercase'
                  }}
                >
                  Embrace the Legacy <Sparkles size={24} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const JourneySection = ({ icon, num, title, banglaTitle, content, highlight, themeColor }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="glass-panel"
    style={{ 
      padding: '6rem 5rem', 
      position: 'relative', 
      overflow: 'hidden',
      background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(${hexToRgb(themeColor)}, 0.05) 100%)`,
      borderColor: `rgba(${hexToRgb(themeColor)}, 0.2)`
    }}
  >
    {/* Artistic Background Glow */}
    <div style={{ 
      position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', 
      background: themeColor, filter: 'blur(150px)', opacity: 0.1, zIndex: 0 
    }} />

    <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', fontSize: '15rem', opacity: 0.05, fontWeight: 900, pointerEvents: 'none', color: themeColor, zIndex: 0 }}>
      {num}
    </div>
    
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
        <span style={{ fontSize: '3.5rem', filter: `drop-shadow(0 0 10px ${themeColor})` }}>{icon}</span>
        <div>
          <h4 className="bangla-text" style={{ fontSize: '2rem', color: themeColor, opacity: 0.8 }}>{banglaTitle}</h4>
          <h3 style={{ fontSize: '2.8rem', color: 'white', fontWeight: 300 }}>{title}</h3>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {content.map((p, i) => (
          <p key={i} style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>• {p}</p>
        ))}
      </div>
      {highlight && (
        <div style={{ 
          marginTop: '3rem', padding: '2.5rem', 
          background: `rgba(${hexToRgb(themeColor)}, 0.1)`, 
          borderLeft: `4px solid ${themeColor}`, 
          borderRadius: '0 15px 15px 0' 
        }}>
          <p style={{ fontSize: '1.25rem', color: 'white', fontStyle: 'italic' }}>{highlight}</p>
        </div>
      )}
    </div>
  </motion.div>
);

const SmallJourneyCard = ({ title, content, icon, themeColor }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-panel"
    style={{ 
      padding: '4rem 3rem',
      background: `linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(${hexToRgb(themeColor)}, 0.03) 100%)`,
      borderColor: `rgba(${hexToRgb(themeColor)}, 0.15)`
    }}
  >
    <div style={{ fontSize: '3rem', marginBottom: '2rem', filter: `drop-shadow(0 0 10px ${themeColor})` }}>{icon}</div>
    <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem', fontWeight: 300 }}>{title}</h3>
    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{content}</p>
  </motion.div>
);

// Helper to convert hex to rgb
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '255, 255, 255';
};

export default VoiceWish;
