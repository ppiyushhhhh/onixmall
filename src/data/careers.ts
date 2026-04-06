export interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  experience: string;
  salaryRange: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedDate: string;
  status: 'Open' | 'Closed';
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeFileName: string;
  appliedDate: string;
  status: 'New' | 'Shortlisted' | 'Rejected' | 'Hired';
}

export const jobs: Job[] = [
  {
    id: 'job-1', title: 'Mall Manager', location: 'Mumbai', department: 'Operations',
    experience: '8-12 years', salaryRange: '₹18-25 LPA', type: 'Full-time',
    description: 'Lead overall mall operations including tenant relations, facility management, and revenue optimization for our flagship Mumbai location.',
    responsibilities: ['Oversee daily mall operations and staff management', 'Manage tenant relationships and lease negotiations', 'Drive revenue growth through events and marketing', 'Ensure compliance with safety and regulatory standards'],
    requirements: ['MBA or equivalent with 8+ years in retail/mall management', 'Strong leadership and P&L management skills', 'Experience with CRM and property management tools', 'Excellent communication in English and Hindi'],
    postedDate: '2026-03-15', status: 'Open',
  },
  {
    id: 'job-2', title: 'Operations Executive', location: 'Delhi', department: 'Operations',
    experience: '3-5 years', salaryRange: '₹6-9 LPA', type: 'Full-time',
    description: 'Support daily mall operations, coordinate with vendors, and ensure smooth functioning of facilities and services.',
    responsibilities: ['Coordinate with housekeeping, security, and maintenance teams', 'Handle customer escalations and resolve issues', 'Monitor facility systems and report anomalies', 'Assist in event setup and coordination'],
    requirements: ['Bachelor\'s degree with 3+ years in facility/mall operations', 'Strong organizational and multitasking abilities', 'Proficiency in MS Office and reporting tools', 'Willingness to work in shifts'],
    postedDate: '2026-03-20', status: 'Open',
  },
  {
    id: 'job-3', title: 'Security Supervisor', location: 'Bengaluru', department: 'Security',
    experience: '5-8 years', salaryRange: '₹5-7 LPA', type: 'Full-time',
    description: 'Manage the security team and ensure a safe shopping environment for visitors and tenants at Onix Mall Bengaluru.',
    responsibilities: ['Supervise 50+ security personnel across shifts', 'Monitor CCTV surveillance and access control systems', 'Conduct regular safety drills and audits', 'Coordinate with local law enforcement'],
    requirements: ['Ex-defense or police background preferred', '5+ years in security management', 'Knowledge of fire safety and emergency protocols', 'Strong physical fitness and leadership'],
    postedDate: '2026-03-10', status: 'Open',
  },
  {
    id: 'job-4', title: 'Marketing Executive', location: 'Hyderabad', department: 'Marketing',
    experience: '2-4 years', salaryRange: '₹5-8 LPA', type: 'Full-time',
    description: 'Plan and execute marketing campaigns, social media strategies, and brand partnerships for Onix Mall Hyderabad.',
    responsibilities: ['Create and manage social media content calendars', 'Coordinate with agencies for campaign production', 'Organize in-mall promotional events', 'Track campaign performance and ROI metrics'],
    requirements: ['Bachelor\'s in Marketing/Communications', '2+ years in retail or brand marketing', 'Proficiency in digital marketing tools and analytics', 'Creative mindset with strong copywriting skills'],
    postedDate: '2026-03-25', status: 'Open',
  },
  {
    id: 'job-5', title: 'IT Support Engineer', location: 'Pune', department: 'IT',
    experience: '2-4 years', salaryRange: '₹4-6 LPA', type: 'Full-time',
    description: 'Maintain IT infrastructure, support POS systems, and manage network operations across Onix Mall Pune.',
    responsibilities: ['Manage LAN/WAN networks and Wi-Fi infrastructure', 'Support POS and digital signage systems', 'Troubleshoot hardware and software issues', 'Implement IT security protocols'],
    requirements: ['B.Tech/BCA in Computer Science or related field', '2+ years in IT support roles', 'Knowledge of networking, servers, and cloud systems', 'Certifications like CCNA or ITIL are a plus'],
    postedDate: '2026-04-01', status: 'Open',
  },
  {
    id: 'job-6', title: 'Customer Service Associate', location: 'Chennai', department: 'Customer Service',
    experience: '1-3 years', salaryRange: '₹3-4.5 LPA', type: 'Full-time',
    description: 'Be the face of Onix Mall Chennai — assist visitors, handle inquiries, and ensure an exceptional shopping experience.',
    responsibilities: ['Greet and assist mall visitors at information desks', 'Handle complaints and escalate when necessary', 'Manage lost and found operations', 'Provide wheelchair and stroller assistance'],
    requirements: ['Graduate with 1+ year in customer service', 'Fluent in English, Hindi, and Tamil', 'Pleasant personality with patience', 'Basic computer skills'],
    postedDate: '2026-03-28', status: 'Open',
  },
  {
    id: 'job-7', title: 'Finance Analyst', location: 'Mumbai (HQ)', department: 'Finance',
    experience: '3-5 years', salaryRange: '₹8-12 LPA', type: 'Full-time',
    description: 'Analyze financial performance across the mall portfolio, prepare reports, and support budgeting and forecasting.',
    responsibilities: ['Prepare monthly P&L statements for each mall', 'Conduct variance analysis and forecasting', 'Support annual budgeting process', 'Liaise with auditors and tax consultants'],
    requirements: ['CA / CMA / MBA Finance', '3+ years in financial analysis', 'Advanced Excel and ERP proficiency', 'Strong analytical and presentation skills'],
    postedDate: '2026-04-02', status: 'Open',
  },
  {
    id: 'job-8', title: 'Housekeeping Supervisor', location: 'Kolkata', department: 'Facilities',
    experience: '4-6 years', salaryRange: '₹3.5-5 LPA', type: 'Full-time',
    description: 'Oversee housekeeping operations to maintain world-class cleanliness standards at Onix Mall Kolkata.',
    responsibilities: ['Manage a team of 30+ housekeeping staff', 'Ensure adherence to cleaning schedules and SOPs', 'Manage inventory of cleaning supplies', 'Conduct regular quality inspections'],
    requirements: ['Diploma in Hotel Management or equivalent', '4+ years in housekeeping supervision', 'Knowledge of green cleaning practices', 'Strong team management skills'],
    postedDate: '2026-03-18', status: 'Open',
  },
];

export const sampleApplications: JobApplication[] = [
  { id: 'app-1', jobId: 'job-1', jobTitle: 'Mall Manager', name: 'Arun Sharma', email: 'arun@email.com', phone: '9876543210', coverLetter: 'Experienced mall operations leader...', resumeFileName: 'arun_sharma_resume.pdf', appliedDate: '2026-03-20', status: 'Shortlisted' },
  { id: 'app-2', jobId: 'job-2', jobTitle: 'Operations Executive', name: 'Priya Patel', email: 'priya@email.com', phone: '9876543211', coverLetter: 'Passionate about retail operations...', resumeFileName: 'priya_patel_resume.pdf', appliedDate: '2026-03-22', status: 'New' },
  { id: 'app-3', jobId: 'job-4', jobTitle: 'Marketing Executive', name: 'Rohit Mehta', email: 'rohit@email.com', phone: '9876543212', coverLetter: 'Creative marketer with digital expertise...', resumeFileName: 'rohit_mehta_resume.pdf', appliedDate: '2026-03-26', status: 'New' },
  { id: 'app-4', jobId: 'job-5', jobTitle: 'IT Support Engineer', name: 'Neha Gupta', email: 'neha@email.com', phone: '9876543213', coverLetter: 'Certified IT professional...', resumeFileName: 'neha_gupta_resume.pdf', appliedDate: '2026-04-01', status: 'Hired' },
  { id: 'app-5', jobId: 'job-3', jobTitle: 'Security Supervisor', name: 'Maj. Vikram Singh', email: 'vikram@email.com', phone: '9876543214', coverLetter: 'Retired army officer with security expertise...', resumeFileName: 'vikram_singh_resume.pdf', appliedDate: '2026-03-15', status: 'Rejected' },
];
