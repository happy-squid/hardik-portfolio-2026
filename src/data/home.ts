// Homepage data for the V1 portfolio landing page.
//
// Contact links (email, LinkedIn, resume) and writing links are intentionally
// left undefined until real values exist — the page renders honest fallbacks
// rather than dead links. Missing links are tracked in PROFILE_TODOS.md.

export interface FeaturedProject {
  title: string;
  description: string;
  tags: string[];
  /** Internal route handled by react-router. */
  href: string;
  thumbnail: { src: string; alt: string };
  /** One line on what this project proves to a hiring manager. */
  proof: string;
}

export interface Capability {
  title: string;
  text: string;
}

export interface HomeContact {
  heading: string;
  body: string;
  /** Left undefined until a real address exists; never fabricated. */
  email?: string;
  linkedin?: string;
}

export interface HomePageData {
  name: string;
  role: string;
  /** Public path to the resume PDF; only set when the file exists in public/. */
  resumeUrl?: string;
  hero: {
    heading: string;
    main: string;
    supporting: string;
  };
  featuredProjects: FeaturedProject[];
  capabilities: Capability[];
  toolsLabel: string;
  tools: string[];
  contact: HomeContact;
  /** Only rendered if real links exist; empty means the section is skipped. */
  writingLinks?: { label: string; href: string }[];
}

export const homePageData: HomePageData = {
  name: 'Hardik Monga',
  role: 'Product / Interaction Designer',
  resumeUrl: '/CV/Hardik-Monga-Resume.pdf',
  hero: {
    heading: 'Product / Interaction Designer',
    main: 'I design product interfaces and phygital interaction systems, from delivery workflows to airport mobility touchpoints.',
    supporting:
      'My work focuses on turning messy real-world situations into clear flows, screens, and service touchpoints.',
  },
  featuredProjects: [
    {
      title:
        "Helping delivery partners find the right entrance after reaching the customer's building",
      description:
        'A product design case study focused on last-hundred-meter delivery friction, community landmarks, and rider-facing UI decisions.',
      tags: ['Product Design', 'UX Research', 'UI', 'Systems Mapping'],
      href: '/projects/zomato-delivery',
      thumbnail: {
        src: '/projects/zomato/prototype.png',
        alt: 'Prototype of the Zomato delivery screen on a phone, showing community landmark photos with votes and rider-written directions.',
      },
      proof:
        'Shows how I identify a narrow workflow problem and translate it into a screen-level product response.',
    },
    {
      title: 'Passenger interaction layers for autonomous airport mobility',
      description:
        'A phygital interaction design thesis exploring GenUI cards, kiosks, and AMR screens across airport mobility touchpoints.',
      tags: ['Interaction Design', 'Phygital UX', 'GenUI', 'Systems Thinking'],
      href: '/projects/airport-amr',
      thumbnail: {
        src: '/projects/airport-amr/hero/hero-genui-in-airport.png',
        alt: 'Passenger holding a phone in an airport, showing a GenUI assistant interface for flight and gate guidance.',
      },
      proof:
        'Shows how I design across phone, kiosk, vehicle interior, and exterior display surfaces.',
    },
  ],
  capabilities: [
    {
      title: 'Product thinking',
      text: 'Narrowing broad problem areas into specific user moments, flows, and product decisions.',
    },
    {
      title: 'Interaction systems',
      text: 'Designing how people move between screens, touchpoints, physical spaces, and service states.',
    },
    {
      title: 'UI craft',
      text: 'Building clear interface layouts, screen hierarchies, and responsive presentation for web and product surfaces.',
    },
    {
      title: 'Research translation',
      text: 'Turning interviews, field observations, maps, and system diagrams into design direction.',
    },
  ],
  toolsLabel: 'Tools I use across design and prototyping',
  tools: [
    'Figma',
    'FigJam',
    'Illustrator',
    'Photoshop',
    'After Effects',
    'React',
    'TypeScript',
    'Tailwind',
    'Cursor',
    'ChatGPT',
  ],
  contact: {
    heading: "Let's talk about product and interaction design roles.",
    body: "I'm currently looking for Product Design, UI-UX, and Interaction Design opportunities where I can work on clear flows, useful interfaces, and systems that connect digital and physical experiences.",
    email: 'hardikmonga311@gmail.com',
    linkedin: 'https://www.linkedin.com/in/hardik-monga/',
  },
  // writingLinks intentionally omitted — no real links yet.
};
