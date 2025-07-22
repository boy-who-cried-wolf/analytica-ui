import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface MotionGradientCircleProps {
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
  opacity?: number;
  className?: string;
}

const gradients = [
  'radial-gradient(circle at 30% 30%, #6EE7B7 0%, #3B82F6 100%)',
  'radial-gradient(circle at 70% 70%, #F472B6 0%, #6366F1 100%)',
  'radial-gradient(circle at 50% 50%, #FDE68A 0%, #F59E42 100%)',
  'radial-gradient(circle at 60% 40%, #A5B4FC 0%, #F472B6 100%)',
];

export const MotionGradientCircle: React.FC<MotionGradientCircleProps> = ({
  size = 520,
  top,
  left,
  right,
  bottom,
  zIndex = 0,
  opacity = 0.45,
  className = '',
}) => {
  const controls = useAnimation();

  React.useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: Math.random() * 120 - 60,
          y: Math.random() * 120 - 60,
          background: gradients[Math.floor(Math.random() * gradients.length)],
          transition: { duration: 7, ease: 'easeInOut' },
        });
      }
    };
    animate();
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      initial={{
        x: 0,
        y: 0,
        background: gradients[0],
      }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        top,
        left,
        right,
        bottom,
        zIndex,
        opacity,
        pointerEvents: 'none',
        filter: 'blur(32px)',
        background: gradients[0],
      }}
      className={className}
    />
  );
};

export default MotionGradientCircle; 