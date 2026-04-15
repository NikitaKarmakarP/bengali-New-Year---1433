import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Tag, ShoppingCart, ArrowRight, Star, Heart, Sparkles, MessageCircle } from 'lucide-react';
import shopBg from '../../bg.jpg';

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

const Shop = () => {
  const products = [
    { id: 1, name: 'Lal-par Sada Saree', category: 'Handloom', price: '₹1,500', icon: '👘', desc: 'Traditional red border white cotton saree, perfect for Pohela Boishakh.' },
    { id: 2, name: 'Dokra Durga Idol', category: 'Handicraft', price: '₹2,500', icon: '🗿', desc: 'Authentic Bankura Dokra art, handcrafted using lost-wax casting technique.' },
    { id: 3, name: 'Noboborsho Mishti Box', category: 'Sweets', price: '₹600', icon: '🍬', desc: 'Assorted Rasgulla, Sandesh & Kheer Kadam for the perfect celebration.' },
    { id: 4, name: 'Clay Diya Set', category: 'Decor', price: '₹250', icon: '🪔', desc: 'Hand-painted clay lamps crafted by local Kumartuli artisans.' },
    { id: 5, name: 'Ilish Mach (Pre-order)', category: 'Food', price: '₹1,200', icon: '🐟', desc: 'Premium Hilsa fish for your grand Pohela Boishakh family lunch.' },
    { id: 6, name: 'Alpana Floor Mat', category: 'Decor', price: '₹450', icon: '🎨', desc: 'Washable mat featuring traditional intricate Alpana designs.' }
  ];

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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${shopBg})`,
            backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(1.1) brightness(0.9)'
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%)' }} />
      </div>

      {/* Floating Sparkles & Silk Motifs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ 
              y: [0, -30, 0], opacity: [0, 0.4, 0], rotate: [0, 360], scale: [0.8, 1, 0.8]
            }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: i * 2, ease: "easeInOut" }}
            style={{ position: 'absolute', fontSize: '2rem', filter: 'blur(1px)' }}
          >
            {['✨', '🎗️', '🛍️', '💰', '🏵️'][i % 5]}
          </motion.div>
        ))}
      </div>
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', marginBottom: '1.5rem', color: 'white' }}>বাঙালি বাজার</h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ fontSize: '1.4rem', color: 'var(--accent-color)', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
          >
            <ShoppingBag size={24} /> The Cultural Marketplace
          </motion.p>
          <p style={{ maxWidth: '700px', margin: '2.5rem auto 0', color: 'white', opacity: 0.7, fontSize: '1.3rem', lineHeight: 1.8, fontWeight: 300 }}>
            Curating the finest heritage crafts and artisanal treasures of Bengal. Every purchase directly empowers traditional craftsmen.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '3.5rem' }}>
          {products.map(product => (
            <motion.div 
              key={product.id} 
              className="glass-panel"
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02, background: 'rgba(255,255,255,0.05)' }}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                overflow: 'hidden', 
                padding: '0', 
                background: 'rgba(255,255,255,0.02)', 
                borderColor: 'rgba(255,255,255,0.05)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5)'
              }}
            >
              <div style={{ height: '300px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7rem', position: 'relative' }}>
                 <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', padding: '0.6rem 1.5rem', background: 'var(--accent-color)', backdropFilter: 'blur(10px)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 900, color: 'black', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {product.category}
                 </div>
                 <motion.span 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 >
                    {product.icon}
                 </motion.span>
                 <button style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', width: '50px', height: '50px', borderRadius: '50%', background: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                    <Heart size={22} color="var(--primary-color)" fill={product.id % 2 === 0 ? "var(--primary-color)" : "none"} />
                 </button>
              </div>

              <div style={{ padding: '3.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>{product.name}</h3>
                <p style={{ fontSize: '1.15rem', color: 'white', opacity: 0.5, lineHeight: 1.8, marginBottom: '3rem', flexGrow: 1, fontWeight: 300 }}>{product.desc}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 900, opacity: 0.4, textTransform: 'uppercase', color: 'white', letterSpacing: '2px' }}>Price</span>
                    <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--accent-color)' }}>{product.price}</span>
                  </div>
                  <button className="btn-premium" style={{ padding: '1.2rem 2.5rem', borderRadius: '100px', fontSize: '1rem' }}>
                    Collect <ShoppingCart size={20} style={{ marginLeft: '0.75rem' }} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginTop: '8rem' }}>
           <div className="glass-panel" style={{ padding: '6rem 4rem', border: '2px dashed rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.01)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-50%', left: '10%', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(255,179,0,0.05), transparent 70%)', filter: 'blur(100px)', zIndex: -1 }} />
              <h3 style={{ fontSize: '2.5rem', color: 'white', fontWeight: 900, marginBottom: '1rem' }}>Custom Artistic Commissions</h3>
              <p style={{ color: 'white', opacity: 0.6, fontSize: '1.4rem', marginBottom: '3.5rem', maxWidth: '800px', marginInline: 'auto', fontWeight: 300 }}>Looking for a one-of-a-kind masterpiece? Connect directly with national award-winning artisans for personalized heritage pieces.</p>
              <button className="btn-secondary" style={{ padding: '1.5rem 5rem', fontSize: '1.2rem', color: 'white', borderColor: 'rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
                Chat with Artisans <MessageCircle size={24} />
              </button>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Shop;
