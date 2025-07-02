import { motion, MotionProps } from 'framer-motion';
import React from 'react';

export const FadeInDiv = ({ children, className = '', delay = 0.2 }: {children: React.ReactNode, className?: string, delay?:number} & MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
