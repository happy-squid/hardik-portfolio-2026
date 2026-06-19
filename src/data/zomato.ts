export interface ProjectMetadataItem {
  label: string;
  value: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  promise: string;
  metadata: {
    readTime: string;
    category: string;
    tools: string;
    projectType: string;
    role: string;
    scope: string;
  };
  heroAlt: string;
  heroVideo?: string;
  valueAdded: {
    label: string;
    statement: string;
  };
  intro: {
    heading: string;
    body: string;
  };
  systemMap: {
    src: string | null;
    alt: string;
  };
}

export const zomatoProject: ProjectData = {
  slug: 'zomato-delivery',
  title: 'Zomato Delivery',
  promise: 'Reducing last-hundred-meter friction for delivery workers.',
  metadata: {
    readTime: '5 min',
    category: 'Product Design, UX Research, Systems Thinking',
    tools: 'Figma, FigJam',
    projectType: 'Self-initiated',
    role: 'End-to-end Product Designer',
    scope: 'Research, systems mapping, interaction design, UI and prototyping',
  },
  heroAlt:
    'Zomato Delivery — product-screen composition showing the redesigned delivery worker interface',
  heroVideo: '/projects/zomato/cover-loop.mp4',
  valueAdded: {
    label: 'Value added for Zomato',
    statement:
      'Fewer delivery delays and support calls caused by difficult last-hundred-meter navigation.',
  },
  intro: {
    heading: 'Who is this centered around?',
    body: 'This project focuses on full-time food-delivery workers navigating the final stretch between a mapped destination and the customer\'s actual doorstep. Apartment blocks, unclear entrances and unreliable instructions turn a short distance into repeated calls, physical effort and delivery delays.',
  },
  systemMap: {
    src: '/projects/zomato/Delivery Flow.jpg',
    alt: 'System map showing the relationships between delivery workers, customers, apartment blocks, navigation gaps and support touchpoints that create last-hundred-meter friction',
  },
};
