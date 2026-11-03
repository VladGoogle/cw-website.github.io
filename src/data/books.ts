import aiEngineering from '@/assets/images/books/ai-engineering.jpg';
import buildingMicroservices from '@/assets/images/books/building-microservices.jpg';
import databaseInternals from '@/assets/images/books/database-internals.jpg';
import designingDataIntensiveApplications from '@/assets/images/books/designing-data-intensive-applications.jpg';
import domainDrivenDesign from '@/assets/images/books/domain-driven-design.jpg';
import fundamentalsOfDataEngineering from '@/assets/images/books/fundamentals-of-data-engineering.jpg';
import learningDomainDrivenDesign from '@/assets/images/books/learning-domain-driven-design.jpg';
import softwareArchitectureTheHardParts from '@/assets/images/books/software-architecture-the-hard-parts.jpg';
import type { Book, BookStatus } from '@/types/cv';

export const books: Book[] = [
  {
    title: 'Designing Data-Intensive Applications',
    authors: ['Martin Kleppmann'],
    cover: designingDataIntensiveApplications,
    url: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/',
    status: 'read',
  },
  {
    title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
    authors: ['Eric Evans'],
    cover: domainDrivenDesign,
    url: 'https://www.oreilly.com/library/view/domain-driven-design-tackling/0321125215/',
    status: 'read',
  },
  {
    title: 'Database Internals',
    authors: ['Alex Petrov'],
    cover: databaseInternals,
    url: 'https://www.oreilly.com/library/view/database-internals/9781492040330/',
    status: 'read',
  },
  {
    title: 'Fundamentals of Data Engineering',
    authors: ['Joe Reis', 'Matt Housley'],
    cover: fundamentalsOfDataEngineering,
    url: 'https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/',
    status: 'read',
  },
  {
    title: 'Learning Domain-Driven Design',
    authors: ['Vlad Khononov'],
    cover: learningDomainDrivenDesign,
    url: 'https://www.oreilly.com/library/view/learning-domain-driven-design/9781098100124/',
    status: 'reading',
  },
  {
    title: 'Building Microservices, 2nd Edition',
    authors: ['Sam Newman'],
    cover: buildingMicroservices,
    url: 'https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/',
    status: 'reading',
  },
  {
    title: 'AI Engineering',
    authors: ['Chip Huyen'],
    cover: aiEngineering,
    url: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/',
    status: 'planned',
  },
  {
    title: 'Software Architecture: The Hard Parts',
    authors: ['Neal Ford', 'Mark Richards', 'Pramod Sadalage', 'Zhamak Dehghani'],
    cover: softwareArchitectureTheHardParts,
    url: 'https://www.oreilly.com/library/view/software-architecture-the/9781492086888/',
    status: 'planned',
  },
];

/** Display order and copy for each reading status. */
export const bookShelves: { status: BookStatus; title: string }[] = [
  { status: 'read', title: 'Read' },
  { status: 'reading', title: 'Currently reading' },
  { status: 'planned', title: 'Up next' },
];
