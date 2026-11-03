import type { Profile } from '@/types/cv';

export const profile: Profile = {
  fullName: 'Vladyslav Huhlia',
  role: 'Software Engineer (Node.js)',
  tagline:
    'AWS Certified Node.js engineer building scalable, multi-tenant backends, event-driven systems and AI-powered features.',
  location: 'Ivano-Frankivsk, Ukraine',
  photoAlt: 'Vladyslav Huhlia at a desk, wearing headphones',
  cvFile: 'Vladyslav_Huhlia_Software_Engineer_Resume.pdf',
  about: [
    'AWS Certified Node.js Software Engineer with proven experience designing and developing scalable, multi-tenant backend architectures from scratch.',
    'I specialize in building high-availability systems, optimizing complex data workflows, and integrating AI capabilities like RAG into modern web applications.',
    'Adept at leveraging modern cloud infrastructure and event-driven patterns to deliver robust, maintainable solutions tailored to complex business domains.',
  ],
  contacts: [
    {
      label: 'vladyslav.huhlia@gmail.com',
      href: 'mailto:vladyslav.huhlia@gmail.com',
      icon: 'tabler:mail',
      title: 'Send an email',
    },
    {
      label: '+380 99 010 95 70',
      href: 'tel:+380990109570',
      icon: 'tabler:phone',
      title: 'Call',
    },
    {
      label: 'linkedin.com/in/vladyslav-huhlia',
      href: 'https://www.linkedin.com/in/vladyslav-huhlia',
      icon: 'tabler:brand-linkedin',
      title: 'LinkedIn profile',
      external: true,
    },
    {
      label: 'Ivano-Frankivsk, Ukraine',
      href: 'https://www.google.com/maps/place/Ivano-Frankivsk,+Ivano-Frankivsk+Oblast,+Ukraine',
      icon: 'tabler:map-pin',
      title: 'Open in Google Maps',
      external: true,
    },
  ],
};
