/**
 * Marks the sidebar link of the section currently crossing the middle of the viewport with
 * `aria-current="true"`, which also drives its active styling.
 */
export function initScrollSpy(linkSelector = '[data-nav-link]'): void {
  const links = new Map<string, HTMLAnchorElement>();
  document.querySelectorAll<HTMLAnchorElement>(linkSelector).forEach((link) => {
    const id = decodeURIComponent(link.hash.slice(1));
    if (id) links.set(id, link);
  });

  const sections = [...links.keys()]
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null);

  if (sections.length === 0 || !('IntersectionObserver' in window)) return;

  const setActive = (activeId: string): void => {
    links.forEach((link, id) => {
      if (id === activeId) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    },
    // A thin horizontal band just above the vertical centre of the viewport.
    { rootMargin: '-40% 0px -59% 0px' },
  );

  sections.forEach((section) => observer.observe(section));
}
