/**
 * Moves a soft radial "spotlight" with the pointer by updating CSS custom properties on the
 * given element. Only enabled for fine pointers and when the user has not requested
 * reduced motion; updates are batched to one per animation frame.
 */
export function initSpotlight(element: HTMLElement): void {
  const canAnimate = window.matchMedia(
    '(pointer: fine) and (prefers-reduced-motion: no-preference)',
  ).matches;
  if (!canAnimate) return;

  let frame = 0;
  let x = 0;
  let y = 0;

  window.addEventListener(
    'pointermove',
    (event) => {
      x = event.clientX;
      y = event.clientY;
      if (frame) return;

      frame = requestAnimationFrame(() => {
        element.style.setProperty('--spotlight-x', `${x}px`);
        element.style.setProperty('--spotlight-y', `${y}px`);
        element.dataset.active = '';
        frame = 0;
      });
    },
    { passive: true },
  );
}
