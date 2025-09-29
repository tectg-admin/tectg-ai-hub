import { useEffect, useRef } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  once?: boolean;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.1, delay = 0, once = true } = options;
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("style", `
              opacity: 1;
              transform: translateY(0);
              transition: opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s;
            `);
            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay, once]);

  return elementRef;
};
