import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationConfig } from "@/types";

// Registrar o plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Configuração padrão do ScrollTrigger
 */
const defaultScrollConfig = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
};

/**
 * Animação Fade In on Scroll
 */
export const fadeInOnScroll = (
  element: gsap.TweenTarget,
  config?: AnimationConfig & { start?: string; end?: string }
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
      duration: config?.duration || 1,
      ease: config?.ease || "power3.out",
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: config?.start || defaultScrollConfig.start,
        end: config?.end || defaultScrollConfig.end,
        toggleActions: defaultScrollConfig.toggleActions,
      },
    }
  );
};

/**
 * Animação Stagger on Scroll
 */
export const staggerOnScroll = (
  elements: gsap.TweenTarget,
  config?: AnimationConfig & { start?: string }
) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: config?.duration || 0.8,
      stagger: config?.stagger || 0.15,
      ease: config?.ease || "power2.out",
      scrollTrigger: {
        trigger: elements as gsap.DOMTarget,
        start: config?.start || "top 85%",
        toggleActions: defaultScrollConfig.toggleActions,
      },
    }
  );
};

/**
 * Animação Parallax on Scroll
 */
export const parallaxOnScroll = (
  element: gsap.TweenTarget,
  speed: number = 0.5
) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

/**
 * Animação Scale on Scroll
 */
export const scaleOnScroll = (
  element: gsap.TweenTarget,
  config?: AnimationConfig & { start?: string; scaleFrom?: number }
) => {
  return gsap.fromTo(
    element,
    {
      scale: config?.scaleFrom || 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: config?.duration || 1,
      ease: config?.ease || "power2.out",
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: config?.start || "top 80%",
        toggleActions: defaultScrollConfig.toggleActions,
      },
    }
  );
};

/**
 * Animação Horizontal Scroll
 */
export const horizontalScroll = (
  container: gsap.TweenTarget,
  items: gsap.TweenTarget
) => {
  const getScrollAmount = () => {
    const itemsElement = document.querySelector(items as string);
    if (!itemsElement) return 0;
    const itemsWidth = itemsElement.scrollWidth;
    return -(itemsWidth - window.innerWidth);
  };

  return gsap.to(items, {
    x: getScrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: container as gsap.DOMTarget,
      start: "top top",
      end: () => `+=${Math.abs(getScrollAmount())}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
};

/**
 * Animação Pin on Scroll (fixar elemento)
 */
export const pinOnScroll = (
  element: gsap.TweenTarget,
  config?: { start?: string; end?: string }
) => {
  return ScrollTrigger.create({
    trigger: element as gsap.DOMTarget,
    start: config?.start || "top top",
    end: config?.end || "bottom top",
    pin: true,
    pinSpacing: false,
  });
};

/**
 * Animação Reveal on Scroll (cortina)
 */
export const revealOnScroll = (
  element: gsap.TweenTarget,
  config?: AnimationConfig & { start?: string; direction?: "left" | "right" }
) => {
  const direction = config?.direction || "left";
  const clipPath =
    direction === "left"
      ? { from: "inset(0 100% 0 0)", to: "inset(0 0% 0 0)" }
      : { from: "inset(0 0 0 100%)", to: "inset(0 0 0 0%)" };

  return gsap.fromTo(
    element,
    {
      clipPath: clipPath.from,
    },
    {
      clipPath: clipPath.to,
      duration: config?.duration || 1.2,
      ease: config?.ease || "power4.inOut",
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: config?.start || "top 75%",
        toggleActions: defaultScrollConfig.toggleActions,
      },
    }
  );
};

/**
 * Refresh ScrollTrigger (útil após mudanças no DOM)
 */
export const refreshScrollTrigger = () => {
  if (typeof window !== "undefined") {
    ScrollTrigger.refresh();
  }
};

/**
 * Kill todos os ScrollTriggers
 */
export const killAllScrollTriggers = () => {
  if (typeof window !== "undefined") {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
};

/**
 * Criar ScrollTrigger customizado
 */
export const createScrollTrigger = (config: ScrollTrigger.Vars) => {
  if (typeof window !== "undefined") {
    return ScrollTrigger.create(config);
  }
};