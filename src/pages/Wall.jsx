import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Heart, Star, Share2, Trash2, MessageCircle, 
  Sparkles, User, PenTool, Globe, Zap, 
  Wand2, Flower2
} from 'lucide-react';
import wallBg from '../../h.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.5 } 
  },
  exit: { opacity: 0 }
};

const cardVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, y: 0, scale: 1, rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
  hover: { 
    y: -15, scale: 1.05,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  floating: {
    y: [0, -15, 0],
    rotate: [0, 1, -1, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

const Wall = () => {
  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('shubho_wishes_v3');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, name: "Sayan Banerjee", text: "শুভ নববর্ষ! ১৪৩১ আপনার জীবনে ভরে উঠুক খুশিতে।", enText: "Happy New Year! May 1431 bring boundless joy to your life.", reactions: { love: 124, bless: 15 }, timestamp: "Just now", color: "rgba(255, 134, 134, 0.05)" },
      { id: 2, name: "Ishita Roy", text: "নতুন বছরের প্রতিটি ক্ষণ হোক স্মৃতিমধুর ও উজ্জ্বল।", enText: "May every moment of the new year be sweet and bright.", reactions: { love: 89, bless: 42 }, timestamp: "2 mins ago", color: "rgba(134, 185, 255, 0.05)" },
      { id: 3, name: "Joydeep Dutta", text: "পান্তা আর ইলিশের গন্ধে মুখরিত হোক আপনার ঘর।", enText: "Let the aroma of Panta and Ilish fill your home with happiness.", reactions: { love: 256, bless: 88 }, timestamp: "5 mins ago", color: "rgba(255, 219, 134, 0.05)" }
    ];
  });

  const [newWish, setNewWish] = useState('');
  const [newEnWish, setNewEnWish] = useState('');
  const [newName, setNewName] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    localStorage.setItem('shubho_wishes_v3', JSON.stringify(wishes));
  }, [wishes]);

  const handleMouseMove = useCallback((e) => {
    setMousePos({
      x: (e.clientX - window.innerWidth / 2) / 50,
      y: (e.clientY - window.innerHeight / 2) / 50
    });
  }, []);

  const handlePost = async () => {
    if ((newWish.trim() || newEnWish.trim()) && newName.trim()) {
      setIsPosting(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const newEntry = { 
          id: Date.now(), 
          name: newName,
          text: newWish || "শুভেচ্ছা রইল!", 
          enText: newEnWish || "Best Wishes!",
          reactions: { love: 0, bless: 0 },
          timestamp: "Just now",
          color: `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.04)`
      };
      setWishes([newEntry, ...wishes]);
      setNewWish('');
      setNewEnWish('');
      setNewName('');
      setIsPosting(false);
    }
  };

  const handleReaction = (id, type) => {
    setWishes(wishes.map(w => {
      if (w.id === id) {
        return { ...w, reactions: { ...w.reactions, [type]: w.reactions[type] + 1 } };
      }
      return w;
    }));
  };

  return (
    <motion.div 
      className="page-container texture-paper"
      variants={containerVariants}
      initial="hidden" animate="visible" exit="exit"
      onMouseMove={handleMouseMove}
      style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden', padding: 0 }}
    >
      {/* Dynamic Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: mousePos.x * -1,
            y: mousePos.y * -1
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ 
            position: 'absolute', inset: -40,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url(${wallBg})`,
            backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(1.1)'
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, black 100%)', opacity: 0.8 }} />
      </div>

      {/* Falling Marigold Petals */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            initial={{ 
              top: -50, 
              left: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
              opacity: 0 
            }}
            animate={{ 
              top: '120%',
              left: `${(Math.random() * 20 - 10) + (i * 3.3)}%`,
              rotate: 720,
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear"
            }}
            style={{ 
              position: 'absolute', 
              fontSize: `${Math.random() * 1 + 1}rem`,
              filter: 'drop-shadow(0 0 10px rgba(255,179,0,0.5))'
            }}
          >
            {['🌸', '🏵️', '✨', '🍂'][i % 4]}
          </motion.div>
        ))}
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '8rem 2rem' }}>
        {/* Bilingual Header */}
        <motion.div variants={cardVariants} style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <motion.h1 
              className="bangla-text shimmer-text"
              style={{ fontSize: 'clamp(5rem, 15vw, 10rem)', color: 'white', position: 'relative', zIndex: 1 }}
            >
              শুভেচ্ছা দেওয়াল
            </motion.h1>
            <motion.div 
              style={{ position: 'absolute', inset: 0, background: 'var(--accent-color)', filter: 'blur(80px)', opacity: 0.15, zIndex: 0 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
             <p style={{ fontSize: '1.4rem', color: 'var(--accent-color)', letterSpacing: '12px', fontWeight: 900, textTransform: 'uppercase' }}>
              The Wall of Whispers
            </p>
            <div style={{ width: '80px', height: '2px', background: 'var(--accent-color)', opacity: 0.5 }} />
            <p style={{ color: 'white', opacity: 0.6, fontSize: '1.1rem', letterSpacing: '4px', textTransform: 'uppercase', maxWidth: '600px', lineHeight: 1.6 }}>
              A sanctuary for shared destinies, where every word becomes a star in the Bengali celebration.
            </p>
          </div>
        </motion.div>

        {/* Premium Input Section */}
        <motion.div 
          variants={cardVariants}
          className="glass-panel"
          style={{ 
            maxWidth: '1000px', margin: '0 auto 12rem', padding: '5rem',
            background: 'rgba(20,20,20,0.4)', borderRadius: '40px',
            border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 80px 150px rgba(0,0,0,0.9)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent-color)', marginBottom: '1.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
                <User size={18} /> Identification / পরিচয়
              </label>
              <input 
                type="text" value={newName} onChange={e => setNewName(e.target.value)}
                placeholder="Name / আপনার নাম লিখুন..."
                style={{ width: '100%', padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', color: 'white', fontSize: '1.2rem', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent-color)', marginBottom: '1.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
                <PenTool size={18} /> Bengali / বাংলা শুভেচ্ছা
              </label>
              <textarea 
                value={newWish} onChange={e => setNewWish(e.target.value)}
                placeholder="নতুন বছরের শুভেচ্ছা..."
                style={{ width: '100%', height: '150px', padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', color: 'white', fontSize: '1.2rem', outline: 'none', resize: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent-color)', marginBottom: '1.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
                <Globe size={18} /> English / English Wish
              </label>
              <textarea 
                value={newEnWish} onChange={e => setNewEnWish(e.target.value)}
                placeholder="Write in English..."
                style={{ width: '100%', height: '150px', padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', color: 'white', fontSize: '1.2rem', outline: 'none', resize: 'none' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.button 
              className="btn-premium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePost}
              disabled={isPosting || (!newWish && !newEnWish) || !newName}
              style={{ padding: '2rem 10rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
            >
              {isPosting ? 'Sending to Cosmos...' : 'Imprint Wish'}
              {isPosting ? <Sparkles className="rotate" /> : <Send size={24} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Wishes Wall */}
        <div style={{ columnCount: 'auto', columnWidth: '420px', columnGap: '3rem' }}>
          <AnimatePresence mode="popLayout">
            {wishes.map((wish) => (
              <motion.div
                key={wish.id}
                variants={cardVariants}
                initial="hidden" animate={["visible", "floating"]} exit={{ opacity: 0, scale: 0.5 }}
                whileHover="hover"
                style={{ 
                  breakInside: 'avoid', marginBottom: '3rem',
                  padding: '4rem', borderRadius: '35px',
                  background: wish.color, backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                  position: 'relative', overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.2 }}>
                  <Sparkles size={24} color="var(--accent-color)" />
                </div>
                
                <div style={{ marginBottom: '3rem' }}>
                   <p className="bangla-text" style={{ fontSize: '2rem', color: 'white', lineHeight: 1.4, marginBottom: '1.5rem', fontWeight: 300 }}>
                    “{wish.text}”
                  </p>
                  <p style={{ fontSize: '1.1rem', color: 'white', opacity: 0.5, fontStyle: 'italic', fontWeight: 300 }}>
                    {wish.enText}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
                      <User size={24} />
                    </div>
                    <div>
                      <p style={{ color: 'white', fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{wish.name}</p>
                      <p style={{ color: 'var(--accent-color)', fontSize: '0.8rem', opacity: 0.8 }}>{wish.timestamp}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <button 
                      onClick={() => handleReaction(wish.id, 'love')}
                      style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
                    >
                      <Heart size={22} fill={wish.reactions.love > 0 ? "#ff3366" : "none"} color={wish.reactions.love > 0 ? "#ff3366" : "currentColor"} />
                      <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>{wish.reactions.love}</span>
                    </button>
                    <button 
                      onClick={() => handleReaction(wish.id, 'bless')}
                      style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
                    >
                      <Zap size={22} fill={wish.reactions.bless > 0 ? "var(--accent-color)" : "none"} color={wish.reactions.bless > 0 ? "var(--accent-color)" : "currentColor"} />
                      <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>{wish.reactions.bless}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <motion.footer 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        style={{ padding: '8rem 2rem', textAlign: 'center', color: 'white', opacity: 0.2 }}
      >
        <p style={{ letterSpacing: '10px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Shubho Noboborsho • The Eternal Archive</p>
      </motion.footer>
    </motion.div>
  );
};

export default Wall;
