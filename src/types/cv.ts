import type { ImageMetadata } from 'astro';

/** A month-precision date shown on the page, with a machine-readable twin for `<time>`. */
export interface MonthDate {
  /** Human-readable label, e.g. `Nov 2023`. */
  label: string;
  /** ISO 8601 value for the `datetime` attribute, e.g. `2023-11`. */
  iso: string;
}

export interface ContactLink {
  label: string;
  href: string;
  /** Icon name understood by `astro-icon` (`<set>:<name>` or a local file in `src/icons`). */
  icon: string;
  /** Tooltip describing where the link leads. */
  title?: string;
  external?: boolean;
}

export interface Profile {
  fullName: string;
  role: string;
  tagline: string;
  location: string;
  photoAlt: string;
  /** "About me" paragraphs. */
  about: string[];
  contacts: ContactLink[];
  /** Path of the downloadable CV inside `public/`. */
  cvFile: string;
}

export interface Project {
  name: string;
  /** Marks projects whose client name is covered by a non-disclosure agreement. */
  isNda?: boolean;
  summary: string;
  responsibilities: string[];
  stack: string[];
}

export interface Experience {
  company: string;
  role: string;
  start: MonthDate;
  /** Omit for the current position. */
  end?: MonthDate;
  projects: Project[];
}

export interface Skill {
  name: string;
  icon: string;
  /** Official documentation / product page opened on click. */
  url: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Education {
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
  focusAreas: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issued: MonthDate;
  expires: MonthDate;
  badge: ImageMetadata;
  /** Public Credly verification page. */
  credlyUrl: string;
}

export type BookStatus = 'read' | 'reading' | 'planned';

export interface Book {
  title: string;
  authors: string[];
  cover: ImageMetadata;
  /** Official publisher page. */
  url: string;
  status: BookStatus;
}

export interface NavItem {
  id: string;
  label: string;
}
