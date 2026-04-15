import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Compass, Heart, Star, Music, Palette, BookOpen } from 'lucide-react';
import bgImg from '../../q.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  }
};

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

const TraditionDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const tradition = state?.tradition;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tradition) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>Tradition not found. <button onClick={() => navigate('/traditions')}>Return</button></h1>
      </div>
    );
  }

  const details = traditionContent[tradition.id];

  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ padding: '0', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
    >
      {/* Immersive Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', background: '#0a0a0a' }}>
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ 
            position: 'absolute', inset: '-10%', width: '120%', height: '120%',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${bgImg})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            filter: 'contrast(1.05) sepia(0.2)'
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.5) 100%)' }} />
      </div>

      {/* Back Button */}
      <div style={{ position: 'absolute', top: '3rem', left: '3rem', zIndex: 10 }}>
        <button 
          onClick={() => navigate('/traditions')}
          className="glass-panel"
          style={{ 
            display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', 
            borderRadius: '100px', border: 'none', color: 'white', cursor: 'pointer',
            background: 'rgba(255,255,255,0.05)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px'
          }}
        >
          <ArrowLeft size={20} /> Back to Traditions
        </button>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '10rem 2rem 5rem' }}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ color: tradition.color, marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ padding: '3rem', background: 'rgba(255,255,255,0.03)', borderRadius: '50%', boxShadow: `0 0 50px ${tradition.color}40`, border: `1px solid ${tradition.color}50` }}>
              {React.cloneElement(tradition.icon, { size: 100 })}
            </div>
          </div>
          <h1 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(5rem, 12vw, 8rem)', color: 'white', marginBottom: '1rem' }}>{tradition.titleBn}</h1>
          <p style={{ fontSize: '1.6rem', color: tradition.color, letterSpacing: '8px', fontWeight: 900, textTransform: 'uppercase' }}>{tradition.titleEn}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            <div>
              <h3 style={{ color: tradition.color, fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Sparkles size={20} /> The Essence
              </h3>
              <p style={{ color: 'white', opacity: 0.9, fontSize: '1.4rem', lineHeight: 1.8, fontWeight: 300 }}>
                {tradition.desc}
              </p>
            </div>

            <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />

            <div>
              <h3 style={{ color: tradition.color, fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1.5rem' }}>
                📜 Ancient Roots & History
              </h3>
              <p style={{ color: 'white', opacity: 0.8, fontSize: '1.2rem', lineHeight: 1.9, fontWeight: 300 }}>
                {details.history}
              </p>
            </div>

            <div>
              <h3 style={{ color: tradition.color, fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1.5rem' }}>
                🪔 Rituals & Preparation
              </h3>
              <p style={{ color: 'white', opacity: 0.8, fontSize: '1.2rem', lineHeight: 1.9, fontWeight: 300 }}>
                {details.rituals}
              </p>
            </div>

            <div>
              <h3 style={{ color: tradition.color, fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1.5rem' }}>
                ✨ Spiritual Significance
              </h3>
              <p style={{ color: 'white', opacity: 0.8, fontSize: '1.2rem', lineHeight: 1.9, fontWeight: 300 }}>
                {details.significance}
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TraditionDetails;
