import type { NavItem } from '@/types/cv';

/** Single source of truth for section anchors — used by the sidebar nav and the sections. */
export const SECTION = {
  about: { id: 'about', label: 'About' },
  experience: { id: 'experience', label: 'Experience' },
  skills: { id: 'skills', label: 'Skills' },
  education: { id: 'education', label: 'Education' },
  certifications: { id: 'certifications', label: 'Certifications' },
  books: { id: 'bookshelf', label: 'Bookshelf' },
} as const satisfies Record<string, NavItem>;

export const navigation: NavItem[] = Object.values(SECTION);
