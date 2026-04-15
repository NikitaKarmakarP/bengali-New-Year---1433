import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Gamepad2, Star, Sparkles, Compass, ArrowRight, Music2, Brain } from 'lucide-react';
import gameBg from '../../bg.jpg';

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

const Games = () => {
  return (
    <motion.div 
      className="page-container texture-paper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ padding: '6rem 2rem', minHeight: '100vh', overflow: 'hidden' }}
    >
      {/* Cinematic Ken Burns Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [0, 1, 0, -1, 0] }} 
          transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', inset: -60,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${gameBg})`,
            backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(1.1) brightness(0.9)'
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%)' }} />
      </div>

      {/* Floating Festive Motifs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ 
              y: [0, -50, 0], opacity: [0, 0.4, 0], rotate: [0, 360], scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: i * 2, ease: "easeInOut" }}
            style={{ position: 'absolute', fontSize: '2.5rem', filter: 'blur(2px)' }}
          >
            {['🍬', '🥁', '🎨', '🎏', '✨'][i % 5]}
          </motion.div>
        ))}
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(4rem, 10vw, 7.5rem)', marginBottom: '1.5rem', color: 'white' }}>খেলার আসর</h1>
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.8 }}
             style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1rem 3rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-color)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px' }}
          >
             <Gamepad2 size={24} /> The Festive Arena
          </motion.div>
          <p style={{ maxWidth: '700px', margin: '3rem auto 0', color: 'white', opacity: 0.7, fontSize: '1.4rem', lineHeight: 1.8, fontWeight: 300 }}>
            Engage in the timeless celebration of Bengal through these interactive digital diversions. May fortune favor your spirit!
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
          {/* Game 1 */}
          <motion.div variants={itemVariants} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem', background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 50px 100px rgba(0,0,0,0.5)' }}>
             <h2 className="bangla-text shimmer-text" style={{ color: 'white', fontSize: '3rem', marginBottom: '2rem' }}>Catch the Mishti 🍬</h2>
             <div style={{ width: '100%', height: '400px', background: 'rgba(255,255,255,0.02)', borderRadius: '30px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                {/* Background Pattern */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div style={{ textAlign: 'center', position: 'relative' }}>
                  <motion.div 
                    animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }} 
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ fontSize: '8rem', marginBottom: '2rem', filter: 'drop-shadow(0 0 30px rgba(255,179,0,0.3))' }}
                  >
                    🍯
                  </motion.div>
                  <button className="btn-premium" style={{ padding: '1.25rem 4rem', fontSize: '1.2rem' }}>Enter Arena <ArrowRight size={22} /></button>
                  <p style={{ marginTop: '2.5rem', fontSize: '1.1rem', color: 'white', opacity: 0.5, fontWeight: 300, letterSpacing: '1px' }}>Catch divine sweets falling from the celestial heights!</p>
                </div>
             </div>
          </motion.div>

          {/* Game 2 */}
          <motion.div variants={itemVariants} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem', background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 50px 100px rgba(0,0,0,0.5)' }}>
             <h2 className="bangla-text shimmer-text" style={{ color: 'white', fontSize: '3rem', marginBottom: '2rem' }}>Heritage Memory🧠</h2>
             <div style={{ width: '100%', height: '400px', background: 'rgba(255,255,255,0.02)', borderRadius: '30px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                {[...Array(8)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05, background: 'rgba(255,179,0,0.1)' }}
                    style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--accent-color)', fontSize: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <Star size={24} />
                  </motion.div>
                ))}
                <div style={{ gridColumn: 'span 4', textAlign: 'center', alignSelf: 'center' }}>
                    <button className="btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', padding: '1rem 3rem' }}>Unlock Wisdom <Brain size={20} /></button>
                </div>
             </div>
             <p style={{ marginTop: '2.5rem', fontSize: '1.1rem', color: 'white', opacity: 0.5, fontWeight: 300, letterSpacing: '1px' }}>Universal archetypes: Dhak 🥁, Ilish 🐟, Alpana 🎨.</p>
          </motion.div>
        </div>

        {/* Leaderboard */}
        <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '6rem', borderRadius: '50px', background: 'rgba(255,255,255,0.01)', border: '2px dashed rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
           <div style={{ position: 'absolute', top: '-50%', right: '0', width: '60%', height: '100%', background: 'radial-gradient(circle, rgba(255,179,0,0.03), transparent 70%)', filter: 'blur(100px)' }} />
           
           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '5rem' }}>
              <Trophy size={48} color="var(--accent-color)" />
              <h2 className="bangla-text shimmer-text" style={{ fontSize: '4rem', color: 'white', margin: 0 }}>বিজয়ীদের তালিকা</h2>
              <Trophy size={48} color="var(--accent-color)" />
           </div>

           <div style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '2rem', textAlign: 'left', color: 'white', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 900, fontSize: '0.9rem' }}>Rank</th>
                    <th style={{ padding: '2rem', textAlign: 'left', color: 'white', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 900, fontSize: '0.9rem' }}>Artisan of Play</th>
                    <th style={{ padding: '2rem', textAlign: 'right', color: 'white', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 900, fontSize: '0.9rem' }}>Soul Score</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Sourav Ganguly', score: 12500, avatar: '🦁' },
                    { name: 'Mithun Chakraborty', score: 10800, avatar: '🕺' },
                    { name: 'Shreya Ghoshal', score: 9600, avatar: '🎤' }
                  ].map((player, i) => (
                    <motion.tr 
                      key={i} 
                      whileHover={{ background: 'rgba(255,255,255,0.02)' }}
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <td style={{ padding: '2.5rem', color: 'white', fontWeight: 900, fontSize: '1.5rem' }}>
                        <span style={{ opacity: 0.3, marginRight: '1rem' }}>#</span>{i + 1}
                      </td>
                      <td style={{ padding: '2.5rem', color: 'white', fontWeight: 900, fontSize: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                          <span style={{ fontSize: '2rem' }}>{player.avatar}</span>
                          {player.name}
                        </div>
                      </td>
                      <td style={{ padding: '2.5rem', textAlign: 'right', color: 'var(--accent-color)', fontWeight: 900, fontSize: '1.8rem', letterSpacing: '2px' }}>
                        {player.score.toLocaleString()}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
            </table>
           </div>

           <div style={{ textAlign: 'center', marginTop: '5rem' }}>
              <p style={{ color: 'white', opacity: 0.3, letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 900 }}>Scores reset at every Navoborsho dawn</p>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Games;
