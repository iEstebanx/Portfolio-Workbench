import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

/**
 * Scroll-reveal wrapper.
 * Children start hidden (faded + shifted down) and smoothly animate into place
 * the first time they scroll into the viewport.
 *
 * @param {number} delay    Delay in ms before the animation starts (use for staggering).
 * @param {number} y        Initial vertical offset in px.
 * @param {number} duration Animation duration in ms.
 */
export default function Reveal({ children, delay = 0, y = 40, duration = 800, sx, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Respect users who prefer reduced motion, and old browsers without IntersectionObserver.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
        willChange: 'opacity, transform',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

