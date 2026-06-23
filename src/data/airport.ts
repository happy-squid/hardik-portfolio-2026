// Airport AMR case-study data.
//
// The Zomato ProjectData type is shaped around the Zomato sections, so it is not
// reused here. Instead this file defines small, airport-specific types and keeps
// MediaRef / ScreenBreakdownPoint local so the module stays self-contained and
// changes here can never break the Zomato page. Section fields are optional so the
// page can be built one section at a time later.

/** A single referenced media asset. */
export interface MediaRef {
  src: string;
  alt: string;
  caption?: string;
  /** Hint for later rendering: dense images should open in the zoom dialog. */
  zoomable?: boolean;
}

/** A labelled breakdown point for a specific screen / surface. */
export interface ScreenBreakdownPoint {
  title: string;
  text: string;
}

export interface AirportMetadata {
  readTime: string;
  projectType: string;
  role: string;
  scope: string;
  tools: string;
  categories: string;
}

export interface ValueAdded {
  label: string;
  statement: string;
}

export interface HeroMedia {
  src: string;
  alt: string;
}

/** Text + single supporting image. */
export interface MediaSection {
  heading: string;
  body: string;
  media: MediaRef;
}

/** Text-only section (no media in V1). */
export interface TextSection {
  heading: string;
  body: string;
}

/** Kiosk section: a primary in-context image plus a secondary booking image. */
export interface KioskSection {
  heading: string;
  body: string;
  primaryMedia: MediaRef;
  secondaryMedia: MediaRef;
}

/** Vehicle screens: several screens plus a per-surface breakdown. */
export interface VehicleScreensSection {
  heading: string;
  body: string;
  media: MediaRef[];
  screenBreakdown: ScreenBreakdownPoint[];
}

/** One design-decision card (decision + reasoning + tradeoff). */
export interface DesignDecision {
  title: string;
  why: string;
  decision: string;
  tradeoff: string;
}

export interface DesignDecisionsSection {
  heading: string;
  decisions: DesignDecision[];
}

/** Visual design system. Note flags follow-up work (e.g. re-export). */
export interface DesignSystemSection {
  heading: string;
  body: string;
  media: MediaRef;
  note?: string;
}

export interface FooterCta {
  heading: string;
  body: string;
  /** Left undefined until a real contact email is available; not fabricated. */
  email?: string;
}

export interface AirportProjectData {
  slug: string;
  title: string;
  subtitle?: string;
  metadata: AirportMetadata;
  collaborationNote: string;
  valueAdded: ValueAdded;
  hero: HeroMedia;
  // --- Approved V1 sections (data only; not yet rendered) ---
  context?: MediaSection;
  interactionGap?: TextSection;
  serviceLayer?: MediaSection;
  genuiFlow?: MediaSection;
  kioskAccess?: KioskSection;
  vehicleScreens?: VehicleScreensSection;
  designDecisions?: DesignDecisionsSection;
  designSystem?: DesignSystemSection;
  testingNext?: TextSection;
  footerCta?: FooterCta;
}

export const airportProject: AirportProjectData = {
  slug: 'airport-amr',
  title: 'Passenger interaction layers for autonomous airport mobility',
  subtitle:
    'A phygital thesis project designing GenUI cards, kiosks, and AMR screens for airport passenger guidance.',

  metadata: {
    readTime: '6 min',
    projectType: 'Thesis / Phygital Interaction Design',
    role: 'Passenger Interaction Designer',
    scope:
      'GenUI flows, kiosk interaction, vehicle screen interfaces, signage and passenger guidance touchpoints',
    tools: 'Figma, Illustrator, Photoshop, After Effects, ChatGPT',
    categories: 'Product Design, Interaction Design, Phygital UX, Systems Thinking',
  },

  collaborationNote:
    'This thesis was developed in a group context. Vehicle bodies and mobility concepts were team context; my individual contribution focused on passenger-facing GenUI interactions, kiosks, and AMR interface screens.',

  valueAdded: {
    label: 'Value added for airport mobility systems',
    statement:
      'Designed to reduce passenger decision friction by coordinating guidance across phone, kiosk, vehicle interior, and exterior display touchpoints.',
  },

  hero: {
    src: '/projects/airport-amr/hero/hero-genui-in-airport.png',
    alt: 'Passenger holding a phone in an airport, showing a GenUI assistant interface for flight and gate guidance.',
  },

  // 1. My slice of the system
  context: {
    heading: 'My slice of the system',
    body: 'This thesis explored autonomous mobility in airport public-access spaces. The broader system included multiple AMR vehicle concepts developed across the team. My individual focus was the passenger-facing service layer: the GenUI cards, kiosks, vehicle screens, and guidance touchpoints that help passengers understand and use the system.',
    media: {
      src: '/projects/airport-amr/context/context-amr-fleet-overview.png',
      alt: 'Three autonomous airport mobility vehicles parked outside a terminal: a group buggy, a personal pod, and a luggage unit.',
      caption:
        'Group project context — three AMR vehicle concepts developed by the team. My individual contribution: the GenUI cards, kiosk interactions, and vehicle screen interfaces passengers use.',
    },
  },

  // 2. The passenger interaction gap
  interactionGap: {
    heading: 'The passenger interaction gap',
    body: 'After security, passengers often have to connect information from boards, signs, staff, apps, and their own sense of time. Autonomous airport vehicles add another question: what can this system do for me right now? Without clear interaction cues, the vehicle becomes one more thing to decode instead of a support layer.',
  },

  // 3. The service layer
  serviceLayer: {
    heading: 'The service layer',
    body: 'I designed GenUI as a contextual card layer rather than a standalone airport app. Each card responds to the passenger\u2019s current moment: gate status, navigation, baggage, assistance, pod booking, or gate change. The goal was to surface the next useful action without asking passengers to search through another menu.',
    media: {
      src: '/projects/airport-amr/screens/genui-card-system-overview.png',
      alt: 'A layout of GenUI cards covering flight status, navigation, mobility assistance, baggage belt, gate change, and pod booking.',
      caption:
        'The GenUI card system — each card type responds to a different passenger need, from gate status and navigation to assistance and pod booking.',
      zoomable: true,
    },
  },

  // 4. From one passenger request to multiple actions
  genuiFlow: {
    heading: 'From one passenger request to multiple actions',
    body: 'A passenger can start with a simple request about their flight. The response can combine multiple outputs: a flight card, route guidance, and an assistance card. This turns the assistant from a text answer into an action surface.',
    media: {
      src: '/projects/airport-amr/screens/genui-conversation-flow.png',
      alt: 'A phone showing a conversational assistant response that combines a flight card, a route map, and a wheelchair assistance card.',
      caption:
        'One request, multiple actions — the assistant surfaces a flight card, route guidance, and an assistance option in a single response.',
    },
  },

  // 5. Kiosk as the physical entry point
  kioskAccess: {
    heading: 'Kiosk as the physical entry point',
    body: 'Not every passenger will begin from a phone or AI interface. The kiosk acts as a physical access point at the AMR pickup zone, showing wait times, available vehicle types, and QR-based booking flows. It gives the system a visible place in the airport.',
    primaryMedia: {
      src: '/projects/airport-amr/touchpoints/kiosk-buggy-arrival-spot.png',
      alt: 'A buggy at a marked arrival spot beside a standing kiosk showing a schedule and QR codes for booking.',
      caption: 'Kiosk at the AMR pickup zone — gives the system a visible physical presence and shows wait times, available vehicles, and QR booking entry.',
    },
    secondaryMedia: {
      src: '/projects/airport-amr/touchpoints/kiosk-booking-flow.png',
      alt: 'A kiosk alongside two phone booking screens for a group AMR and a personal pod, shown after scanning the kiosk QR codes.',
      caption: 'QR handoff — scanning at the kiosk transitions directly to a single phone confirmation, no app download or login required.',
      zoomable: true,
    },
  },

  // 6. Vehicle screens for moving contexts
  vehicleScreens: {
    heading: 'Vehicle screens for moving contexts',
    body: 'The vehicle screens use different levels of information depending on distance and passenger state. Exterior displays help passengers identify the right vehicle before boarding. Interior screens show destination, gate timing, occupancy, and next-stop decisions during the ride.',
    media: [
      {
        src: '/projects/airport-amr/touchpoints/exterior-display-destination.png',
        alt: 'An exterior vehicle display showing destination, route, and estimated time in large high-contrast type.',
        caption: 'Exterior display: route, ETA, and destination readable before boarding.',
      },
      {
        src: '/projects/airport-amr/screens/vehicle-interior-screen-checkin.png',
        alt: 'An interior roof-mounted vehicle screen showing check-in zone, destination, gate timing, and seat occupancy.',
        caption: 'Interior check-in display: destination, gate timing, and occupancy at a glance.',
      },
      {
        src: '/projects/airport-amr/screens/vehicle-interior-screen-where-next.png',
        alt: 'An interior landscape vehicle screen asking where to go next, with gate and lounge options and a boarding countdown.',
        caption: 'In-ride prompt: next-stop choices surfaced while there is still time to act.',
      },
    ],
    screenBreakdown: [
      {
        title: 'Exterior display',
        text: 'Route, ETA, and destination readable before boarding.',
      },
      {
        title: 'Interior check-in display',
        text: 'Destination, gate timing, and occupancy visible at a glance.',
      },
      {
        title: 'In-ride prompt',
        text: 'Next-stop choices surfaced while the passenger still has time to act.',
      },
    ],
  },

  // 7. Key design decisions
  designDecisions: {
    heading: 'Key design decisions',
    decisions: [
      {
        title: 'Cards, not another airport app',
        why: 'Passengers already move between airline apps, signage, staff instructions, and physical queues. A dedicated airport super-app would add another place to search.',
        decision:
          'Use GenUI cards as a contextual layer that appears around the passenger\u2019s current need.',
        tradeoff:
          'This depends on access to flight and location context. If context is unavailable, kiosk access becomes the fallback.',
      },
      {
        title: 'Information density changes by surface',
        why: 'A phone can hold detailed cards, a kiosk can support booking choices, an exterior display must be readable from a distance, and an interior vehicle screen must work in motion.',
        decision:
          'Design each screen around the passenger\u2019s distance, speed, and decision state.',
        tradeoff:
          'The system becomes less visually uniform, but more usable across physical contexts.',
      },
    ],
  },

  // 8. Visual design system
  designSystem: {
    heading: 'Visual design system',
    body: 'The interface system uses a dark base with high-contrast accent colours to separate navigation, alerts, and action states. The same spacing and visual language are intended to stretch across phone cards, kiosks, and vehicle screens.',
    media: {
      src: '/projects/airport-amr/system/design-system-board-original.png',
      alt: 'A design system board showing colour palette, typography, iconography, buttons, and spacing scale for the interface.',
      caption: 'One visual language intended to stretch across phone cards, kiosks, and vehicle screens.',
      zoomable: true,
    },
    note: 'Source file is large (4961px wide); re-export to a web-optimised size before final launch.',
  },

  // 9. What I would test next
  testingNext: {
    heading: 'What I would test next',
    body: 'This was a thesis prototype, not a deployed airport system. In a real pilot, I would test whether passengers notice the prompts while moving with bags, whether GenUI cards feel trustworthy when context is incomplete, and which touchpoint passengers prefer when they are under time pressure.',
  },

  // 10. Contact footer (email left undefined, matching existing project data)
  footerCta: {
    heading: 'Designing across screens and physical touchpoints?',
    body: 'I work on interaction layers that span phones, kiosks, and in-context screens. If that fits what you are hiring for, I would love to talk.',
  },
};
