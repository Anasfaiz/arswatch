import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * Wrapper component that applies scroll-triggered animations
 */
export default function AnimatedSection({
  children,
  animationType = "fadeInUp",
  ...props
}) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0)"
          : animationType === "fadeInUp"
            ? "translateY(40px)"
            : animationType === "fadeInLeft"
              ? "translateX(-40px)"
              : animationType === "fadeInRight"
                ? "translateX(40px)"
                : "scale(0.9)",
        transition: "all 0.8s ease-out",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
