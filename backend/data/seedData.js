export const initialEvents = [
  {
    id: 'e1',
    title: '1. Paper / Poster Presentation',
    category: 'Technical',
    day: 'day1',
    track: 'aero-cfd',
    venue: 'tech-pavilion',
    venueName: 'Tech Pavilion Exhibition Hall',
    badgeText: 'DAY 1 /// 01',
    badgeColor: 'corsa-red',
    icon: 'description',
    description: 'Present groundbreaking research, CFD findings, aerodynamic scale tests, or novel material discoveries.',
    topics: [
      'Aerodynamics & Wind Modeling',
      'Computational Fluid Dynamics (CFD)',
      'Fluid Mechanics & Thermal Systems',
      'Material Science & Composites'
    ],
    evaluator: 'Dr. Deepavathi',
    hall: 'Aero Seminar Complex'
  },
  {
    id: 'e2',
    title: '2. CAD Modelling',
    category: 'Technical',
    day: 'day1',
    track: 'cad',
    venue: 'simulation-bay',
    venueName: 'Simulation Bay 04 / CAD Center',
    badgeText: 'DAY 1 /// 02',
    badgeColor: 'primary',
    icon: 'view_in_ar',
    description: 'Live on-the-spot parametric 3D CAD challenges testing speed, surface modeling, and kinematic assembly accuracy.',
    topics: [
      '3D CAD Modelling (On Spot Challenge)',
      'Complex Surfacing & Mechanical Tolerance',
      'Official Industry Partner Benchmarks',
      'Real-time Rendering & File Integrity'
    ],
    evaluator: 'CAD Desk, Nagercoil',
    hall: 'CAD Workstations'
  },
  {
    id: 'e3',
    title: '3. Technical Quiz',
    category: 'Technical',
    day: 'day1',
    track: 'quiz',
    venue: 'auditorium',
    venueName: 'Main Auditorium (Keynotes)',
    badgeText: 'DAY 1 /// 03',
    badgeColor: 'warning-amber',
    icon: 'quiz',
    description: 'Rapid-fire buzzer rounds testing core mechanical domains, motorsport physics, AI integration, and cutting-edge tech.',
    topics: [
      'Core Engineering Principles',
      'Artificial Intelligence in Robotics',
      'Next-Gen Automotive Powertrains',
      'Emerging Aerospace Technologies'
    ],
    evaluator: 'JUF Jury Panel',
    hall: 'Conference Hall B'
  },
  {
    id: 'e4',
    title: '1. Photography',
    category: 'Non-Technical',
    day: 'day2',
    track: 'photo',
    venue: 'tech-pavilion',
    venueName: 'Tech Pavilion Exhibition Hall',
    badgeText: 'DAY 2 /// 01',
    badgeColor: 'aero-sky',
    icon: 'photo_camera',
    description: 'Capture mechanical beauty, speed blurs, high-contrast engineering lines, and campus automotive culture.',
    topics: [
      'Automotive Photography',
      'Engineering & Machinery Detail',
      'Creative & Abstract Angles',
      'Technical Lighting & Composition'
    ],
    evaluator: 'Creative Media Jury Panel',
    hall: 'Media Pavilion'
  },
  {
    id: 'e5',
    title: '2. Auto Expo 2026',
    category: 'Non-Technical',
    day: 'day2',
    track: 'expo',
    venue: 'open-air-arena',
    venueName: 'Motorsport & Open Air Arena',
    badgeText: 'DAY 2 /// 02',
    badgeColor: 'corsa-red',
    icon: 'directions_car',
    description: 'The flagship showcase arena featuring supercars, custom performance superbikes, EV platforms, and modified tuners.',
    topics: [
      'Car Exhibition (Exotics & Classics)',
      'Superbike & Track Bike Showcase',
      'Automobile Innovations & EV Prototypes',
      'Custom Vehicle Design & Aero Mods'
    ],
    evaluator: 'Automotive Industry Dignitaries',
    hall: 'Automotive Grounds'
  },
  {
    id: 'e6',
    title: '3. Fashion Styling',
    category: 'Non-Technical',
    day: 'day2',
    track: 'fashion',
    venue: 'open-air-arena',
    venueName: 'Motorsport & Open Air Arena',
    badgeText: 'DAY 2 /// 03',
    badgeColor: 'tertiary',
    icon: 'styler',
    description: 'Fusion of industrial motorsport aesthetics, wearable engineering textiles, and futuristic runway concepts.',
    topics: [
      'Themed High-Velocity Fashion',
      'Sustainable & Technical Innovation Styling',
      'Traditional & Futuristic Fusion',
      'Apparel Materials from Recycled Auto Parts'
    ],
    evaluator: 'Fashion & Design Jury',
    hall: 'Amphitheatre Arena'
  }
];

export const initialSchedule = {
  day1: [
    {
      time: '09:00 AM - 10:00 AM',
      tag: 'INAUGURATION',
      tagColor: 'text-text-muted bg-surface-container-high',
      title: 'Inaugural Ceremony & Welcome Address',
      venue: 'Main Auditorium',
      track: 'all',
      venueType: 'auditorium',
      description: 'Formal inauguration of JoyMech ForgeX 2026 by the Dean, School of Engineering, alongside faculty dignitaries.',
      lead: 'Dr. Praveen Laws & Dr. Prayer Riju',
      leadRole: 'Faculty Coordinators',
      icon: 'flag',
      iconColor: 'text-primary'
    },
    {
      time: '10:00 AM - 11:30 AM',
      tag: 'KEYNOTE DECK',
      tagColor: 'text-corsa-red bg-corsa-red/20',
      title: 'Keynote Address 01: Fluid Dynamics & Vortex Modeling',
      venue: 'Main Auditorium (Tech Track)',
      track: 'aero-cfd',
      venueType: 'auditorium',
      description: 'Distinguished address on high-velocity fluid behaviors, boundary-layer transitions, and Formula 1 aerodynamic simulation.',
      lead: 'Yutaka Hara',
      leadRole: 'Tottori University, Japan',
      icon: 'psychology',
      iconColor: 'text-corsa-red'
    },
    {
      time: '11:45 AM - 01:30 PM',
      tag: 'COMPETITION ARENA',
      tagColor: 'text-primary bg-primary/20',
      title: 'Track 01: Paper / Poster Presentation',
      venue: 'Aero Seminar Complex',
      track: 'aero-cfd',
      venueType: 'tech-pavilion',
      description: 'Competitive presentation in Aerodynamics, Wind Modeling, CFD Systems, Thermal Engineering, and Composite Materials.',
      lead: 'Dr. Deepavathi',
      leadRole: 'Evaluation Jury Chair',
      icon: 'description',
      iconColor: 'text-primary'
    },
    {
      time: '01:30 PM - 02:30 PM',
      tag: 'PIT-STOP BREAK',
      tagColor: 'text-text-muted bg-surface-container',
      title: 'Pit-Stop Lunch & High-Velocity Networking',
      venue: 'Food Court / Aero Pavilion',
      track: 'all',
      venueType: 'open-air-arena',
      description: 'Refuel, network with delegates, and explore the aerodynamics laboratory exhibitions.',
      lead: 'Catering Command',
      leadRole: 'Campus Hospitality',
      icon: 'restaurant',
      iconColor: 'text-text-muted'
    },
    {
      time: '02:30 PM - 04:30 PM',
      tag: 'LIVE WORKSHOP',
      tagColor: 'text-electric-cyan bg-electric-cyan/20',
      title: 'Track 02: 3D CAD Modelling Championship',
      venue: 'CAD & Simulation Bay 04',
      track: 'cad',
      venueType: 'simulation-bay',
      description: 'Live on-spot parametric 3D CAD modeling, complex surface curvature, kinematic tolerance test, and real-time mesh rendering.',
      lead: 'CAD Desk, Nagercoil',
      leadRole: 'Industry Mentors & Jury',
      icon: 'view_in_ar',
      iconColor: 'text-electric-cyan'
    },
    {
      time: '04:30 PM - 06:00 PM',
      tag: 'RAPID ARENA',
      tagColor: 'text-warning-amber bg-warning-amber/20',
      title: 'Track 03: Rapid-Fire Technical Quiz',
      venue: 'Conference Hall B',
      track: 'quiz',
      venueType: 'auditorium',
      description: 'Buzzer rounds spanning Mechanical principles, Motorsport dynamics, Artificial Intelligence in Robotics, and Aerospace systems.',
      lead: 'JUF Jury Panel',
      leadRole: 'Track Arbitrators',
      icon: 'quiz',
      iconColor: 'text-warning-amber'
    }
  ],
  day2: [
    {
      time: '09:30 AM - 11:00 AM',
      tag: 'KEYNOTE DECK',
      tagColor: 'text-electric-cyan bg-electric-cyan/20',
      title: 'Keynote Address 02: Autonomous Automotive Systems',
      venue: 'Main Auditorium /// Auto Expo Stage',
      track: 'all',
      venueType: 'auditorium',
      description: 'Computational mechanics, autonomous structural modeling, edge computing, and real-time AI vehicle control architectures.',
      lead: 'Prof. Santanu Mitra',
      leadRole: 'Shiv Nadar IoE, New Delhi',
      icon: 'smart_toy',
      iconColor: 'text-electric-cyan'
    },
    {
      time: '11:15 AM - 01:15 PM',
      tag: 'CREATIVE ARENA',
      tagColor: 'text-aero-sky bg-aero-sky/20',
      title: 'Arena 01: Automotive & Creative Photography',
      venue: 'Campus Wide & Media Pavilion',
      track: 'photo',
      venueType: 'tech-pavilion',
      description: 'Field photography challenges capturing high-contrast engineering lines, automotive angles, and campus motorsport culture.',
      lead: 'Creative Media Jury',
      leadRole: 'Visual Arts Panel',
      icon: 'photo_camera',
      iconColor: 'text-aero-sky'
    },
    {
      time: '01:15 PM - 02:15 PM',
      tag: 'NETWORKING REFUEL',
      tagColor: 'text-text-muted bg-surface-container',
      title: 'Networking Lunch & Tech Pavilion',
      venue: 'Main University Grounds',
      track: 'all',
      venueType: 'open-air-arena',
      description: 'Symposium lunch and interaction with sponsors and motorsport tech builders.',
      lead: 'Logistics Desk',
      leadRole: 'Operations Command',
      icon: 'restaurant',
      iconColor: 'text-text-muted'
    },
    {
      time: '02:15 PM - 04:30 PM',
      tag: 'FLAGSHIP EXPO',
      tagColor: 'text-corsa-red bg-corsa-red/20',
      title: 'Arena 02: Auto Expo 2026',
      venue: 'Automotive Open Air Arena',
      track: 'expo',
      venueType: 'open-air-arena',
      description: 'Live supercar demonstrations, custom performance superbikes, EV race prototypes, and automotive modification diagnostics.',
      lead: 'Auto Industry Dignitaries',
      leadRole: 'Motorsport Guest Jury',
      icon: 'directions_car',
      iconColor: 'text-corsa-red'
    },
    {
      time: '04:30 PM - 05:45 PM',
      tag: 'RUNWAY ARENA',
      tagColor: 'text-tertiary bg-tertiary-container/20',
      title: 'Arena 03: Sustainable & Futuristic Fashion Styling',
      venue: 'Open-Air Amphitheatre',
      track: 'fashion',
      venueType: 'open-air-arena',
      description: 'Industrial motorsport runway, recycled engineering textiles, wearable telemetry aesthetics, and futuristic concepts.',
      lead: 'Fashion & Design Jury',
      leadRole: 'Apparel Panel',
      icon: 'styler',
      iconColor: 'text-tertiary'
    },
    {
      time: '06:00 PM - 07:30 PM',
      tag: 'GRAND FINALE',
      tagColor: 'text-telemetry-emerald bg-telemetry-emerald/20',
      title: 'Grand Valedictory & ₹1,00,000+ Prize Ceremony',
      venue: 'Main Auditorium',
      track: 'all',
      venueType: 'auditorium',
      description: 'Conferring of trophies, cash awards, certificates, and final participant accreditation by international guests.',
      lead: '₹1,00,000+',
      leadRole: 'Total Awards Disbursed',
      icon: 'workspace_premium',
      iconColor: 'text-telemetry-emerald'
    }
  ]
};

export const memoryRegistrations = [
  {
    passId: 'JMF26-9842',
    name: 'Aravind S. Varma',
    email: 'aravind@joyuniv.edu',
    phone: '+91 98765 43210',
    college: 'Joy University School of Engineering',
    event: 'CAD Modelling',
    day: 'Day 1',
    trackType: 'Technical',
    status: 'Confirmed',
    createdAt: new Date('2026-09-01T10:00:00Z').toISOString()
  },
  {
    passId: 'JMF26-4120',
    name: 'Kasinth NA',
    email: 'kasinth@joyuniv.edu',
    phone: '+91 89770 91574',
    college: 'Joy University',
    event: 'Paper/Poster Presentation',
    day: 'Day 1',
    trackType: 'Technical',
    status: 'Confirmed',
    createdAt: new Date('2026-09-02T11:30:00Z').toISOString()
  },
  {
    passId: 'JMF26-7731',
    name: 'Rohan Deshmukh',
    email: 'rohan.d@mitindia.edu',
    phone: '+91 98412 34567',
    college: 'MIT Chennai',
    event: 'Auto Expo 2026',
    day: 'Day 2',
    trackType: 'Non-Technical',
    status: 'Confirmed',
    createdAt: new Date('2026-09-03T14:15:00Z').toISOString()
  }
];
