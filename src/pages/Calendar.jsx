import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, RefreshCw, CalendarClock, ChevronRight, X, Star, Sparkles, Compass, ArrowRight, Sunset, CloudRain, Snowflake, Leaf } from 'lucide-react';
import calBg from '../../y.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 25 } 
  }
};

const Calendar = () => {
  const [engDate, setEngDate] = useState('');
  const [convertedDate, setConvertedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const bengaliMonths = [
    { name: 'বৈশাখ', en: 'Boishakh', season: 'Greeshma', seasonBn: 'গ্রীষ্ম', icon: '🌞', colors: ['#ff9966', '#ff5e62'], event: '✨ Pohela Boishakh', desc: 'The glorious start of the Bengali year. A month of new beginnings, vibrant fairs, and the legendary Mangal Shobhajatra.' },
    { name: 'জ্যৈষ্ঠ', en: 'Joishtho', season: 'Greeshma', seasonBn: 'গ্রীষ্ম', icon: '🥭', colors: ['#ffc837', '#ff8008'], desc: 'The month of luscious summer fruits. Nature offers its sweetest gifts like mangoes, lychees, and jackfruits.' },
    { name: 'আষাঢ়', en: 'Ashar', season: 'Barsha', seasonBn: 'বর্ষা', icon: '🌧️', colors: ['#4b6cb7', '#182848'], desc: 'The arrival of the romantic monsoon. Rain-soaked earth and the mesmerizing rhythm of raindrops on tin roofs.' },
    { name: 'শ্রাবণ', en: 'Srabon', season: 'Barsha', seasonBn: 'বর্ষা', icon: '⛈️', colors: ['#2980b9', '#2c3e50'], desc: 'The heart of monsoon. A month deeply woven into Rabindranath Tagore’s rain songs and the lush green landscape.' },
    { name: 'ভাদ্র', en: 'Bhadro', season: 'Sarat', seasonBn: 'শরৎ', icon: '🌾', colors: ['#ffefba', '#ffffff'], desc: 'The transition to autumn. White clouds float in a crystalline blue sky, signaling the end of heavy rains.' },
    { name: 'আশ্বিন', en: 'Ashwin', season: 'Sarat', seasonBn: 'শরৎ', icon: '🌺', colors: ['#ada996', '#f2f2f2'], event: '🔱 Durga Puja', desc: 'The holiest month. The fragrance of Shiuli flowers and the beat of Dhak mark the arrival of Maa Durga.' },
    { name: 'কার্তিক', en: 'Kartik', season: 'Hemanta', seasonBn: 'হেমন্ত', icon: '🪔', colors: ['#cb2d3e', '#ef473a'], desc: 'The dawn of winter. Early morning mists gather over the fields, and the night sky fills with festive lamps.' },
    { name: 'অগ্রহায়ণ', en: 'Ogrohayon', season: 'Hemanta', seasonBn: 'হেমন্ত', icon: '🍁', colors: ['#ffd89b', '#19547b'], desc: 'The month of harvest. Farmers celebrate ' + 'Nabanna' + ' with new rice, spreading joy and abundance across Bengal.' },
    { name: 'পৌষ', en: 'Poush', season: 'Sheet', seasonBn: 'শীত', icon: '❄️', colors: ['#e0eafc', '#cfdef3'], event: '🥮 Poush Parbon', desc: 'The quintessential winter. Bengal dreams of Nolen Gur (date palm jaggery) and warm, delicious Pithe-Puli.' },
    { name: 'মাঘ', en: 'Magh', season: 'Sheet', seasonBn: 'শীত', icon: '🧣', colors: ['#757f9a', '#d7dde8'], event: '📚 Saraswati Puja', desc: 'The peak of winter. Yellow colors bloom everywhere as people worship the Goddess of Art and Wisdom.' },
    { name: 'ফাল্গুন', en: 'Falgun', season: 'Basanta', seasonBn: 'বসন্ত', icon: '🌼', colors: ['#56ab2f', '#a8e063'], event: '🎨 Basanta Utsav', desc: 'The queen of seasons. Palash flowers paint the landscape red, and the air is filled with the scent of spring.' },
    { name: 'চৈত্র', en: 'Choitro', season: 'Basanta', seasonBn: 'বসন্ত', icon: '🍃', colors: ['#1d976c', '#93f9b9'], event: '🔥 Charak Puja', desc: 'The final chapter. A time of reflection and spiritual intensity before the circle of time begins anew.' },
  ];

  const eventDetails = {
    '✨ Pohela Boishakh': 'The Bengali New Year (Naba Barsha). A kaleidoscope of colors, Mangal Shobhajatra processions, and the traditional start of the Haal Khata ledger.',
    '🔱 Durga Puja': 'The heartbeat of Bengal. An epic ten-day celebration where the divine mother returns home, uniting people in faith, art, and joy.',
    '🥮 Poush Parbon': 'A harvest festival dedicated to the culinary art of Pitha. The air smells of boiling milk and fresh date palm jaggery.',
    '📚 Saraswati Puja': 'The celebration of the yellow spring (Basanta). Students offer their books to the Goddess of Learning in a beautiful morning ritual.',
    '🎨 Basanta Utsav': 'Draped in yellow, people welcome spring with song, dance, and colors. A tradition popularized by Tagore at Shantiniketan.',
    '🔥 Charak Puja': 'A mesmerizing folk ritual at the years end, dedicated to Lord Shiva. It captures the raw devotion and cultural depth of rural Bengal.'
  };

  const handleConvert = () => {
    if(engDate) {
      setConvertedDate(`১৪ই ${bengaliMonths[new Date(engDate).getMonth() % 12].name}, ১৪৩৩`);
    }
  };

  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ padding: '6rem 2rem', minHeight: '100vh', position: 'relative' }}
    >
      {/* Cinematic Ken Burns Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <motion.div 
          animate={{ scale: [1, 1.12, 1], rotate: [0, 0.5, 0, -0.5, 0] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', inset: -40,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.85)), url(${calBg})`,
            backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.9) contrast(1.1)'
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)' }} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <h1 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(5rem, 12vw, 10rem)', marginBottom: '0.5rem', color: 'white' }}>
            বাংলা পঞ্জিকা
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--accent-color)', letterSpacing: '8px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '2.5rem', opacity: 0.8 }}>
            The Eternal Rhythm of Bengal
          </p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '1.5rem', 
              padding: '1.2rem 4rem', background: 'rgba(255,255,255,0.03)', 
              backdropFilter: 'blur(20px)', borderRadius: '100px', 
              border: '1px solid rgba(255,255,255,0.1)', color: 'white', 
              fontWeight: 800, fontSize: '1.1rem' 
            }}
          >
             <CalendarClock size={28} style={{ color: 'var(--accent-color)' }} />
             ১৪৩৩ বঙ্গাব্দ • Bengali Era 1433
          </motion.div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
          
          {/* Conversion Tool - Modernized */}
          <motion.div 
            variants={itemVariants} 
            className="glass-panel" 
            style={{ 
              gridColumn: 'span 4', padding: '4rem', height: 'fit-content', 
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', 
              boxShadow: '0 100px 200px rgba(0,0,0,0.6)', borderRadius: '40px' 
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
               <div style={{ width: '80px', height: '80px', margin: '0 auto 2rem', background: 'rgba(255,179,0,0.1)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                  <RefreshCw size={36} />
               </div>
               <h3 className="bangla-text" style={{ fontSize: '2.8rem', color: 'white', margin: '0 0 0.5rem' }}>তারিখ নির্ণয়</h3>
               <p style={{ color: 'white', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 900 }}>Sacred Calendar Sync</p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <input 
                type="date" 
                value={engDate}
                onChange={(e) => { setEngDate(e.target.value); setConvertedDate(null); }}
                style={{ 
                  width: '100%', padding: '1.8rem', borderRadius: '24px', 
                  border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)', 
                  color: 'white', fontSize: '1.3rem', outline: 'none', cursor: 'pointer' 
                }}
              />
            </div>

            <button 
              className="btn-premium" 
              onClick={handleConvert}
              disabled={!engDate}
              style={{ width: '100%', padding: '1.8rem', fontSize: '1.2rem', borderRadius: '24px' }}
            >
              Reveal Bengali Date <Compass size={24} style={{ marginLeft: '1rem' }} />
            </button>

            <AnimatePresence>
              {convertedDate && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  style={{ 
                    marginTop: '3.5rem', padding: '4rem 2rem', borderRadius: '32px', 
                    border: '1px solid var(--accent-color)', background: 'rgba(255,179,0,0.03)', 
                    textAlign: 'center', position: 'relative' 
                  }}
                >
                  <motion.div 
                    animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', top: '1rem', right: '1rem', opacity: 0.1 }}
                  >
                    <Sparkles size={40} color="var(--accent-color)" />
                  </motion.div>
                  <p style={{ fontWeight: 900, opacity: 0.4, marginBottom: '1.5rem', color: 'white', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.75rem' }}>Ancient Date</p>
                  <h4 className="bangla-text shimmer-text" style={{ fontSize: '3.5rem', color: 'white', margin: 0, lineHeight: 1.2 }}>{convertedDate}</h4>
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{ marginTop: '5rem', padding: '3.5rem', borderRadius: '32px', background: 'rgba(255,255,255,0.01)', border: '1px dashed rgba(255,255,255,0.05)', textAlign: 'center' }}>
               <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '5px', fontWeight: 900, marginBottom: '2rem', color: 'var(--accent-color)', opacity: 0.7 }}>Pohela Boishakh</p>
               <h3 className="bangla-text" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '2rem' }}>১লা বৈশাখ</h3>
               <button onClick={() => setSelectedEvent('✨ Pohela Boishakh')} className="btn-secondary" style={{ width: '100%', padding: '1.2rem', borderRadius: '100px', fontSize: '1.1rem', color: 'white', opacity: 0.8 }}>
                 Traditions & Rituals
               </button>
            </div>
          </motion.div>

          {/* Month Cards - Refined Grid */}
          <div style={{ gridColumn: 'span 8' }}>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}
            >
              {bengaliMonths.map((month, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  onClick={() => setSelectedMonth(month)}
                  className="glass-panel"
                  style={{ 
                    padding: '4rem 3.5rem', cursor: 'pointer', position: 'relative', overflow: 'hidden',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    minHeight: '280px', background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.04)',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.3)', borderRadius: '32px'
                  }}
                  whileHover={{ y: -15, scale: 1.02, background: 'rgba(255,255,255,0.04)', borderColor: `${month.colors[0]}44` }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: `linear-gradient(to bottom, ${month.colors[0]}, ${month.colors[1]})`, opacity: 0.6 }} />
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 className="bangla-text" style={{ fontSize: '3.5rem', color: 'white', margin: 0, fontWeight: 300 }}>{month.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                         <p style={{ fontWeight: 900, opacity: 0.4, color: 'white', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>{month.en}</p>
                         <div style={{ width: '20px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                         <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--accent-color)', opacity: 0.6 }}>{month.seasonBn}</span>
                      </div>
                    </div>
                    <div style={{ fontSize: '4rem', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.05))', opacity: 0.8 }}>
                      {typeof month.icon === 'string' ? month.icon : React.cloneElement(month.icon, { strokeWidth: 1 })}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       <span style={{ fontSize: '1rem', fontWeight: 900, color: 'white', opacity: 0.2, textTransform: 'uppercase', letterSpacing: '2px' }}>{month.season}</span>
                    </div>
                    {month.event && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pulse-dot" 
                        style={{ border: `1px solid ${month.colors[0]}` }} 
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Immersive Month Modal */}
      <AnimatePresence>
        {selectedMonth && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMonth(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(30px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{ 
                maxWidth: '900px', width: '100%', padding: '6rem', 
                background: 'rgba(15, 15, 15, 0.6)', 
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 40px 100px -20px rgba(0,0,0,1), inset 0 0 0 1px rgba(255,255,255,0.02)',
                borderRadius: '40px', position: 'relative', overflow: 'hidden' 
              }}
            >
              {/* Dynamic Gradient Orbs */}
              <div style={{ position: 'absolute', top: '-30%', left: '-20%', width: '60%', height: '60%', background: `radial-gradient(circle, ${selectedMonth.colors[0]}44 0%, transparent 60%)`, filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-30%', right: '-20%', width: '60%', height: '60%', background: `radial-gradient(circle, ${selectedMonth.colors[1]}44 0%, transparent 60%)`, filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />

              <button 
                onClick={() => setSelectedMonth(null)}
                style={{ 
                  position: 'absolute', top: '2.5rem', right: '2.5rem', 
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 10, transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}
              >
                <X size={24} />
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                   style={{ 
                     fontSize: '6rem', marginBottom: '2rem', 
                     background: `linear-gradient(135deg, ${selectedMonth.colors[0]}22, ${selectedMonth.colors[1]}22)`,
                     width: '120px', height: '120px', borderRadius: '50%',
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     border: `1px solid ${selectedMonth.colors[0]}44`,
                     boxShadow: `0 0 40px ${selectedMonth.colors[0]}33`
                   }}
                 >
                    {typeof selectedMonth.icon === 'string' ? selectedMonth.icon : React.cloneElement(selectedMonth.icon, { size: 60, strokeWidth: 1.5 })}
                 </motion.div>

                 <h2 className="bangla-text" style={{ 
                   fontSize: '6.5rem', color: 'white', marginBottom: '0.5rem', lineHeight: 1.1,
                   textShadow: `0 10px 30px ${selectedMonth.colors[0]}44`
                 }}>
                   {selectedMonth.name}
                 </h2>
                 
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                    <span style={{ fontSize: '1.2rem', color: 'white', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase' }}>{selectedMonth.en}</span>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-color)' }} />
                    <span style={{ fontSize: '1.2rem', color: 'var(--accent-color)', fontWeight: 800, letterSpacing: '2px' }}>{selectedMonth.seasonBn} ({selectedMonth.season})</span>
                 </div>

                 <div style={{ height: '1px', width: '80%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', marginBottom: '3rem' }} />

                 <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '4rem', fontWeight: 300, maxWidth: '650px' }}>
                   {selectedMonth.desc}
                 </p>

                 {selectedMonth.event && (
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => { setSelectedEvent(selectedMonth.event); setSelectedMonth(null); }}
                     style={{ 
                       background: `linear-gradient(135deg, ${selectedMonth.colors[0]}, ${selectedMonth.colors[1]})`,
                       border: 'none', color: 'white', padding: '1.5rem 3rem', fontSize: '1.2rem', 
                       borderRadius: '100px', fontWeight: 800, cursor: 'pointer',
                       display: 'flex', alignItems: 'center', gap: '1rem',
                       boxShadow: `0 20px 40px -10px ${selectedMonth.colors[0]}66`
                     }}
                   >
                     Journey to {selectedMonth.event} <ArrowRight size={20} />
                   </motion.button>
                 )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
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
                onClick={() => setSelectedEvent(null)}
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
                 <div style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}>
                    <Star size={80} fill="var(--accent-color)" color="var(--accent-color)" strokeWidth={1} />
                 </div>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="bangla-text shimmer-text" style={{ fontSize: '4.5rem', marginBottom: '2rem', color: 'white', lineHeight: 1.2 }}>{selectedEvent}</h2>
                
                <div style={{ height: '1px', width: '80%', background: 'linear-gradient(90deg, transparent, rgba(255,179,0,0.3), transparent)', margin: '0 auto 2.5rem' }} />

                <p style={{ fontSize: '1.4rem', lineHeight: 1.8, marginBottom: '5rem', color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>
                  {eventDetails[selectedEvent]}
                </p>
                
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,179,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedEvent(null)}
                  style={{ 
                    width: '100%', padding: '1.8rem', fontSize: '1.3rem', 
                    borderRadius: '100px', background: 'linear-gradient(135deg, var(--accent-color), #ff8c00)',
                    color: 'black', fontWeight: 900, border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
                    letterSpacing: '2px', textTransform: 'uppercase'
                  }}
                >
                  Honor the Festival <Sparkles size={24} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Calendar;
