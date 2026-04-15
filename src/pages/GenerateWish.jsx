import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Users, Palette, Wand2, Copy, 
  Share2, Heart, Laugh, Star, Compass, 
  ArrowRight, Gift, Send, Zap 
} from 'lucide-react';
import landingBg from '../../bg.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 25 } 
  }
};

const GenerateWish = () => {
  const [relation, setRelation] = useState('friend');
  const [tone, setTone] = useState('blessing');
  const [generatedWish, setGeneratedWish] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX - window.innerWidth / 2) / 40,
      y: (e.clientY - window.innerHeight / 2) / 40
    });
  };

  const wishes = {
    friend: {
      funny: { 
        bn: "শুভ নববর্ষ! এই বছর যেন তোর সব ধার শোধ হয়ে যায়, আর তুই আমাকে অনেক ইলিশ আর রসগোল্লা খাওয়াতে পারিস! 😂🐟", 
        en: "Happy New Year! May you pay off all your debts this year and treat me to lots of Ilish and Rasgulla! 😂", 
        emojis: "😂🐟🍬" 
      },
      emotional: { 
        bn: "শুভ নববর্ষ বন্ধু! নতুন বছর তোর জীবনে অনেক আনন্দ আর সাফল্য বয়ে আনুক, আমাদের বন্ধুত্ব যেন এরকমই থাকে। ❤️", 
        en: "Happy New Year friend! May the new year bring you joy and success, and may our friendship stay the same. ❤️", 
        emojis: "❤️🌸🤝" 
      },
      blessing: { 
        bn: "শুভ নববর্ষ বন্ধু! পরমেশ্বর তোর জীবনকে সুখ, শান্তি আর সাফল্যে ভরে দিন। এই নতুন বছর হোক তোর জীবনের শ্রেষ্ঠ বছর। 🙏✨", 
        en: "Happy New Year friend! May the Almighty fill your life with happiness, peace, and success. May this new year be your best one yet. 🙏✨", 
        emojis: "🙏✨🌟" 
      }
    },
    family: {
      funny: { 
        bn: "শুভ নববর্ষ! এই বছর যেন বাবা-মা আর বকা না দেয়! 😅 আর মা যেন রোজ তার স্পেশাল বিরিয়ানি বানায়! 🍗", 
        en: "Happy New Year! Hope mom and dad scold less this year! And hope mom makes her special biryani every day! 😅", 
        emojis: "😅👨‍👩‍👧‍👦🍗" 
      },
      emotional: { 
        bn: "শুভ নববর্ষ! পরিবারের সবার সুস্থতা ও আনন্দ কামনা করি। তোমরা আমার সব, তোমাদের আশীর্বাদেই আমি আজ এখানে। ❤️", 
        en: "Happy New Year! Wishing health and happiness to everyone in the family. You are my everything, I am here because of your blessings. ❤️", 
        emojis: "❤️🏡👪" 
      },
      blessing: { 
        bn: "শুভ নববর্ষ! বড়দের প্রণাম এবং ছোটদের অনেক অনেক স্নেহ। নতুন বছরে সবাই মিলে হাসি-খুশিতে সুখে থাকি। 🙏🌺", 
        en: "Happy New Year! Respect to elders and love to the young ones. Let's stay happy and healthy together in the new year. 🙏🌺", 
        emojis: "🙏🌺✨" 
      }
    },
    loved: {
      funny: { 
        bn: "শুভ নববর্ষ! এই বছর তুই আমাকে কম জ্বালাস, এটাই আমার একমাত্র প্রার্থনা! 😜 কিন্তু ভালোবাসতে ভুলিস না! ❤️", 
        en: "Happy New Year! My only prayer is that you annoy me less this year! 😜 But don't forget to love me! ❤️", 
        emojis: "😜❤️🥰" 
      },
      emotional: { 
        bn: "শুভ নববর্ষ আমার প্রিয়! তুমি সাথে আছো বলেই প্রতিটি নববর্ষ এত রঙিন আর সুন্দর। নতুন বছরটা ভালো কাটুক। ❤️✨", 
        en: "Happy New Year my love! Every new year is so colorful and beautiful because you are with me. Have a great year. ❤️✨", 
        emojis: "❤️✨👩‍❤️‍👨" 
      },
      blessing: { 
        bn: "শুভ নববর্ষ! ঈশ্বরের কাছে প্রার্থনা করি আমাদের সম্পর্ক যেন আরও মজবুত হয় আর আমাদের জীবনে সুখের অন্ত না থাকে। 🙏💑", 
        en: "Happy New Year! I pray to God that our relationship grows stronger and our happiness never ends. 🙏💑", 
        emojis: "🙏💑🌈" 
      }
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedWish(null);
    setTimeout(() => {
      setGeneratedWish(wishes[relation][tone]);
      setIsGenerating(false);
    }, 2200);
  };

  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseMove={handleMouseMove}
      style={{ padding: '6rem 2rem', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}
    >
      {/* Cinematic Ken Burns Background with Mouse Parallax */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <motion.div 
          animate={{ 
            scale: [1, 1.12, 1], 
            rotate: [0, 0.5, 0, -0.5, 0],
            x: mousePos.x * -0.5,
            y: mousePos.y * -0.5
          }} 
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', inset: -60,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.85)), url(${landingBg})`,
            backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8) contrast(1.1)'
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)' }} />
      </div>

      {/* Dynamic Magical Particle Field */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ 
              y: [0, -60, 0], 
              opacity: [0, 0.4, 0], 
              rotate: [0, 360], 
              scale: [0.8, 1.2, 0.8],
              x: mousePos.x * (i%2===0?1:-1) * 0.2
            }}
            transition={{ duration: 12 + Math.random() * 8, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
            style={{ position: 'absolute', fontSize: `${Math.random() * 1.5 + 1}rem`, filter: 'blur(1.5px)' }}
          >
            {['✨', '🪄', '🔮', '🌟', '🏵️', '🎐'][i % 6]}
          </motion.div>
        ))}
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '0.5rem', color: 'white' }}>
            আশীর্বাদের উপহার
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--accent-color)', letterSpacing: '6px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '2.5rem', opacity: 0.6 }}>
            AI Wish Conjurer
          </p>
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 1 }}
             style={{ 
               display: 'inline-flex', alignItems: 'center', gap: '1.2rem', 
               padding: '1rem 3.5rem', background: 'rgba(255,255,255,0.02)', 
               backdropFilter: 'blur(30px)', borderRadius: '100px', 
               border: '1px solid rgba(255,255,255,0.06)', color: 'white', 
               fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem'
             }}
          >
             <Sparkles size={22} style={{ color: 'var(--accent-color)' }} />
             Sacred Greetings Engine
          </motion.div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4rem' }}>
          
          {/* Controls Panel - Ultra Glass */}
          <motion.div 
            variants={itemVariants} 
            className="glass-panel" 
            style={{ 
              gridColumn: 'span 5', padding: '4rem 3.5rem', 
              background: 'rgba(255,255,255,0.01)', borderColor: 'rgba(255,255,255,0.04)', 
              boxShadow: '0 80px 150px rgba(0,0,0,0.6)', borderRadius: '40px' 
            }}
          >
            <div style={{ marginBottom: '3.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                <Users size={24} /> Relation / সম্পর্ক
              </label>
              <div style={{ position: 'relative' }}>
                <select 
                  value={relation} 
                  onChange={(e) => setRelation(e.target.value)}
                  style={{ 
                    width: '100%', padding: '1.5rem', borderRadius: '24px', 
                    border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,179,0,0.02)', 
                    fontSize: '1.1rem', cursor: 'pointer', outline: 'none', color: 'white', appearance: 'none' 
                  }}
                >
                  <option value="friend" style={{ color: 'black' }}>বন্ধু (Friend)</option>
                  <option value="family" style={{ color: 'black' }}>পরিবার (Family)</option>
                  <option value="loved" style={{ color: 'black' }}>প্রিয়জন (Loved one)</option>
                </select>
                <div style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.2, color: 'white' }}>
                  <ArrowRight size={22} style={{ rotate: '90deg' }} />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '4rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                <Palette size={24} /> Sentiment / ভাব
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }}>
                {[
                  { id: 'blessing', label: 'Sacred Blessing', bn: 'শুভ আশীর্বাদ', icon: <Heart size={20} /> },
                  { id: 'emotional', label: 'Soulful Emotion', bn: 'গভীর আবেগ', icon: <Star size={20} /> },
                  { id: 'funny', label: 'Juicy Wit', bn: 'রসিকতা', icon: <Laugh size={20} /> }
                ].map((t) => (
                  <motion.button
                    key={t.id}
                    onClick={() => setTone(t.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      padding: '1.4rem 2rem',
                      borderRadius: '24px',
                      border: '1px solid',
                      borderColor: tone === t.id ? 'var(--accent-color)' : 'rgba(255,255,255,0.04)',
                      background: tone === t.id ? 'rgba(255,179,0,0.06)' : 'rgba(255,255,255,0.015)',
                      color: tone === t.id ? 'var(--accent-color)' : 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: 'all 0.4s ease'
                    }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: tone === t.id? 'var(--accent-color)' : 'rgba(255,255,255,0.05)', color: tone === t.id? 'black' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {t.icon}
                    </div>
                    <div style={{ textAlign: 'left' }}>
                       <div style={{ fontSize: '0.75rem', opacity: tone === t.id? 0.7 : 0.3, marginBottom: '0.1rem' }}>{t.label}</div>
                       <div className="bangla-text" style={{ fontSize: '1.5rem' }}>{t.bn}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.button 
              className="btn-premium" 
              onClick={handleGenerate} 
              disabled={isGenerating}
              whileHover={{ scale: 1.03 }}
              style={{ width: '100%', padding: '1.8rem', fontSize: '1.2rem', borderRadius: '24px' }}
            >
              {isGenerating ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}>
                  <Wand2 size={28} />
                </motion.div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                  Conjure AI Gift <Zap size={24} fill="black" />
                </div>
              )}
            </motion.button>
          </motion.div>

          {/* Result Panel - Immersive Content */}
          <motion.div 
            variants={itemVariants} 
            className="glass-panel" 
            style={{ 
              gridColumn: 'span 7', minHeight: '650px', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', 
              padding: '4rem', background: 'rgba(255,255,255,0.01)', 
              position: 'relative', overflow: 'hidden',
              borderColor: 'rgba(255,255,255,0.02)', boxShadow: '0 100px 200px rgba(0,0,0,0.7)',
              borderRadius: '50px'
            }}
          >
            {/* Background Sacred Mandela Effect */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.02, pointerEvents: 'none' }}>
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                 style={{ width: '600px', height: '600px', border: '1px dashed white', borderRadius: '50%' }}
               />
            </div>

            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div key="loading" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} style={{ textAlign: 'center' }}>
                  <motion.div 
                    animate={{ rotate: 360, scale: [1, 1.15, 1], filter: ['blur(0px)', 'blur(20px)', 'blur(0px)'] }} 
                    transition={{ repeat: Infinity, duration: 3 }} 
                    style={{ fontSize: '8rem', marginBottom: '3rem', filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.15))' }}
                  >
                    🔮
                  </motion.div>
                  <h3 className="bangla-text shimmer-text" style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>অপেক্ষা করুন...</h3>
                  <p style={{ color: 'white', opacity: 0.3, letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 900, fontSize: '0.8rem' }}>Weaving threads of destiny</p>
                </motion.div>
              ) : generatedWish ? (
                <motion.div 
                   key="result" 
                   initial={{ opacity: 0, y: 40, scale: 0.95 }} 
                   animate={{ opacity: 1, y: 0, scale: 1 }} 
                   transition={{ type: "spring", stiffness: 90, damping: 18 }} 
                   style={{ width: '100%', position: 'relative' }}
                >
                  <div className="texture-paper" style={{ 
                    background: 'linear-gradient(135deg, rgba(20,20,20,0.4), rgba(5,5,5,0.7))', 
                    padding: '6rem 4rem', borderRadius: '40px', position: 'relative', 
                    border: '1px solid rgba(255,179,0,0.1)', 
                    boxShadow: 'inset 0 0 80px rgba(0,0,0,0.8)' 
                  }}>
                    {/* Corner Ornaments */}
                    <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', opacity: 0.15, color: 'var(--accent-color)' }}><Sparkles size={24} /></div>
                    
                    <motion.div 
                      animate={{ y: [0, -10, 0], opacity: [0.05, 0.15, 0.05] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      style={{ position: 'absolute', top: '2rem', right: '3rem', fontSize: '8rem', filter: 'blur(1px)', color: 'white' }}
                    >
                      🌸
                    </motion.div>
                    
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                       <motion.div 
                         initial={{ scale: 0.8, opacity: 0 }} 
                         animate={{ scale: 1, opacity: 1 }} 
                         style={{ display: 'inline-block', padding: '0.6rem 2rem', background: 'rgba(255,179,0,0.08)', color: 'var(--accent-color)', borderRadius: '100px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', border: '1px solid rgba(255,179,0,0.15)', marginBottom: '2.5rem' }}
                       >
                         {tone === 'blessing' ? 'Sacred Gift' : tone === 'funny' ? 'Playful Jest' : 'Soulful Verse'}
                       </motion.div>
                       
                       <h2 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'white', lineHeight: 1.4, fontWeight: 300, minHeight: '120px' }}>
                        {generatedWish.bn}
                       </h2>
                    </div>
                    
                    <div style={{ height: '1px', width: '120px', background: 'rgba(255,255,255,0.05)', margin: '0 auto 3rem' }} />
                    
                    <p style={{ fontSize: '1.4rem', color: 'white', opacity: 0.35, fontStyle: 'italic', textAlign: 'center', marginBottom: '5rem', fontWeight: 300, lineHeight: 1.6, maxWidth: '700px', marginInline: 'auto' }}>
                      "{generatedWish.en}"
                    </p>
  
                    <motion.div 
                      animate={{ scale: [1, 1.15, 1], filter: ['drop-shadow(0 0 10px rgba(255,179,0,0.1))', 'drop-shadow(0 0 30px rgba(255,179,0,0.3))', 'drop-shadow(0 0 10px rgba(255,179,0,0.1))'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      style={{ fontSize: '6rem', textAlign: 'center', marginBottom: '5rem' }}
                    >
                      {generatedWish.emojis}
                    </motion.div>
  
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
                      <motion.button 
                        whileHover={{ scale: 1.02, background: 'rgba(255,255,255,0.04)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          navigator.clipboard.writeText(`${generatedWish.bn}\n\n${generatedWish.en}`);
                          const btn = document.getElementById('capture-btn-text');
                          if(btn) {
                             const original = btn.innerHTML;
                             btn.innerHTML = 'Copied!';
                             setTimeout(() => { btn.innerHTML = original; }, 2000);
                          }
                        }}
                        style={{ padding: '1.6rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', color: 'white', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '3px' }}
                      >
                        <Copy size={22} /> <span id="capture-btn-text">Capture</span>
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(255,179,0,0.3)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: 'Subho Noboborsho',
                              text: `${generatedWish.bn}\n\n${generatedWish.en}\n\nHappy Bengali New Year!`,
                            }).catch(err => console.log('Error sharing:', err));
                          } else {
                            alert("Sharing is not supported on this browser.");
                          }
                        }}
                        className="btn-premium"
                        style={{ 
                          padding: '1.6rem', borderRadius: '20px', border: 'none', 
                          background: 'linear-gradient(45deg, var(--accent-color), #ffcc33)', 
                          color: 'black', fontWeight: 950, cursor: 'pointer', 
                          display: 'flex', alignItems: 'center', justifyContent: 'center', 
                          gap: '1.2rem', fontSize: '1.2rem', textTransform: 'uppercase', 
                          letterSpacing: '4px', position: 'relative', overflow: 'hidden'
                        }}
                      >
                        <motion.div 
                          animate={{ x: ['-200%', '300%'] }} 
                          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                          style={{ position: 'absolute', top: 0, left: 0, width: '30px', height: '100%', background: 'rgba(255,255,255,0.3)', skewX: '-30deg', filter: 'blur(5px)' }}
                        />
                        <Send size={24} /> Spread Light
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div style={{ textAlign: 'center', opacity: 0.1 }}>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    <Gift size={200} strokeWidth={0.1} color="white" style={{ marginBottom: '4rem' }} />
                  </motion.div>
                  <p style={{ fontSize: '1.8rem', fontWeight: 200, color: 'white', letterSpacing: '12px', textTransform: 'uppercase' }}>Divine Intent</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
  
        </div>
      </div>
    </motion.div>
  );
};

export default GenerateWish;
