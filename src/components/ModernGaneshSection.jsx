import React from 'react';
import { motion } from 'framer-motion';

const ModernGaneshSection = () => {
  const modernGaneshUrl = 'C:/Users/NIKITA HOME PERSONAL/.gemini/antigravity/brain/13fed1c1-bdd9-4d7a-8c0b-1824a536584a/modern_ganesha_1775646455504.png';
  return (
    <motion.div
      className="glass-panel glow-effect"
      style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '250px',
        height: '250px',
        overflow: 'hidden',
        borderRadius: '20px',
        cursor: 'pointer',
        zIndex: 5,
      }}
      whileHover={{ scale: 1.08, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={modernGaneshUrl}
        alt="Modern Ganesh"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </motion.div>
  );
};

export default ModernGaneshSection;
