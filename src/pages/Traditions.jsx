import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, Heart, ArrowRight, ArrowLeft, Star, Music, Palette, BookOpen } from 'lucide-react';
import bgImg from '../../q.jpg';

const traditionContent = {
  1: {
    history: "Emerging in the late 1980s as a protest against military autocracy in Bangladesh, the Mangal Shobhajatra has grown into a secular festival celebrating Bengali culture. It was declared an Intangible Cultural Heritage of Humanity by UNESCO in 2016.",
    rituals: "Students of Fine Arts and common people build massive floats and wear colorful giant masks of birds, tigers, and folk characters. They parade through the streets at sunrise accompanied by traditional music.",
    significance: "It symbolizes the rejection of evil, the celebration of truth and justice, and the deep-rooted secular harmony among Bengali people regardless of religion or class."
  },
  2: {
    history: "The tradition traces back to the era of Mughal Emperor Akbar, who introduced the Bengali calendar (Tarikh-e-Elahi) to streamline tax collection along with the harvest season.",
    rituals: "Shopkeepers clean their stores, decorate them with fresh flowers, and open a brand new red-bound ledger book (Khero Khata) marked with the auspicious vermilion symbol of Swastika.",
    significance: "It marks the closing of old debts and the beginning of a fresh economic year. It is a beautiful gesture of maintaining sweet relationships with customers through the offering of Bengali sweets."
  },
  3: {
    history: "An ancient folk art passed down through generations of Bengali women, traditionally used to invoke the blessings of deities for fertility, wealth, and prosperity.",
    rituals: "Using the ring finger of the right hand, artists draw intricate geometric and floral patterns directly onto the earth or floor using a liquid paste made from soaked rice and water.",
    significance: "It represents purity, artistic expression, and welcoming divine energy into the home. Unlike permanent art, Alpana is ephemeral, symbolizing the transient yet beautiful nature of life."
  },
  4: {
    history: "Historically, working-class agrarian communities ate leftover fermented rice to stay cool and energized during the blistering summer days. Over time, it became the iconic dish of the new year.",
    rituals: "Families gather on the morning of Pohela Boishakh to eat panta bhat (rice soaked overnight in water) paired with crispy fried Ilish (Hilsa) fish, mustard oil, dry red chili, and raw onions.",
    significance: "It is an homage to the roots of Bengal—a riverine, agricultural land. Eating this simple yet robust meal connects modern Bengalis with their ancestral peasantry."
  },
  5: {
    history: "Rooted deeply in Tantric and Shaivite traditions of rural Bengal, Chaitra Sankranti is the final day of the Bengali calendar and honors the destructive yet purifying aspects of Lord Shiva.",
    rituals: "Devotees, known as Sannyasis, undergo severe penance for a month. The festival culminates in the Charak Puja, involving spectacular and daredevil feats like swinging from poles with hooks pierced into their backs.",
    significance: "It revolves around penance, the endurance of pain as an offering to God, and bidding a purifying farewell to the hardships of the past year before the new year dawns."
  },
  6: {
    history: "Rabindranath Tagore's profound influence shaped the modern aesthetic of Bengali festivals, transforming them into a sophisticated celebration of art, nature, and humanism.",
    rituals: "People dress in traditional red and white attire, gathering under open skies or Banyan trees (like Ramna Batamul). Choirs sing the iconic anthem 'Esho He Boishakh, Esho Esho' to welcome the new year.",
    significance: "It sets the intellectual and emotional tone of the festival. Tagore’s poetry connects the scorching heat of Boishakh to the cleansing of the soul and the promise of a revitalized world."
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  }
};

const traditions = [
  {
    id: 1,
    titleBn: "মঙ্গল শোভাযাত্রা",
    titleEn: "Mangal Shobhajatra",
    icon: <Compass size={40} />,
    desc: "A vibrant mass procession that takes place at dawn on Pohela Boishakh. Featuring gigantic colorful masks and floats representing Bengali folklore, it is a symbol of peace, secularism, and unity.",
    color: "#ff6b6b"
  },
  {
    id: 2,
    titleBn: "হালখাতা",
    titleEn: "Haal Khata",
    icon: <BookOpen size={40} />,
    desc: "The customary ritual of opening a new ledger book by businessmen. Customers are invited, offered sweets, and prior dues are settled to start the new financial year on an auspicious note.",
    color: "#4ecdc4"
  },
  {
    id: 3,
    titleBn: "আলপনা",
    titleEn: "Alpana",
    icon: <Palette size={40} />,
    desc: "Beautiful, intricate motifs hand-painted on the floors and courtyards using a paste of rice flour and water. It brings an aura of purity and festivity into the household.",
    color: "#ffe66d"
  },
  {
    id: 4,
    titleBn: "পান্তা ইলিশ",
    titleEn: "Panta Ilish",
    icon: <Heart size={40} />,
    desc: "The quintessential New Year's feast. Fermented rice (Panta Bhat) served with fried Hilsa fish, green chilies, and onions—a deeply rooted culinary tradition celebrating the agrarian lifestyle.",
    color: "#feca57"
  },
  {
    id: 5,
    titleBn: "চৈত্র সংক্রান্তি",
    titleEn: "Chaitra Sankranti",
    icon: <Star size={40} />,
    desc: "The final day of the Bengali year, observed with Charak Puja and honoring Lord Shiva. It signifies letting go of the old past and purifying oneself for the new dawn.",
    color: "#ff9f43"
  },
  {
    id: 6,
    titleBn: "রবীন্দ্র সংগীত ও সংস্কৃতি",
    titleEn: "Tagore Songs & Culture",
    icon: <Music size={40} />,
    desc: "No Bengali morning starts without 'Esho, he Boishakh'. Cultural programs, poetry recitations, and dances under the Banyan tree breathe artistic life into the new year celebrations.",
    color: "#54a0ff"
  }
];

const Traditions = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(traditions[0]);
  const [isExpanded, setIsExpanded] = React.useState(false); 

  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ padding: '6rem 2rem', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
    >
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', background: '#0a0a0a' }}>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 1, -1, 0] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ 
            position: 'absolute', inset: '-10%', width: '120%', height: '120%',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${bgImg})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            filter: 'contrast(1.1) brightness(1.1)'
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.5) 100%)' }} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: 'white' }}>বাঙালির ঐতিহ্য</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--accent-color)', letterSpacing: '6px', fontWeight: 900, textTransform: 'uppercase' }}>Timeless Bengali Traditions</p>
        </motion.div>

        {/* Master-Detail Split Screen UI */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'stretch' }}>
          
          {/* Left Side: Navigation Tabs */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {traditions.map((item) => {
              const isActive = activeTab.id === item.id;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => { setActiveTab(item); setIsExpanded(false); }}
                  style={{
                    padding: '2rem',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    background: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${isActive ? item.color : 'rgba(255,255,255,0.05)'}`,
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    boxShadow: isActive ? `0 10px 30px ${item.color}20` : 'none'
                  }}
                  whileHover={{ x: 10, background: 'rgba(255,255,255,0.06)' }}
                >
                  <div style={{ color: item.color }}>
                    {React.cloneElement(item.icon, { size: 32, strokeWidth: isActive ? 2 : 1.5 })}
                  </div>
                  <div>
                    <h3 className="bangla-text" style={{ fontSize: '1.8rem', color: 'white', margin: 0, opacity: isActive ? 1 : 0.7 }}>
                      {item.titleBn}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: isActive ? 'var(--accent-color)' : 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 900, margin: '0.3rem 0 0' }}>
                      {item.titleEn}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Massive Dynamic Showcase */}
          <div style={{ flex: '2 1 600px', display: 'flex', flexDirection: 'column' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-panel"
                style={{
                  flex: 1,
                  padding: '6rem 5rem',
                  borderRadius: '40px',
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.08)`,
                  boxShadow: `inset 0 0 100px ${activeTab.color}10, 0 30px 60px rgba(0,0,0,0.5)`,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                {/* Huge Watermark Icon inside Showcase */}
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', color: activeTab.color, opacity: 0.05, pointerEvents: 'none' }}>
                  {React.cloneElement(activeTab.icon, { size: 400 })}
                </div>

                <div style={{ 
                  width: '100px', height: '100px', 
                  borderRadius: '50%', background: `linear-gradient(135deg, ${activeTab.color}40, transparent)`, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  marginBottom: '3rem', border: `1px solid ${activeTab.color}60`,
                  boxShadow: `0 0 40px ${activeTab.color}30`,
                  position: 'relative', zIndex: 2
                }}>
                  <div style={{ color: activeTab.color }}>
                    {React.cloneElement(activeTab.icon, { size: 50 })}
                  </div>
                </div>

                <h2 className="bangla-text" style={{ fontSize: isExpanded ? '3.5rem' : '5rem', color: 'white', marginBottom: '0.5rem', lineHeight: 1.1, position: 'relative', zIndex: 2, transition: 'font-size 0.4s ease' }}>
                  {activeTab.titleBn}
                </h2>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '8px', fontWeight: 900, marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
                  {activeTab.titleEn}
                </h3>
                
                <AnimatePresence mode="wait">
                  {!isExpanded ? (
                    <motion.div key="summary" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                      <p style={{ color: 'white', opacity: 0.8, lineHeight: 2, fontSize: '1.3rem', marginBottom: '4rem', maxWidth: '800px', fontWeight: 300, position: 'relative', zIndex: 2 }}>
                        {activeTab.desc}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div key="details" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, height: 0 }} style={{ position: 'relative', zIndex: 2, marginBottom: '4rem' }}>
                      <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)', marginBottom: '3rem' }} />
                      
                      <div style={{ display: 'grid', gap: '2rem' }}>
                        <div>
                          <h4 style={{ color: activeTab.color, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', fontWeight: 900, marginBottom: '0.5rem' }}>📜 Ancient Roots & History</h4>
                          <p style={{ color: 'white', opacity: 0.7, lineHeight: 1.8, fontWeight: 300 }}>{traditionContent[activeTab.id].history}</p>
                        </div>
                        <div>
                          <h4 style={{ color: activeTab.color, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', fontWeight: 900, marginBottom: '0.5rem' }}>🪔 Rituals & Preparation</h4>
                          <p style={{ color: 'white', opacity: 0.7, lineHeight: 1.8, fontWeight: 300 }}>{traditionContent[activeTab.id].rituals}</p>
                        </div>
                        <div>
                          <h4 style={{ color: activeTab.color, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', fontWeight: 900, marginBottom: '0.5rem' }}>✨ Spiritual Significance</h4>
                          <p style={{ color: 'white', opacity: 0.7, lineHeight: 1.8, fontWeight: 300 }}>{traditionContent[activeTab.id].significance}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div style={{ marginTop: 'auto', position: 'relative', zIndex: 10 }}>
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="btn-premium"
                    style={{ 
                      padding: '1.5rem 3rem', fontSize: '1.2rem', borderRadius: '100px',
                      display: 'inline-flex', alignItems: 'center', gap: '1rem',
                      background: isExpanded ? 'rgba(255,255,255,0.1)' : activeTab.color, 
                      color: '#fff', border: isExpanded ? '1px solid rgba(255,255,255,0.2)' : 'none',
                      fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase',
                      boxShadow: isExpanded ? 'none' : `0 15px 30px ${activeTab.color}50`,
                      cursor: 'pointer', transition: 'all 0.3s ease'
                    }}
                  >
                    {isExpanded ? (
                      <><ArrowLeft size={20} /> Hide Details</>
                    ) : (
                      <>Explore Deep History <ArrowRight size={20} /></>
                    )}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Traditions;
