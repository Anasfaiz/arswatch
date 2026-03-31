import { useEffect, useRef, useState } from "react";

/**
 * Hook for triggering animations when element scrolls into view
 * @param {number} threshold - IntersectionObserver threshold (0-1)
 * @param {string} rootMargin - IntersectionObserver rootMargin
 * @returns {[React.RefObject, boolean]} - [ref to attach to element, isVisible]
 */
export function useScrollAnimation(
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
