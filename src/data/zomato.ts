export interface ProjectMetadataItem {
  label: string;
  value: string;
}

/** A single referenced media asset. Only assets approved for V1 are referenced. */
export interface MediaRef {
  src: string;
  alt: string;
  caption?: string;
  /** Hint for later rendering: dense diagrams should open in the zoom dialog. */
  zoomable?: boolean;
}

/** S4 — Overview: "The map ends at a pin." Moment + why it matters. Text-only in V1. */
export interface OverviewMoment {
  heading: string;
  body: string;
}

/** S5 — Current journey: the "delivery gap" map (Delivery Flow.jpg). */
export interface CurrentJourney {
  heading: string;
  body: string;
  media: MediaRef;
}

/** A compact stat card inside the Evidence section. */
export interface EvidenceCard {
  label: string;
  value: string;
  text: string;
}

/** S6 — Evidence: survey only, framed as directional signal (n=32). */
export interface Evidence {
  heading: string;
  claim: string;
  evidence: string;
  designResponse: string;
  /** Honest framing so the survey is never read as a production/deployment metric. */
  sampleNote: string;
  media: MediaRef;
  /** Optional compact stat cards shown before the survey image. */
  cards?: EvidenceCard[];
}

/** A labelled breakdown point for a specific screen element. */
export interface ScreenBreakdownPoint {
  title: string;
  text: string;
}

/** S7 — Solution at a glance: the final prototype screen. */
export interface SolutionPreview {
  heading: string;
  need: string;
  mechanism: string;
  reduces: string;
  media: MediaRef;
  /** Optional breakdown of key screen elements shown alongside the prototype. */
  screenBreakdown?: ScreenBreakdownPoint[];
}

/** S8 — How it works: proposed community-landmark flow (user-flow-2.jpeg). */
export interface HowItWorks {
  heading: string;
  body: string;
  steps: string[];
  media: MediaRef;
}

/** S9 — Alternatives explored: compact cards (AR wayfinding, rest stops). */
export interface Alternative {
  title: string;
  whyExplored: string;
  outcome: string;
  media: MediaRef;
}

/** S10 — From sketch to screen (optional, build only if time). */
export interface Evolution {
  heading: string;
  body: string;
  media: MediaRef;
}

/** S11 — Contact footer. No next-project / homepage links in V1. */
export interface FooterCta {
  heading: string;
  body: string;
  /** Left undefined until real contact details are provided; not fabricated. */
  email?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  promise?: string;
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
  // --- Approved V1 sections ---
  overviewMoment?: OverviewMoment;
  currentJourney?: CurrentJourney;
  evidence?: Evidence;
  solutionPreview?: SolutionPreview;
  howItWorks?: HowItWorks;
  alternatives?: Alternative[];
  evolution?: Evolution;
  footerCta?: FooterCta;
}

export const zomatoProject: ProjectData = {
  slug: 'zomato-delivery',
  title: "Helping delivery partners find the right entrance after reaching the customer's building",
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
    // Task 2: renamed from "Who is this centered around?" to problem-moment framing.
    heading: 'The map ends at a pin, not a door',
    body: "This project focuses on full-time riders in the final stretch between a mapped destination and the customer's actual doorstep. In apartment blocks, gated layouts and unmarked lanes, the map says 'arrived' while the rider is still hunting for the right entrance. Every minute lost at the door stacks up across a shift.",
  },
  systemMap: {
    // Task 1: set to null — the journey map now lives only in currentJourney below,
    // where it has caption and context. Showing it here was a duplicate.
    src: null,
    alt: 'Current rider journey map',
  },

  overviewMoment: {
    heading: 'The map ends at a pin, not at the door',
    body: "This project focuses on full-time riders in the final stretch between a mapped destination and the customer's actual doorstep. In apartment blocks, gated layouts and unmarked lanes, the map says 'arrived' while the rider is still hunting for the right entrance. It matters because it happens on a large share of orders and is invisible on the map: every minute lost at the door stacks up across a shift.",
  },

  currentJourney: {
    heading: 'When the pin fails, riders leave the app',
    body: 'Mapping the real workflow showed a consistent breakpoint. Once the entrance is unclear, riders fall back to calling the customer, asking guards or locals, and pinging fellow riders in WhatsApp groups. It usually works, but it is slow, repeated on every order, and the knowledge disappears the moment the delivery ends. I marked this the delivery gap.',
    media: {
      src: '/projects/zomato/Delivery Flow.jpg',
      alt: 'Current rider journey map highlighting the "delivery gap", where riders drop out of the app and rely on calls and informal WhatsApp networks to find the door',
      caption:
        'Today, when the pin fails, riders fall back to calls, guards, locals and WhatsApp groups — the unsupported "delivery gap".',
      zoomable: true,
    },
  },

  evidence: {
    heading: 'Is this a real problem or an assumption?',
    claim: 'Finding the exact door is a frequent, repeated failure — not an edge case.',
    evidence:
      'In a short survey, roughly one in three customers said they frequently get a call from the rider unable to find their exact location. That points to a recurring breakdown at the doorstep rather than the occasional hard address.',
    designResponse:
      'Treat the "ask another rider" behaviour as the signal, and make it a persistent, reusable part of the app instead of a one-off phone call.',
    sampleNote:
      'Directional evidence from 32 self-initiated survey responses — not a production or deployment metric.',
    // Task 3: two compact stat cards summarising the survey before the image.
    cards: [
      {
        label: 'Directional survey',
        value: '32 responses',
        text: 'Used to validate whether location-finding calls were a recurring customer-side experience.',
      },
      {
        label: 'Frequent location calls',
        value: '31.3%',
        text: 'Respondents who said they frequently receive calls from riders unable to find the exact location.',
      },
    ],
    media: {
      src: '/projects/zomato/survey.png',
      alt: "Survey results: about one in three customers frequently receive calls from riders unable to find their exact location, plus a breakdown of the most frustrating parts of food delivery",
      caption: "Survey (n=32): ~1 in 3 customers frequently get a \"can't find you\" call.",
    },
  },

  solutionPreview: {
    heading: 'The solution at a glance',
    need: 'find the right entrance without calling anyone',
    mechanism:
      'surfacing photo-based community landmarks and the top-voted instructions left by riders who delivered here before, with a one-tap way to add their own',
    reduces:
      'repeat calls to the customer, circling the block, and time lost per order — and the answer gets more reliable each time a rider votes or contributes',
    media: {
      src: '/projects/zomato/prototype.png',
      alt: 'Final UI screen: a "You have reached" destination view showing photo landmarks with vote counts, top-rated instructions from other riders, and an "Add instructions or landmark" action',
      caption: 'Final screen: photo landmarks plus top-voted instructions from other riders.',
    },
    // Task 4: three compact screen-element breakdown points.
    screenBreakdown: [
      {
        title: 'Landmark photo',
        text: 'Helps riders compare the screen with what they physically see.',
      },
      {
        title: 'Top-voted instruction',
        text: 'Surfaces the clearest guidance from previous riders.',
      },
      {
        title: 'Add landmark',
        text: 'Turns each completed delivery into reusable location knowledge.',
      },
    ],
  },

  howItWorks: {
    heading: 'How it works: show, follow, contribute',
    body: 'When a rider reaches the drop zone, the app checks for community data for that location. If it exists, it shows the top-rated landmarks; the rider follows them to the door, then upvotes what worked or adds a new note. With no data yet, the rider delivers as usual and is prompted to seed the first reference. Every delivery makes the next one easier.',
    steps: [
      'Reach the drop zone and see the top-rated community landmarks for this address.',
      'Follow the landmarks and instructions to the actual door.',
      'Upvote what worked, or add a photo landmark or short note for the next rider.',
    ],
    media: {
      src: '/projects/zomato/user-flow-2.jpeg',
      alt: 'Proposed community-landmark flow: check for community data, show top-rated references, follow them to the door, then upvote or contribute a new reference, with a fallback path when no data exists',
      caption: 'Proposed flow: show top-rated landmarks, follow them, then contribute back.',
      zoomable: true,
    },
  },

  alternatives: [
    {
      title: 'AR wayfinding',
      whyExplored:
        'An on-screen arrow pointing straight to the door feels like the obvious fix.',
      outcome:
        'Dropped. It leans on camera, lighting and GPS accuracy exactly where they are weakest, and adds hardware and maintenance cost. Decision: solve with knowledge, not sensors.',
      media: {
        src: '/projects/zomato/idea1.png',
        alt: 'AR wayfinding concept showing a phone camera view with directional arrows and nearby landmark signboards overlaid on the street',
        caption: 'Explored: AR wayfinding. Dropped for accuracy, hardware and cost risk.',
      },
    },
    {
      title: 'Integrated rest stops',
      whyExplored:
        'Research surfaced rider rest and charging as a real, parallel need along the route.',
      outcome:
        'Parked. It is operations- and partnership-heavy and sits outside the last-hundred-meter navigation problem. Decision: keep scope sharp and note it as future work.',
      media: {
        src: '/projects/zomato/idea2.png',
        alt: 'Rest-stop concept showing a "recharge stop" between the kitchen and the customer with benches, a restroom and charging for delivery riders',
        caption: 'Explored: integrated rest stops. Parked — ops-heavy and off the core problem.',
      },
    },
  ],

  evolution: {
    heading: 'From sketch to screen',
    body: 'The first paper sketch already had the core: landmarks at the top, rider instructions below, and up/down votes for trust. The final screen keeps that structure and adds real photos and clear contribution actions — refinement, not reinvention.',
    media: {
      src: '/projects/zomato/sketch.png',
      alt: 'Early hand-drawn wireframe of the destination screen showing landmark thumbnails, instructions from other agents, and up/down vote controls',
      caption: 'First sketch of the landmark and community-instruction screen.',
    },
  },

  footerCta: {
    heading: 'Designing for moments like this?',
    body: "I focus on finding narrow, high-frequency problems and turning research into shipped interface decisions. If that fits what you're hiring for, I'd love to talk.",
  },
};
