import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Plus, Printer, CheckCircle, ArrowLeft, History, Sparkles, Star, Compass } from 'lucide-react';
import ritualBg from '../../bg.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.5 } 
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  }
};

const ledgerVariants = {
  hidden: { opacity: 0, rotateY: -90, scale: 0.8, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: "easeOut" }
  },
  exit: { opacity: 0, rotateY: 90, scale: 0.8, filter: 'blur(10px)', transition: { duration: 0.5 } }
};

const HaalKhata = () => {
  const [entries, setEntries] = useState([
    { id: 1, name: "শুভ ব্যবসার সূচনা (Business Start)", amount: "৳৫০০০১/", type: "credit" }
  ]);
  const [stage, setStage] = useState('cover'); // cover, ledger

  const handleAddEntry = () => {
    const newEntry = {
      id: Date.now(),
      name: "নতুন লেনদেন (New Transaction)",
      amount: "৳" + (Math.floor(Math.random() * 90000) + 10000) + "/",
      type: "credit"
    };
    setEntries([...entries, newEntry]);
  };

  return (
    <motion.div 
      className="page-container texture-paper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem', overflow: 'hidden' }}
    >
      {/* Cinematic Ken Burns Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [0, 1, 0, -1, 0] }} 
          transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', inset: -60,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${ritualBg})`,
            backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(1.1) brightness(0.9)'
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%)' }} />
      </div>

      {/* Ritual Floating Elements */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ top: -50, left: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ 
              top: '110%', opacity: [0, 0.6, 0.6, 0], rotate: [0, 720], scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 12 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
            style={{ position: 'absolute', fontSize: '2rem', filter: 'blur(1px)' }}
          >
            {['🌸', '☸️', '✨', '🏵️', '🎐'][i % 5]}
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {stage === 'cover' ? (
          <motion.div 
            key="cover"
            variants={itemVariants}
            style={{ textAlign: 'center', zIndex: 10, position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <motion.div 
              className="glass-panel" 
              style={{ 
                padding: '8rem 5rem', 
                background: 'linear-gradient(135deg, rgba(20,20,20,0.6) 0%, rgba(10,10,10,0.8) 100%)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255,179,0,0.15)',
                borderLeft: '20px solid #8e0000',
                borderRadius: '16px',
                boxShadow: '0 40px 100px -20px rgba(0,0,0,1), inset 0 0 40px rgba(255,179,0,0.05)',
                maxWidth: '600px',
                margin: '0 auto 4rem',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              whileHover={{ scale: 1.05, rotateY: 10, background: 'linear-gradient(135deg, rgba(25,25,25,0.7) 0%, rgba(15,15,15,0.9) 100%)', boxShadow: '0 60px 120px -20px rgba(0,0,0,1), 0 0 40px rgba(255,179,0,0.1)' }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              onClick={() => setStage('ledger')}
            >
              {/* Sacred Glow Behind Book */}
               <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', inset: -50, background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }}
               />

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'relative', marginBottom: '4rem' }}>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', inset: -20, border: '2px dashed rgba(255,179,0,0.3)', borderRadius: '50%' }}
                  />
                  <Book size={80} color="var(--accent-color)" strokeWidth={1} style={{ filter: 'drop-shadow(0 0 20px rgba(255,179,0,0.5))' }} />
                </div>
                
                <h1 className="bangla-text" style={{ fontSize: '6rem', color: 'white', margin: 0, lineHeight: 1.1, textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>শুভ হালখাতা</h1>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--accent-color)', fontWeight: 800, marginTop: '2rem', letterSpacing: '10px', textTransform: 'uppercase' }}>Bengali Ledger 1433</h2>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '3rem', opacity: 0.5 }}>
                  <div style={{ width: '40px', height: '1px', background: 'white' }} />
                  <Star fill="white" size={14} />
                  <div style={{ width: '40px', height: '1px', background: 'white' }} />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <h3 style={{ fontSize: '1.6rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.7)', fontWeight: 300, letterSpacing: '1px' }}>Initiate the Sacred Commercial Ritual</h3>
               <button 
                onClick={() => setStage('ledger')}
                className="btn-premium"
                style={{ 
                  padding: '1.8rem 6rem', fontSize: '1.3rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '1rem',
                  boxShadow: '0 20px 40px -10px rgba(255,179,0,0.4)', background: 'linear-gradient(135deg, var(--accent-color), #ff8c00)', color: 'black'
                }}
              >
                পবিত্র শুভারম্ভ (Open Ledger) <History size={24} />
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="ledger"
            variants={ledgerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ 
              width: '100%',
              maxWidth: '1200px',
              background: 'radial-gradient(circle at center, #fffcf5 0%, #fdf6e3 100%)',
              borderRadius: '8px',
              boxShadow: '0 60px 120px rgba(0,0,0,0.8), inset 0 0 100px rgba(142,0,0,0.05)',
              borderLeft: '80px solid #8e0000',
              padding: '6rem 8rem',
              position: 'relative',
              zIndex: 10,
              minHeight: '80vh'
            }}
          >
            {/* Ledger Paper Lines */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, rgba(142,0,0,0.05) 40px)', pointerEvents: 'none' }} />

            <motion.button 
              whileHover={{ scale: 1.05, x: -5 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setStage('cover')}
              style={{ position: 'absolute', top: '3rem', left: '-160px', background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem 2.5rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, cursor: 'pointer', color: 'white', letterSpacing: '2px' }}
            >
              <ArrowLeft size={20} /> CLOSE BOOK
            </motion.button>

            {/* Header */}
            <div style={{ textAlign: 'center', position: 'relative', marginBottom: '4rem' }}>
              <div style={{ position: 'absolute', top: '-2rem', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255,179,0,0.1), transparent 60%)', filter: 'blur(30px)', pointerEvents: 'none' }} />
              
              <motion.div 
                animate={{ scale: [1, 1.05, 1], filter: ['drop-shadow(0 0 10px rgba(142,0,0,0.2))', 'drop-shadow(0 0 20px rgba(142,0,0,0.4))', 'drop-shadow(0 0 10px rgba(142,0,0,0.2))'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <h2 className="bangla-text" style={{ fontSize: '5rem', color: '#8e0000', letterSpacing: '8px', margin: '0 0 1rem', textShadow: '2px 2px 0px rgba(255,215,0,0.3)' }}>
                  ॥ শ্রী শ্রী গণেশায় নমঃ ॥
                </h2>
              </motion.div>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
                 <div style={{ height: '3px', width: '100px', background: 'linear-gradient(90deg, transparent, #8e0000)' }} />
                 <Star fill="#8e0000" color="#8e0000" size={16} />
                 <span style={{ fontWeight: 900, fontSize: '1.2rem', letterSpacing: '8px', color: '#8e0000', textTransform: 'uppercase' }}>OFFICIAL LEDGER • 1433</span>
                 <Star fill="#8e0000" color="#8e0000" size={16} />
                 <div style={{ height: '3px', width: '100px', background: 'linear-gradient(270deg, transparent, #8e0000)' }} />
              </div>
            </div>

            {/* Premium Table Area */}
            <div style={{ 
              minHeight: '400px', position: 'relative', zIndex: 1, 
              background: 'rgba(255,255,255,0.5)', 
              border: '2px solid rgba(142,0,0,0.2)', 
              borderRadius: '16px', 
              boxShadow: '0 20px 40px rgba(142,0,0,0.05)',
              padding: '2rem 3rem'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '0 0 2rem 0', textAlign: 'left', fontWeight: 900, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '4px', color: '#8e0000', borderBottom: '3px double #8e0000' }}>Commercial Narrative</th>
                    <th style={{ padding: '0 0 2rem 0', textAlign: 'right', fontWeight: 900, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '4px', color: '#1a4301', borderBottom: '3px double #8e0000' }}>Sacred Credit (+)</th>
                  </tr>
                </thead>
                <tbody style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                  <AnimatePresence>
                    {entries.map((entry, index) => (
                      <motion.tr 
                        key={entry.id}
                        initial={{ opacity: 0, x: -20, background: 'linear-gradient(90deg, rgba(255,215,0,0.2), transparent)' }}
                        animate={{ opacity: 1, x: 0, background: 'linear-gradient(90deg, transparent, transparent)' }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        whileHover={{ background: 'linear-gradient(90deg, rgba(142,0,0,0.03), transparent)', scale: 1.01 }}
                        style={{ borderBottom: '1px solid rgba(142,0,0,0.1)', cursor: 'default' }}
                      >
                        <td style={{ padding: '2rem 1rem', fontWeight: 900, fontSize: '1.4rem', color: '#2b2b2b' }}>
                          <span style={{ color: '#8e0000', marginRight: '1rem' }}>•</span>{entry.name}
                        </td>
                        <td style={{ padding: '2rem 1rem', textAlign: 'right', fontWeight: 900, fontSize: '1.6rem', color: '#1a4301', letterSpacing: '2px' }}>
                          {entry.amount}
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                  <tr style={{ height: '120px' }}>
                    <td colSpan="2" style={{ textAlign: 'center', opacity: 0.4, fontStyle: 'italic', padding: '3rem', fontSize: '1.2rem', color: '#8e0000' }}>
                      — May prosperity flow eternally like the Ganges —
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '5rem', position: 'relative', zIndex: 1 }}>
               <motion.button 
                  whileHover={{ scale: 1.05, background: 'rgba(142,0,0,0.05)', boxShadow: '0 10px 20px rgba(142,0,0,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddEntry}
                  style={{ 
                    flex: 1, maxWidth: '400px', padding: '1.8rem', background: 'transparent', 
                    border: '2px solid #8e0000', color: '#8e0000', borderRadius: '100px', 
                    fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', cursor: 'pointer', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '1.1rem' 
                  }}
               >
                 <Plus size={22} /> New Transaction
               </motion.button>
               <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(142,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    flex: 1, maxWidth: '400px', padding: '1.8rem', background: 'linear-gradient(135deg, #8e0000, #5c0000)', 
                    border: 'none', color: 'white', borderRadius: '100px', 
                    fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', cursor: 'pointer', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '1.1rem' 
                  }}
               >
                 <Printer size={22} /> Seal Ledger
               </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HaalKhata;
