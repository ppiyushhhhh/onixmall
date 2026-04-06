export interface AnnualReport {
  year: number;
  revenue: number; // in crores
  operationalCost: number;
  netProfit: number;
  totalMalls: number;
  totalFootfall: number; // in crores
  highlights: string[];
  expansions: string[];
  sustainability: string[];
  futureRoadmap: string[];
}

export const annualReports: AnnualReport[] = [
  {
    year: 2022,
    revenue: 620,
    operationalCost: 410,
    netProfit: 210,
    totalMalls: 14,
    totalFootfall: 8.5,
    highlights: [
      'Post-pandemic recovery with 85% occupancy across all malls',
      'Launched Onix Rewards loyalty program — 2M+ sign-ups in 6 months',
      'Partnered with 500+ new retail brands',
      'Introduced contactless parking at 10 malls',
    ],
    expansions: [
      'Opened Onix Mall Lucknow (4.5 lakh sq ft)',
      'Completed Phase-2 expansion at Onix Mall Mumbai',
    ],
    sustainability: [
      'Installed 2 MW rooftop solar across 8 malls',
      'Reduced single-use plastic by 60% chain-wide',
      'Rainwater harvesting at 6 locations',
    ],
    futureRoadmap: [
      'Plan to open 3 new malls in Tier-2 cities',
      'Launch integrated e-commerce platform',
      'Implement AI-based footfall analytics',
    ],
  },
  {
    year: 2023,
    revenue: 780,
    operationalCost: 490,
    netProfit: 290,
    totalMalls: 17,
    totalFootfall: 11.2,
    highlights: [
      'Record revenue crossing ₹750 Cr for the first time',
      '95% average occupancy rate — highest in the industry',
      'Won "Best Mall Chain" at India Retail Awards 2023',
      'Launched Onix Kids Zone across 12 malls',
    ],
    expansions: [
      'Opened Onix Mall Chandigarh, Bhopal, and Coimbatore',
      'Expanded food court capacity by 40% at Delhi and Bengaluru malls',
    ],
    sustainability: [
      'Achieved 35% renewable energy usage across portfolio',
      'EV charging stations installed at all 17 malls',
      'Zero-waste certification for Onix Mall Pune',
    ],
    futureRoadmap: [
      'Target 20 malls by end of 2024',
      'Launch Onix Business Lounges for corporate tenants',
      'Pilot drone delivery for food court orders',
    ],
  },
  {
    year: 2024,
    revenue: 950,
    operationalCost: 580,
    netProfit: 370,
    totalMalls: 20,
    totalFootfall: 14.8,
    highlights: [
      'Achieved 20-mall milestone ahead of schedule',
      'Annual footfall crossed 14 Cr visitors',
      'Onix App launched — 5M downloads in Q4',
      'Hosted 200+ events including international brand launches',
    ],
    expansions: [
      'Opened Onix Mall Indore, Surat, and Visakhapatnam',
      'Renovated flagship Mumbai and Delhi malls with premium lounges',
    ],
    sustainability: [
      '50% energy from renewable sources',
      'Planted 10,000 trees as part of Onix Green Initiative',
      'Smart HVAC reducing energy consumption by 25%',
    ],
    futureRoadmap: [
      'Enter international markets — Dubai and Colombo planned',
      'Launch Onix Premium membership tier',
      'AI-powered personalized shopping recommendations',
    ],
  },
  {
    year: 2025,
    revenue: 1120,
    operationalCost: 670,
    netProfit: 450,
    totalMalls: 20,
    totalFootfall: 16.5,
    highlights: [
      'Revenue crosses ₹1,000 Cr — a landmark achievement',
      'Named India\'s Most Trusted Mall Brand by Brand Trust Report',
      'Onix Rewards members surpass 10M',
      'Average spend per visitor increased by 18%',
    ],
    expansions: [
      'Announced 5 new mall locations for 2026–2027',
      'Onix Mall Mumbai expanded to 12 lakh sq ft — largest in portfolio',
    ],
    sustainability: [
      '65% renewable energy target achieved',
      'All malls IGBC Green Building certified',
      'Launched "Shop Green" campaign — carbon-neutral delivery',
    ],
    futureRoadmap: [
      'IPO preparation and investor roadshows',
      'Smart mall ecosystem with IoT integration',
      'Metaverse virtual mall experience pilot',
      'Target 30 malls by 2028',
    ],
  },
];
