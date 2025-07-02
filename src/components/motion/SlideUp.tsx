import { motion, MotionProps } from 'framer-motion';
import React from 'react';

type SlideUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
} & MotionProps;

export const  SlideUp = ({
  children,
  className = '',
  delay = 0.2,
  ...rest
}: SlideUpProps) =>  {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      viewport={{ once: false, amount: 0.2 }} // 👈 this triggers animation when 40% visible
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
