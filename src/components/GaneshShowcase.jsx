import React from 'react';
import { motion } from 'framer-motion';

const GaneshShowcase = () => {
  const modernGaneshUrl = 'https://cdn.pixabay.com/photo/2020/09/02/13/03/ganesha-5536986_1280.png';
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

export default GaneshShowcase;
