import codemalLogo from '../assets/optimized/codemal.png'
import hysanLogo from '../assets/optimized/hysan.png'
import letstechLogo from '../assets/optimized/letstech.png'
import sabaiLogo from '../assets/optimized/sabai.png'
import sabaiProductImage from '../assets/optimized/sabai-product.jpg'
import samapLogo from '../assets/optimized/samap.png'
import whereLogo from '../assets/optimized/where.png'

export const PROFILE = {
  name: 'Kyaw Ko Ko Tun',
  role: 'Full-stack Engineer & Product Builder',
  headline: ['Systems change', 'what teams can do.'],
  loaderGreeting: 'Welcome. I’m Kyaw Ko.',
  introduction:
    'I build dependable digital products for growing teams and communities—from early architecture to production.',
  location: 'Rangoon, Myanmar',
  timezone: 'GMT+6:30',
  email: 'kyawkokotun888@gmail.com',
  availability: 'Open to new work',
  proofPoints: [
    'Products shipped to production',
    'Engineering leadership',
    "Founder, Let's Tech Club",
    'Based in Myanmar',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/BradyTun/' },
    { label: 'Facebook', href: 'https://www.facebook.com/kyawkokotun888/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kyawkokotun/' },
  ],
}

export const OPERATING_RANGE = [
  'Full-Stack Engineering',
  'System Architecture',
  'Product Thinking',
  'AI Agents',
  'Reliable Infrastructure',
  'UX Thinking',
  'Community Work',
]

export const PROJECTS = [
  {
    id: '01',
    name: "Let's Tech Club",
    shortName: 'LTC',
    logo: letstechLogo,
    year: '2026',
    category: 'EdTech Platform',
    role: 'Founder & CEO',
    summary:
      'A practical technology education platform helping the next generation of developers learn by building real projects.',
    challenge:
      'Turn a community-led education idea into a clear, dependable learning product that can grow with its students.',
    contribution:
      'Led product direction, system planning, engineering, and the path from an early concept to a finished platform.',
    outcome:
      'Launched as a live platform with a practical, project-based learning experience.',
    stack: ['Next.js', 'Django', 'PostgreSQL', 'AWS'],
    link: 'https://letstechclub.com',
    status: 'Live',
    featured: true,
    palette: { background: '#5A32D6', foreground: '#F4F0FF', accent: '#BFAAFF' },
  },
  {
    id: '02',
    name: 'Sabai Job',
    shortName: 'SJ',
    logo: sabaiLogo,
    artwork: sabaiProductImage,
    artworkAlt: 'Sabai Job mobile interface showing verified job listings',
    year: '2025',
    category: 'Cross-border Marketplace',
    role: 'Engineering & Product',
    summary:
      "A marketplace connecting Myanmar's blue-collar workers with verified employment opportunities in Thailand.",
    challenge:
      'Make a high-trust employment journey understandable for workers navigating cross-border opportunities.',
    contribution:
      'Worked across product decisions and full-stack delivery, shaping the marketplace workflows and supporting systems.',
    outcome:
      'Delivered a live product that makes verified opportunities easier to discover and navigate.',
    stack: ['React', 'Django', 'PostgreSQL', 'Docker'],
    link: 'https://sabaijob.com',
    status: 'Live',
    featured: true,
    palette: { background: '#0B7169', foreground: '#ECFAF4', accent: '#8AD4BF' },
  },
  {
    id: '03',
    name: 'FinTech Exchange',
    shortName: 'FX',
    year: '2025',
    category: 'Financial Infrastructure',
    role: 'System Architect',
    summary:
      'A confidential P2P financial exchange designed around reliable, secure, and understandable transaction flows.',
    challenge:
      'Design high-trust transaction infrastructure while keeping sensitive product and operational details confidential.',
    contribution:
      'Defined the system architecture with a focus on security boundaries, reliable state transitions, and clear failure handling.',
    outcome:
      'Produced a resilient architectural foundation for auditable, failure-aware exchange workflows.',
    stack: ['React', 'Django', 'PostgreSQL', 'AWS'],
    status: 'Confidential',
    palette: { background: '#163C72', foreground: '#F0F5FF', accent: '#83A9E8' },
  },
  {
    id: '04',
    name: 'OSBAY MarTech Suite',
    shortName: 'OS',
    year: '2026',
    category: 'Enterprise Product',
    role: 'Senior Software Engineer',
    summary:
      'Built production tools for automated lead research, market analysis, and conversion workflows with a focus on reliable operation.',
    challenge:
      'Turn fragmented, repetitive marketing research and conversion tasks into dependable product workflows.',
    contribution:
      'Built and maintained full-stack production features across product interfaces, backend services, data, and deployment infrastructure.',
    outcome:
      'Put automation into production to support ongoing lead research, market analysis, and conversion work.',
    stack: ['Next.js', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
    status: 'In production',
    palette: { background: '#C24A2B', foreground: '#FFF3EC', accent: '#F7B09B' },
  },
  {
    id: '05',
    name: 'WHERE',
    shortName: 'WH',
    logo: whereLogo,
    year: '2026',
    category: 'Open Source',
    role: 'Founder',
    summary:
      'An open-source networking product for people to connect, share knowledge, and build community in public.',
    challenge:
      'Create a public networking experience that feels useful to communities while remaining open and approachable.',
    contribution:
      'Defined the product direction and established the full-stack technical foundation for the open-source platform.',
    outcome:
      'Established the core product direction and development foundation; the platform remains in active development.',
    stack: ['Next.js', 'PostgreSQL', 'Docker'],
    status: 'In development',
    palette: { background: '#7B55A6', foreground: '#FBF3FF', accent: '#DCC1F0' },
  },
  {
    id: '06',
    name: 'Hysan Education',
    shortName: 'HY',
    logo: hysanLogo,
    year: '2024–2025',
    category: 'Education Technology',
    role: 'Tech Team Lead',
    summary:
      'A school management system for one of Myanmar’s leading English-language education organizations.',
    challenge:
      'Translate day-to-day school operations into maintainable workflows for staff, students, and the technical team.',
    contribution:
      'Led the development team, clarified technical direction, and guided delivery of the management platform.',
    outcome:
      'Delivered the system and established a clearer technical foundation for ongoing operations.',
    stack: ['React', 'Django', 'PostgreSQL'],
    status: 'Delivered',
    palette: { background: '#9D233C', foreground: '#FFF1F2', accent: '#E8A4B1' },
  },
]

export const ADDITIONAL_WORK = [
  'Custom point-of-sale systems',
  'Modular LMS platforms',
  'Telegram bots and automations',
  'Lead generation tools',
  'Market data scrapers',
  'End-user utilities',
]

export const EXPERIENCE = [
  {
    period: '2025 — Present',
    role: 'CEO & Founder',
    org: "Let's Tech Club",
    logo: letstechLogo,
    type: 'Founder',
    description:
      'Founded and run a tech education club focused on practical training for aspiring developers.',
  },
  {
    period: '2025 — Present',
    role: 'Senior Software Engineer',
    org: 'OSBAY',
    type: 'Engineering',
    description:
      'Build MarTech tools for lead research, market analysis, and conversion workflows, with a focus on reliability.',
  },
  {
    period: '2024 — 2025',
    role: 'Tech Team Lead',
    org: 'Hysan Education',
    logo: hysanLogo,
    type: 'EdTech',
    description:
      "Led the development team to build a school management system for one of Myanmar's leading English language schools.",
  },
  {
    period: '2023 — 2025',
    role: 'Founder',
    org: 'Code Mal Youth Org',
    logo: codemalLogo,
    type: 'Community',
    description:
      'Started a youth coding community and shared beginner-friendly resources to help more students learn to code.',
  },
  {
    period: '2023 — 2024',
    role: 'Chief Technology Officer',
    org: 'Sa Map',
    logo: samapLogo,
    type: 'Leadership',
    description:
      'Served as CTO in a youth entrepreneurship organization, supporting product direction and technical decisions.',
  },
  {
    period: 'Before 2023',
    role: 'Freelance Dev, Intern & Junior/Mid Roles',
    org: 'Various Organizations',
    type: 'Foundations',
    description:
      'Worked across freelance projects, internships, and junior-to-mid engineering roles that built my technical foundation.',
  },
]

export const CAPABILITIES = [
  {
    title: 'Engineering',
    items: ['Full-stack development', 'System architecture', 'Reliable infrastructure'],
  },
  {
    title: 'Stack',
    items: ['React · Next.js', 'Django · PostgreSQL', 'Docker · AWS'],
  },
  {
    title: 'Practice',
    items: ['AI-assisted workflows', 'Project management', 'UX thinking · Product'],
  },
]

export const FOCUS_POINTS = [
  {
    title: 'Build end to end',
    text: 'I enjoy taking products from rough ideas to stable releases.',
  },
  {
    title: 'Keep systems clear',
    text: 'I prioritize architecture and code that teams can maintain.',
  },
  {
    title: 'Contribute locally',
    text: 'I support developer communities in every practical way I can.',
  },
]

export const DISCIPLINES = ['Gym', 'Archery', 'Chess', 'Guitar', 'Coffee', 'Arts']
