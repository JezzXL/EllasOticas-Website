import gsap from "gsap";
import { AnimationConfig } from "@/types";

/**
 * Animação de Fade In com movimento vertical
 */
export const fadeInUp = (
  element: gsap.TweenTarget,
  config?: AnimationConfig
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: config?.duration || 0.8,
      delay: config?.delay || 0,
      ease: config?.ease || "power3.out",
    }
  );
};

/**
 * Animação de Fade In com movimento horizontal
 */
export const fadeInLeft = (
  element: gsap.TweenTarget,
  config?: AnimationConfig
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -60,
    },
    {
      opacity: 1,
      x: 0,
      duration: config?.duration || 0.8,
      delay: config?.delay || 0,
      ease: config?.ease || "power3.out",
    }
  );
};

/**
 * Animação de Fade In com movimento horizontal (direita)
 */
export const fadeInRight = (
  element: gsap.TweenTarget,
  config?: AnimationConfig
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: 60,
    },
    {
      opacity: 1,
      x: 0,
      duration: config?.duration || 0.8,
      delay: config?.delay || 0,
      ease: config?.ease || "power3.out",
    }
  );
};

/**
 * Animação de Scale
 */
export const scaleIn = (
  element: gsap.TweenTarget,
  config?: AnimationConfig
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: config?.duration || 0.6,
      delay: config?.delay || 0,
      ease: config?.ease || "back.out(1.4)",
    }
  );
};

/**
 * Animação Stagger para múltiplos elementos
 */
export const staggerFadeIn = (
  elements: gsap.TweenTarget,
  config?: AnimationConfig
) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: config?.duration || 0.6,
      stagger: config?.stagger || 0.1,
      ease: config?.ease || "power2.out",
    }
  );
};

/**
 * Animação de Hover para Cards
 */
export const hoverScale = (element: gsap.TweenTarget) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(element, {
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out",
  });

  return tl;
};

/**
 * Animação de Reveal (cortina)
 */
export const revealAnimation = (
  element: gsap.TweenTarget,
  config?: AnimationConfig
) => {
  return gsap.fromTo(
    element,
    {
      clipPath: "inset(0 100% 0 0)",
    },
    {
      clipPath: "inset(0 0% 0 0)",
      duration: config?.duration || 1.2,
      delay: config?.delay || 0,
      ease: config?.ease || "power4.inOut",
    }
  );
};