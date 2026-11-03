import type { Education, Language } from '@/types/cv';

export const education: Education[] = [
  {
    degree: 'PhD in Computer Science',
    institution: 'Zaporizhzhia National University',
    startYear: 2019,
    endYear: 2025,
    focusAreas: [
      'Database Theory',
      'Data Engineering',
      'Machine Learning',
      'Web Development',
      'Cloud Technologies',
      'Discrete Math',
    ],
  },
];

export const languages: Language[] = [
  { name: 'English', level: 'Advanced' },
  { name: 'Ukrainian', level: 'Native' },
  { name: 'Russian', level: 'Native' },
];
