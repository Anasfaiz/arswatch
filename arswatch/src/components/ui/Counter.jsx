import { useEffect, useRef, useState } from "react";

/**
 * Animated counter that increments when scrolled into view
 */
export default function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();

        let n = 0;
        const step = to / (1200 / 16);
        const t = setInterval(() => {
          n += step;
          if (n >= to) {
            setVal(to);
            clearInterval(t);
          } else {
            setVal(Math.floor(n));
          }
        }, 16);
      },
      { threshold: 0.3 },
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
