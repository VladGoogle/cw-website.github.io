import type { SkillGroup } from '@/types/cv';

/**
 * Icons come from the Simple Icons / Tabler Iconify sets, or from local SVGs in
 * `src/icons/` (referenced without a prefix) for brands missing from those sets.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend & APIs',
    skills: [
      {
        name: 'Node.js',
        icon: 'simple-icons:nodedotjs',
        url: 'https://nodejs.org/docs/latest/api/',
      },
      { name: 'NestJS', icon: 'simple-icons:nestjs', url: 'https://docs.nestjs.com/' },
      { name: 'GraphQL', icon: 'simple-icons:graphql', url: 'https://graphql.org/learn/' },
      { name: 'gRPC', icon: 'grpc', url: 'https://grpc.io/docs/' },
      {
        name: 'WebSockets',
        icon: 'websocket',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
      },
      { name: 'Microservices', icon: 'tabler:topology-star-3', url: 'https://microservices.io/' },
    ],
  },
  {
    title: 'Databases & ORMs',
    skills: [
      {
        name: 'PostgreSQL',
        icon: 'simple-icons:postgresql',
        url: 'https://www.postgresql.org/docs/',
      },
      { name: 'MySQL', icon: 'tabler:brand-mysql', url: 'https://dev.mysql.com/doc/' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb', url: 'https://www.mongodb.com/docs/' },
      { name: 'Redis', icon: 'simple-icons:redis', url: 'https://redis.io/docs/latest/' },
      {
        name: 'Elasticsearch',
        icon: 'simple-icons:elasticsearch',
        url: 'https://www.elastic.co/docs',
      },
      { name: 'Prisma', icon: 'simple-icons:prisma', url: 'https://www.prisma.io/orm' },
      { name: 'TypeORM', icon: 'simple-icons:typeorm', url: 'https://typeorm.io/' },
    ],
  },
  {
    title: 'Messaging & Background Jobs',
    skills: [
      { name: 'RabbitMQ', icon: 'simple-icons:rabbitmq', url: 'https://www.rabbitmq.com/docs' },
      {
        name: 'Kafka',
        icon: 'simple-icons:apachekafka',
        url: 'https://kafka.apache.org/documentation/',
      },
      { name: 'BullMQ', icon: 'bullmq', url: 'https://docs.bullmq.io/' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'simple-icons:amazonwebservices', url: 'https://docs.aws.amazon.com/' },
      {
        name: 'Google Cloud',
        icon: 'simple-icons:googlecloud',
        url: 'https://cloud.google.com/docs',
      },
      {
        name: 'DigitalOcean',
        icon: 'simple-icons:digitalocean',
        url: 'https://docs.digitalocean.com/',
      },
      { name: 'Firebase', icon: 'simple-icons:firebase', url: 'https://firebase.google.com/docs' },
      { name: 'Docker', icon: 'simple-icons:docker', url: 'https://docs.docker.com/' },
      {
        name: 'Kubernetes',
        icon: 'simple-icons:kubernetes',
        url: 'https://kubernetes.io/docs/home/',
      },
      { name: 'Nginx', icon: 'simple-icons:nginx', url: 'https://nginx.org/en/docs/' },
      { name: 'Linux', icon: 'simple-icons:linux', url: 'https://docs.kernel.org/' },
      { name: 'Sentry', icon: 'simple-icons:sentry', url: 'https://docs.sentry.io/' },
    ],
  },
  {
    title: 'AI & LLM Tooling',
    skills: [
      { name: 'Claude', icon: 'simple-icons:claude', url: 'https://platform.claude.com/docs' },
      { name: 'LangChain', icon: 'simple-icons:langchain', url: 'https://docs.langchain.com/' },
      { name: 'LangSmith', icon: 'langsmith', url: 'https://docs.smith.langchain.com/' },
      { name: 'Pinecone', icon: 'pinecone', url: 'https://docs.pinecone.io/' },
    ],
  },
  {
    title: 'Auth, Payments & Integrations',
    skills: [
      { name: 'Clerk', icon: 'simple-icons:clerk', url: 'https://clerk.com/docs' },
      { name: 'CASL', icon: 'casl', url: 'https://casl.js.org/' },
      { name: 'Stripe', icon: 'simple-icons:stripe', url: 'https://docs.stripe.com/' },
      // Late has rebranded to Zernio; getlate.dev redirects to the Zernio docs.
      { name: 'Late', icon: 'late', url: 'https://docs.zernio.com/' },
    ],
  },
];
