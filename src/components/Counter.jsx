import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  
  // Extract number and suffix
  const numberPart = typeof value === 'string' ? (parseInt(value) || 0) : value;
  const suffix = typeof value === 'string' ? value.replace(numberPart.toString(), '') : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const startValue = 0;
    const endValue = numberPart;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Use easeOutQuad for smooth ending
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easedProgress * (endValue - startValue) + startValue);
      
      setDisplayValue(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, numberPart, duration]);

  return (
    <span ref={ref} className="tabular-nums font-black">
      {displayValue}{suffix}
    </span>
  );
};

export default Counter;
