import cloudPractitionerBadge from '@/assets/images/certifications/aws-certified-cloud-practitioner.png';
import developerAssociateBadge from '@/assets/images/certifications/aws-certified-developer-associate.png';
import type { Certification } from '@/types/cv';

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: { label: 'Mar 2024', iso: '2024-03' },
    expires: { label: 'Mar 2027', iso: '2027-03' },
    badge: cloudPractitionerBadge,
    credlyUrl: 'https://www.credly.com/badges/f44ed5a0-e5fd-4c4c-933a-c78780e23562/public_url',
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    issued: { label: 'Mar 2024', iso: '2024-03' },
    expires: { label: 'Mar 2027', iso: '2027-03' },
    badge: developerAssociateBadge,
    credlyUrl: 'https://www.credly.com/badges/e3630641-263e-41db-9cd7-e1024fed382b/public_url',
  },
];
