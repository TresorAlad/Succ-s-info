import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, useMotionValueEvent } from 'framer-motion';

const Counter = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix
  const numberPart = parseInt(value) || 0;
  const suffix = value.toString().replace(numberPart.toString(), '');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numberPart, { 
        duration: duration,
        ease: "easeOut" 
      });
      return controls.stop;
    }
  }, [isInView, count, numberPart, duration]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

export default Counter;
