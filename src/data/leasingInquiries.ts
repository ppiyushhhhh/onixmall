export interface LeasingInquiry {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  preferredMall: string;
  businessCategory: string;
  spaceRequirement: string;
  budgetRange: string;
  message: string;
  status: 'New' | 'Contacted' | 'Approved' | 'Rejected';
  submittedDate: string;
}

export interface AvailableSpace {
  id: string;
  mallId: string;
  mallName: string;
  floor: number;
  area: string;
  type: 'Retail' | 'Kiosk' | 'Food & Beverage' | 'Entertainment' | 'Office';
  rent: string;
  available: boolean;
}

export const sampleInquiries: LeasingInquiry[] = [
  { id: 'lq-1', companyName: 'FreshMart India', contactPerson: 'Rajesh Kumar', email: 'rajesh@freshmart.in', phone: '9876500001', preferredMall: 'mumbai', businessCategory: 'Grocery & Supermarket', spaceRequirement: '3000 sq ft', budgetRange: '₹8-12 Lakh/month', message: 'Looking for anchor store space on ground floor.', status: 'Contacted', submittedDate: '2026-03-10' },
  { id: 'lq-2', companyName: 'TechZone Electronics', contactPerson: 'Sanjay Verma', email: 'sanjay@techzone.in', phone: '9876500002', preferredMall: 'delhi', businessCategory: 'Electronics', spaceRequirement: '1500 sq ft', budgetRange: '₹5-7 Lakh/month', message: 'Premium electronics showroom.', status: 'New', submittedDate: '2026-03-25' },
  { id: 'lq-3', companyName: 'Café Bliss', contactPerson: 'Ananya Roy', email: 'ananya@cafebliss.in', phone: '9876500003', preferredMall: 'bengaluru', businessCategory: 'Food & Beverage', spaceRequirement: '800 sq ft', budgetRange: '₹3-5 Lakh/month', message: 'Artisan coffee shop with seating.', status: 'Approved', submittedDate: '2026-02-28' },
  { id: 'lq-4', companyName: 'PlayZone Kids', contactPerson: 'Meera Joshi', email: 'meera@playzone.in', phone: '9876500004', preferredMall: 'pune', businessCategory: 'Entertainment', spaceRequirement: '5000 sq ft', budgetRange: '₹10-15 Lakh/month', message: 'Indoor kids entertainment center.', status: 'New', submittedDate: '2026-04-01' },
  { id: 'lq-5', companyName: 'StyleHub Fashion', contactPerson: 'Karan Malhotra', email: 'karan@stylehub.in', phone: '9876500005', preferredMall: 'hyderabad', businessCategory: 'Fashion & Apparel', spaceRequirement: '2000 sq ft', budgetRange: '₹6-8 Lakh/month', message: 'Multi-brand fashion outlet.', status: 'Rejected', submittedDate: '2026-03-05' },
];

export const availableSpaces: AvailableSpace[] = [
  { id: 'sp-1', mallId: 'mumbai', mallName: 'Onix Mall Mumbai', floor: 0, area: '3,500 sq ft', type: 'Retail', rent: '₹12 Lakh/month', available: true },
  { id: 'sp-2', mallId: 'mumbai', mallName: 'Onix Mall Mumbai', floor: 2, area: '800 sq ft', type: 'Kiosk', rent: '₹2.5 Lakh/month', available: true },
  { id: 'sp-3', mallId: 'delhi', mallName: 'Onix Mall Delhi', floor: 1, area: '2,000 sq ft', type: 'Retail', rent: '₹9 Lakh/month', available: true },
  { id: 'sp-4', mallId: 'delhi', mallName: 'Onix Mall Delhi', floor: 3, area: '1,200 sq ft', type: 'Food & Beverage', rent: '₹6 Lakh/month', available: true },
  { id: 'sp-5', mallId: 'bengaluru', mallName: 'Onix Mall Bengaluru', floor: 0, area: '4,000 sq ft', type: 'Entertainment', rent: '₹14 Lakh/month', available: true },
  { id: 'sp-6', mallId: 'bengaluru', mallName: 'Onix Mall Bengaluru', floor: 1, area: '1,500 sq ft', type: 'Retail', rent: '₹7 Lakh/month', available: true },
  { id: 'sp-7', mallId: 'hyderabad', mallName: 'Onix Mall Hyderabad', floor: 2, area: '2,500 sq ft', type: 'Retail', rent: '₹8 Lakh/month', available: true },
  { id: 'sp-8', mallId: 'pune', mallName: 'Onix Mall Pune', floor: 1, area: '1,000 sq ft', type: 'Food & Beverage', rent: '₹4 Lakh/month', available: true },
  { id: 'sp-9', mallId: 'chennai', mallName: 'Onix Mall Chennai', floor: 0, area: '3,000 sq ft', type: 'Retail', rent: '₹10 Lakh/month', available: true },
  { id: 'sp-10', mallId: 'kolkata', mallName: 'Onix Mall Kolkata', floor: 3, area: '5,000 sq ft', type: 'Office', rent: '₹8 Lakh/month', available: true },
];
