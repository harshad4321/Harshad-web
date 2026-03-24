import { Project, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'simplicapital',
    title: 'SimpliCapital',
    description: 'A comprehensive financial management platform designed to streamline capital workflows and automated reporting.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    image: 'https://picsum.photos/seed/finance/800/600'
  },
  {
    id: 'freelance-1',
    title: 'E-commerce Dashboard',
    description: 'Custom analytics dashboard for a local retail business to track sales and inventory in real-time.',
    tech: ['JavaScript', 'D3.js', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    image: 'https://picsum.photos/seed/dashboard/800/600'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'freelance',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    duration: '2024 - Present',
    points: [
      'Developed custom web solutions for small businesses using React and Node.js.',
      'Improved client workflow efficiency by 40% through automated reporting tools.',
      'Managed end-to-end project lifecycles from requirement gathering to deployment.'
    ]
  },
  {
    id: 'mantra',
    role: 'Software Developer',
    company: 'Mantra Collab',
    duration: '2023 - 2024',
    points: [
      'Collaborated on building scalable web applications using the MERN stack.',
      'Optimized database queries in MongoDB, reducing response times by 25%.',
      'Participated in daily stand-ups and code reviews to ensure high-quality deliverables.'
    ]
  },
  {
    id: 'safety',
    role: 'Safety Officer Intern',
    company: 'Industrial Safety Corp',
    duration: '2022 - 2023',
    points: [
      'Assisted in implementing safety protocols and conducting regular site inspections.',
      'Maintained detailed safety documentation and compliance reports.',
      'Coordinated with cross-functional teams to ensure a hazard-free work environment.'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Technical Skills',
    skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'MongoDB', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Business & Soft Skills',
    skills: ['Communication', 'Client Handling', 'Problem Solving', 'Documentation', 'Project Management']
  }
];
