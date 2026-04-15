import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Utensils, Calendar as CalendarIcon, MessageCircle, Heart, Star, Compass } from 'lucide-react';
import bgImg from '../../bg.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 }
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { type: "spring", stiffness: 80, damping: 20 }
  }
};

const Home = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX - window.innerWidth / 2) / 40,
      y: (e.clientY - window.innerHeight / 2) / 40
    });
  };

  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseMove={handleMouseMove}
      style={{ minHeight: '100vh', overflow: 'hidden', position: 'relative' }}
    >
      {/* Cinematic Ken Burns Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 1, 0, -1, 0],
            x: mousePos.x * -0.5,
            y: mousePos.y * -0.5
          }} 
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ 
            position: 'absolute', inset: -100,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${bgImg})`,
            backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(1.1) brightness(0.8)'
          }}
        />
        
        {/* Animated Light Leaks */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
           {[...Array(4)].map((_, i) => (
             <motion.div 
               key={i}
                style={{ 
                  position: 'absolute', top: '-30%', left: `${i * 30}%`, 
                  width: '500px', height: '160%', 
                  background: 'linear-gradient(to right, transparent, rgba(255,179,0,0.05), transparent)', 
                  transform: 'rotate(20deg)', filter: 'blur(120px)' 
                }}
                animate={{ 
                  opacity: [0.1, 0.4, 0.1],
                  x: [0, 150, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "easeInOut" }}
             />
           ))}
        </div>
      </div>

      {/* Floating Elements with Mouse Parallax */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ 
              y: [0, -60, 0],
              opacity: [0, i % 2 === 0 ? 0.4 : 0.2, 0],
              rotate: [0, 360],
              scale: [0.7, 1, 0.7],
              x: mousePos.x * (i % 2 === 0 ? 1 : -1) * (i / 5)
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity, 
              delay: i * 1,
              ease: "easeInOut"
            }}
            style={{ position: 'absolute', fontSize: `${Math.random() * 3 + 1.5}rem`, filter: 'blur(1.5px)' }}
          >
            {['🌸', '✨', '🌼', '🏵️', '🏵️', '🎐'][i % 6]}
          </motion.div>
        ))}
      </div>

      <section style={{ 
        minHeight: '100vh', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', justifyContent: 'center', textAlign: 'center', 
        padding: '6rem 2rem', position: 'relative', zIndex: 1 
      }}>
        <motion.div 
          animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
          style={{ 
            maxWidth: '1200px', width: '100%', padding: '4rem',
            position: 'relative'
          }}
        >
          {/* Subtle Gradient Glow */}
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ position: 'absolute', top: '-10%', left: '20%', width: '60%', height: '60%', background: 'radial-gradient(circle, var(--accent-color), transparent 70%)', filter: 'blur(80px)', zIndex: -1 }} 
          />

          <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
            <motion.span 
              whileHover={{ scale: 1.1, letterSpacing: '0.4em' }}
              style={{ 
                background: 'rgba(255,179,0,0.1)', 
                color: 'var(--accent-color)', 
                padding: '0.8rem 2.5rem', 
                borderRadius: '100px', 
                fontSize: '1rem', 
                fontWeight: 900, 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                border: '1px solid rgba(255,179,0,0.2)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
              }}
            >
              <Sparkles size={20} /> Subho Noboborsho 1433
            </motion.span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="bangla-text shimmer-text" 
            style={{ 
              fontSize: 'clamp(6rem, 18vw, 12rem)', 
              lineHeight: 0.9, 
              marginBottom: '2rem',
              color: 'white',
              textShadow: '0 30px 60px rgba(0,0,0,0.4)',
              fontWeight: 300
            }}
          >
            শুভ নববর্ষ
          </motion.h1>
          
          <motion.h2 variants={itemVariants} style={{ 
            fontSize: 'clamp(2rem, 6vw, 3.5rem)', 
            fontWeight: 300, 
            color: 'white', 
            marginBottom: '4rem',
            maxWidth: '1000px',
            marginInline: 'auto',
            opacity: 0.8,
            letterSpacing: '2px'
          }}>
            Experience the <span style={{ color: 'var(--accent-color)', fontWeight: 900 }}>Divine Essence</span> of Bengal
          </motion.h2>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/experience" className="btn-premium" style={{ padding: '1.8rem 5rem', fontSize: '1.4rem', borderRadius: '100px' }}>
              Begin the Journey <Compass size={28} style={{ marginLeft: '1rem' }} />
            </Link>
            <Link to="/generate" className="btn-secondary" style={{ padding: '1.8rem 4rem', fontSize: '1.3rem', color: 'white', borderRadius: '100px', background: 'rgba(255,255,255,0.02)' }}>
              Create AI Gift <Star size={24} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Modern Unified Row Layout */}
      <section style={{ padding: '0 2rem 12rem 2rem', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '3rem' 
        }}>
          {[
            { icon: <Utensils />, title: 'The Feast', desc: 'A curated journey through the legendary culinary map of Bengal.', link: '/food', color: '#ff6b35' },
            { icon: <CalendarIcon />, title: 'Auspicious Panjika', desc: 'Sync your life with the sacred Bengali temporal cycles.', link: '/calendar', color: '#4cc9f0' },
            { icon: <MessageCircle />, title: 'Bard’s Wisdom', desc: 'Interactive collection of Rabindranath Tagore’s timeless life lessons.', link: '/voice', color: '#72efdd' }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-panel"
              style={{ padding: '3.5rem', textAlign: 'left', background: 'rgba(255,255,255,0.03)', position: 'relative', display: 'flex', flexDirection: 'column', minHeight: '400px' }}
              whileHover={{ y: -15, background: 'rgba(255,255,255,0.05)', borderColor: 'var(--accent-color)' }}
            >
              <div style={{ 
                width: '70px', height: '70px', borderRadius: '22px', 
                background: `${feature.color}20`, color: feature.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '2rem', boxShadow: `0 10px 30px ${feature.color}30`
              }}>
                {React.cloneElement(feature.icon, { size: 36 })}
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: 900, color: 'white' }}>{feature.title}</h3>
              <p style={{ color: 'white', opacity: 0.5, marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '1.1rem', flex: 1 }}>{feature.desc}</p>
              <Link to={feature.link} style={{ 
                color: 'var(--accent-color)', fontWeight: 800, 
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase'
              }}>
                Explore <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
