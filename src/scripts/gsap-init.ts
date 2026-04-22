/**
 * GSAP initialization for UGK fan landing
 * - ScrollTrigger fade-up animations
 * - Album card 3D tilt on hover
 * - Timeline SVG line draw
 * - Hero parallax
 * All with prefers-reduced-motion fallback
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Check reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // ---- Fade-up stagger for all sections ----
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    const items = section.querySelectorAll('h2, h3, p, blockquote, article, .member-card, .track-item, .gallery-item');
    if (items.length === 0) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  // ---- Hero parallax ----
  const heroImg = document.querySelector('#hero img') as HTMLElement | null;
  if (heroImg) {
    gsap.to(heroImg, {
      y: 80,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  // ---- Album card 3D tilt ----
  const albumCards = document.querySelectorAll('.album-card');
  albumCards.forEach((card) => {
    const el = card as HTMLElement;
    el.style.transformStyle = 'preserve-3d';
    el.style.perspective = '800px';

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.3s ease-out';
    });

    el.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  });

  // ---- Timeline SVG line draw ----
  const timelineLine = document.querySelector('.timeline-line') as SVGLineElement | null;
  if (timelineLine) {
    const length = timelineLine.getTotalLength();
    timelineLine.style.strokeDasharray = String(length);
    timelineLine.style.strokeDashoffset = String(length);

    gsap.to(timelineLine, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#timeline',
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
      },
    });
  }

  // ---- Member cards 3D tilt (subtle) ----
  const memberCards = document.querySelectorAll('.member-card');
  memberCards.forEach((card) => {
    const el = card as HTMLElement;
    el.style.transformStyle = 'preserve-3d';

    el.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  });
}

// ---- Discography scroll-snap keyboard support ----
const scrollContainer = document.querySelector('.discography-scroll');
if (scrollContainer) {
  scrollContainer.addEventListener('keydown', (e: Event) => {
    const keyEvent = e as KeyboardEvent;
    if (keyEvent.key === 'ArrowRight') {
      scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
    } else if (keyEvent.key === 'ArrowLeft') {
      scrollContainer.scrollBy({ left: -320, behavior: 'smooth' });
    }
  });
}
