/** Fades `[data-reveal]` elements in the first time they scroll into view. */
export function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (!('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );

  targets.forEach((target) => observer.observe(target));
}
