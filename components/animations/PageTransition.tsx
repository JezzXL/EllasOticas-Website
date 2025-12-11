"use client";

import { useEffect, useRef } from "react";
import { fadeInUp } from "@/lib/gsap/animations";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className,
}: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Anima a entrada da página
      fadeInUp(containerRef.current, {
        duration: 0.6,
        delay: 0.2,
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}