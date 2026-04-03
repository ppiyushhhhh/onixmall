export interface Mall {
  id: string;
  name: string;
  city: string;
  state: string;
  description: string;
  tagline: string;
  totalArea: string;
  storeCount: number;
  parkingCapacity: number;
  openingYear: number;
  floors: number;
  facilities: string[];
  operatingHours: string;
  contactPhone: string;
  contactEmail: string;
  address: string;
  mapUrl: string;
  rating: number;
  monthlyFootfall: string;
}

export interface Store {
  id: string;
  name: string;
  category: string;
  floor: number;
  shopNumber: string;
  mallId: string;
}

export interface MallEvent {
  id: string;
  title: string;
  description: string;
  mallId: string;
  mallName: string;
  date: string;
  time: string;
  category: string;
  status: 'upcoming' | 'past';
}

export const storeCategories = [
  'Fashion', 'Electronics', 'Food & Beverage', 'Lifestyle', 'Entertainment',
  'Health & Beauty', 'Sports', 'Jewelry', 'Home & Living', 'Books & Stationery'
];

export const malls: Mall[] = [
  { id: 'mumbai', name: 'Onix Mall Mumbai', city: 'Mumbai', state: 'Maharashtra', description: 'A landmark of luxury in the heart of Mumbai, Onix Mall Mumbai offers an unparalleled shopping and entertainment experience spanning five magnificent floors.', tagline: 'Where Mumbai Shops in Style', totalArea: '8,50,000 sq ft', storeCount: 280, parkingCapacity: 2500, openingYear: 2018, floors: 5, facilities: ['Parking', 'Cinema', 'Food Court', 'Kids Zone', 'WiFi', 'Wheelchair Access', 'ATM', 'Valet Parking'], operatingHours: '10:00 AM - 10:00 PM', contactPhone: '+91 22 4567 8900', contactEmail: 'mumbai@onixmall.in', address: 'Andheri West, Mumbai, Maharashtra 400053', mapUrl: 'https://maps.google.com/?q=19.1364,72.8296', rating: 4.6, monthlyFootfall: '12,00,000' },
  { id: 'delhi', name: 'Onix Mall Delhi', city: 'Delhi', state: 'Delhi', description: 'The crown jewel of North India retail, Onix Mall Delhi combines contemporary design with world-class amenities in the capital city.', tagline: 'The Capital of Shopping', totalArea: '9,20,000 sq ft', storeCount: 320, parkingCapacity: 3000, openingYear: 2017, floors: 6, facilities: ['Parking', 'Cinema', 'Food Court', 'Kids Zone', 'WiFi', 'Wheelchair Access', 'ATM', 'Valet Parking', 'Spa'], operatingHours: '10:00 AM - 11:00 PM', contactPhone: '+91 11 4567 8900', contactEmail: 'delhi@onixmall.in', address: 'Saket, New Delhi, Delhi 110017', mapUrl: 'https://maps.google.com/?q=28.5245,77.2066', rating: 4.7, monthlyFootfall: '15,00,000' },
  { id: 'bengaluru', name: 'Onix Mall Bengaluru', city: 'Bengaluru', state: 'Karnataka', description: 'Silicon Valley meets retail paradise at Onix Mall Bengaluru, featuring cutting-edge technology integration and premium shopping experiences.', tagline: 'Tech Meets Retail', totalArea: '7,80,000 sq ft', storeCount: 250, parkingCapacity: 2200, openingYear: 2019, floors: 5, facilities: ['Parking', 'Cinema', 'Food Court', 'Gaming Zone', 'WiFi', 'Wheelchair Access', 'ATM', 'Co-working Space'], operatingHours: '10:00 AM - 10:00 PM', contactPhone: '+91 80 4567 8900', contactEmail: 'bengaluru@onixmall.in', address: 'Whitefield, Bengaluru, Karnataka 560066', mapUrl: 'https://maps.google.com/?q=12.9698,77.7500', rating: 4.5, monthlyFootfall: '10,50,000' },
  { id: 'hyderabad', name: 'Onix Mall Hyderabad', city: 'Hyderabad', state: 'Telangana', description: 'Where Nawabi grandeur meets modern retail excellence. Onix Mall Hyderabad brings the best of luxury and culture together.', tagline: 'Royal Shopping Experience', totalArea: '7,50,000 sq ft', storeCount: 240, parkingCapacity: 2000, openingYear: 2019, floors: 5, facilities: ['Parking', 'Cinema', 'Food Court', 'Kids Zone', 'WiFi', 'Wheelchair Access', 'ATM'], operatingHours: '10:00 AM - 10:00 PM', contactPhone: '+91 40 4567 8900', contactEmail: 'hyderabad@onixmall.in', address: 'HITEC City, Hyderabad, Telangana 500081', mapUrl: 'https://maps.google.com/?q=17.4435,78.3772', rating: 4.5, monthlyFootfall: '9,80,000' },
  { id: 'chennai', name: 'Onix Mall Chennai', city: 'Chennai', state: 'Tamil Nadu', description: 'The pride of South India retail, offering a curated mix of international and regional brands with warm Tamil hospitality.', tagline: 'South India\'s Finest', totalArea: '6,90,000 sq ft', storeCount: 220, parkingCapacity: 1800, openingYear: 2020, floors: 4, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'Wheelchair Access', 'ATM'], operatingHours: '10:00 AM - 9:30 PM', contactPhone: '+91 44 4567 8900', contactEmail: 'chennai@onixmall.in', address: 'Anna Nagar, Chennai, Tamil Nadu 600040', mapUrl: 'https://maps.google.com/?q=13.0827,80.2707', rating: 4.4, monthlyFootfall: '8,50,000' },
  { id: 'pune', name: 'Onix Mall Pune', city: 'Pune', state: 'Maharashtra', description: 'A vibrant blend of youth culture and premium retail in the Oxford of the East.', tagline: 'Young, Bold, Premium', totalArea: '6,50,000 sq ft', storeCount: 200, parkingCapacity: 1600, openingYear: 2020, floors: 4, facilities: ['Parking', 'Cinema', 'Food Court', 'Gaming Zone', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 10:00 PM', contactPhone: '+91 20 4567 8900', contactEmail: 'pune@onixmall.in', address: 'Koregaon Park, Pune, Maharashtra 411001', mapUrl: 'https://maps.google.com/?q=18.5362,73.8932', rating: 4.4, monthlyFootfall: '7,80,000' },
  { id: 'kolkata', name: 'Onix Mall Kolkata', city: 'Kolkata', state: 'West Bengal', description: 'Blending Bengali heritage with modern retail sophistication in the City of Joy.', tagline: 'Joy of Shopping', totalArea: '7,00,000 sq ft', storeCount: 230, parkingCapacity: 1900, openingYear: 2019, floors: 5, facilities: ['Parking', 'Cinema', 'Food Court', 'Art Gallery', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 9:30 PM', contactPhone: '+91 33 4567 8900', contactEmail: 'kolkata@onixmall.in', address: 'Salt Lake, Kolkata, West Bengal 700091', mapUrl: 'https://maps.google.com/?q=22.5726,88.3639', rating: 4.3, monthlyFootfall: '8,20,000' },
  { id: 'ahmedabad', name: 'Onix Mall Ahmedabad', city: 'Ahmedabad', state: 'Gujarat', description: 'Gujarat\'s premier retail destination blending vibrant culture with world-class shopping.', tagline: 'Vibrant Shopping Hub', totalArea: '6,80,000 sq ft', storeCount: 210, parkingCapacity: 1700, openingYear: 2020, floors: 4, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM', 'Kids Zone'], operatingHours: '10:00 AM - 10:00 PM', contactPhone: '+91 79 4567 8900', contactEmail: 'ahmedabad@onixmall.in', address: 'SG Highway, Ahmedabad, Gujarat 380054', mapUrl: 'https://maps.google.com/?q=23.0225,72.5714', rating: 4.4, monthlyFootfall: '7,50,000' },
  { id: 'jaipur', name: 'Onix Mall Jaipur', city: 'Jaipur', state: 'Rajasthan', description: 'A royal retail experience inspired by the Pink City\'s architectural grandeur and rich heritage.', tagline: 'Royal Retail Paradise', totalArea: '6,20,000 sq ft', storeCount: 190, parkingCapacity: 1500, openingYear: 2021, floors: 4, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 10:00 PM', contactPhone: '+91 141 4567 890', contactEmail: 'jaipur@onixmall.in', address: 'Malviya Nagar, Jaipur, Rajasthan 302017', mapUrl: 'https://maps.google.com/?q=26.8587,75.8135', rating: 4.3, monthlyFootfall: '6,80,000' },
  { id: 'lucknow', name: 'Onix Mall Lucknow', city: 'Lucknow', state: 'Uttar Pradesh', description: 'Nawabi elegance meets modern retail at Lucknow\'s most sophisticated shopping destination.', tagline: 'Nawabi Elegance Redefined', totalArea: '6,00,000 sq ft', storeCount: 180, parkingCapacity: 1400, openingYear: 2021, floors: 4, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 10:00 PM', contactPhone: '+91 522 456 7890', contactEmail: 'lucknow@onixmall.in', address: 'Gomti Nagar, Lucknow, UP 226010', mapUrl: 'https://maps.google.com/?q=26.8467,80.9462', rating: 4.2, monthlyFootfall: '6,20,000' },
  { id: 'chandigarh', name: 'Onix Mall Chandigarh', city: 'Chandigarh', state: 'Chandigarh', description: 'The City Beautiful\'s premier shopping destination with modern design and curated retail.', tagline: 'Beautiful City, Beautiful Mall', totalArea: '5,80,000 sq ft', storeCount: 170, parkingCapacity: 1300, openingYear: 2021, floors: 4, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 10:00 PM', contactPhone: '+91 172 456 7890', contactEmail: 'chandigarh@onixmall.in', address: 'Sector 17, Chandigarh 160017', mapUrl: 'https://maps.google.com/?q=30.7333,76.7794', rating: 4.3, monthlyFootfall: '5,80,000' },
  { id: 'indore', name: 'Onix Mall Indore', city: 'Indore', state: 'Madhya Pradesh', description: 'Central India\'s fastest-growing retail hub offering a premium shopping experience.', tagline: 'Heart of India Shopping', totalArea: '5,50,000 sq ft', storeCount: 160, parkingCapacity: 1200, openingYear: 2022, floors: 4, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 10:00 PM', contactPhone: '+91 731 456 7890', contactEmail: 'indore@onixmall.in', address: 'Vijay Nagar, Indore, MP 452010', mapUrl: 'https://maps.google.com/?q=22.7196,75.8577', rating: 4.2, monthlyFootfall: '5,20,000' },
  { id: 'bhopal', name: 'Onix Mall Bhopal', city: 'Bhopal', state: 'Madhya Pradesh', description: 'The City of Lakes gets its premium retail landmark with Onix Mall Bhopal.', tagline: 'Lake City Luxury', totalArea: '5,20,000 sq ft', storeCount: 150, parkingCapacity: 1100, openingYear: 2022, floors: 3, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 9:30 PM', contactPhone: '+91 755 456 7890', contactEmail: 'bhopal@onixmall.in', address: 'MP Nagar, Bhopal, MP 462011', mapUrl: 'https://maps.google.com/?q=23.2599,77.4126', rating: 4.1, monthlyFootfall: '4,80,000' },
  { id: 'nagpur', name: 'Onix Mall Nagpur', city: 'Nagpur', state: 'Maharashtra', description: 'The Orange City\'s premium retail destination at the geographic heart of India.', tagline: 'Center of It All', totalArea: '5,00,000 sq ft', storeCount: 145, parkingCapacity: 1000, openingYear: 2022, floors: 3, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 9:30 PM', contactPhone: '+91 712 456 7890', contactEmail: 'nagpur@onixmall.in', address: 'Dharampeth, Nagpur, Maharashtra 440010', mapUrl: 'https://maps.google.com/?q=21.1458,79.0882', rating: 4.1, monthlyFootfall: '4,50,000' },
  { id: 'surat', name: 'Onix Mall Surat', city: 'Surat', state: 'Gujarat', description: 'The Diamond City shines brighter with Onix Mall, featuring the best of Gujarat retail.', tagline: 'Sparkling Retail Gem', totalArea: '5,80,000 sq ft', storeCount: 175, parkingCapacity: 1300, openingYear: 2021, floors: 4, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM', 'Kids Zone'], operatingHours: '10:00 AM - 10:00 PM', contactPhone: '+91 261 456 7890', contactEmail: 'surat@onixmall.in', address: 'Vesu, Surat, Gujarat 395007', mapUrl: 'https://maps.google.com/?q=21.1702,72.8311', rating: 4.3, monthlyFootfall: '6,00,000' },
  { id: 'kochi', name: 'Onix Mall Kochi', city: 'Kochi', state: 'Kerala', description: 'Kerala\'s premier retail destination blending backwater charm with cosmopolitan shopping.', tagline: 'Gateway to Kerala Retail', totalArea: '5,50,000 sq ft', storeCount: 165, parkingCapacity: 1200, openingYear: 2022, floors: 4, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 9:30 PM', contactPhone: '+91 484 456 7890', contactEmail: 'kochi@onixmall.in', address: 'Edappally, Kochi, Kerala 682024', mapUrl: 'https://maps.google.com/?q=10.0261,76.3125', rating: 4.3, monthlyFootfall: '5,50,000' },
  { id: 'bhubaneswar', name: 'Onix Mall Bhubaneswar', city: 'Bhubaneswar', state: 'Odisha', description: 'The Temple City\'s modern retail temple offering Eastern India\'s finest shopping experience.', tagline: 'Eastern Elegance', totalArea: '4,80,000 sq ft', storeCount: 140, parkingCapacity: 1000, openingYear: 2023, floors: 3, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 9:30 PM', contactPhone: '+91 674 456 7890', contactEmail: 'bhubaneswar@onixmall.in', address: 'Patia, Bhubaneswar, Odisha 751024', mapUrl: 'https://maps.google.com/?q=20.2961,85.8245', rating: 4.1, monthlyFootfall: '4,00,000' },
  { id: 'patna', name: 'Onix Mall Patna', city: 'Patna', state: 'Bihar', description: 'Bihar\'s biggest and most modern shopping destination, bringing premium retail to the historic city.', tagline: 'Bihar\'s Pride', totalArea: '4,50,000 sq ft', storeCount: 130, parkingCapacity: 900, openingYear: 2023, floors: 3, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 9:30 PM', contactPhone: '+91 612 456 7890', contactEmail: 'patna@onixmall.in', address: 'Bailey Road, Patna, Bihar 800001', mapUrl: 'https://maps.google.com/?q=25.6093,85.1376', rating: 4.0, monthlyFootfall: '3,80,000' },
  { id: 'coimbatore', name: 'Onix Mall Coimbatore', city: 'Coimbatore', state: 'Tamil Nadu', description: 'The Manchester of South India gets its premium retail destination with Onix Mall.', tagline: 'Southern Sophistication', totalArea: '5,00,000 sq ft', storeCount: 150, parkingCapacity: 1100, openingYear: 2023, floors: 3, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 9:30 PM', contactPhone: '+91 422 456 7890', contactEmail: 'coimbatore@onixmall.in', address: 'RS Puram, Coimbatore, Tamil Nadu 641002', mapUrl: 'https://maps.google.com/?q=11.0168,76.9558', rating: 4.2, monthlyFootfall: '4,50,000' },
  { id: 'visakhapatnam', name: 'Onix Mall Visakhapatnam', city: 'Visakhapatnam', state: 'Andhra Pradesh', description: 'The Jewel of the East Coast, offering seaside city charm with premium retail.', tagline: 'Coastal Luxury', totalArea: '4,80,000 sq ft', storeCount: 140, parkingCapacity: 1000, openingYear: 2023, floors: 3, facilities: ['Parking', 'Cinema', 'Food Court', 'WiFi', 'ATM'], operatingHours: '10:00 AM - 9:30 PM', contactPhone: '+91 891 456 7890', contactEmail: 'vizag@onixmall.in', address: 'MVP Colony, Visakhapatnam, AP 530017', mapUrl: 'https://maps.google.com/?q=17.6868,83.2185', rating: 4.1, monthlyFootfall: '4,20,000' },
];

const brandNames: Record<string, string[]> = {
  'Fashion': ['Zara', 'H&M', 'Mango', 'Levis', 'Tommy Hilfiger', 'Calvin Klein', 'Allen Solly', 'Van Heusen', 'Louis Philippe', 'Arrow', 'FabIndia', 'W', 'Biba', 'Global Desi', 'AND'],
  'Electronics': ['Apple Store', 'Samsung', 'Sony', 'Croma', 'Reliance Digital', 'Mi Home', 'OnePlus', 'Boat Lifestyle'],
  'Food & Beverage': ['Starbucks', 'KFC', 'McDonald\'s', 'Domino\'s', 'Pizza Hut', 'Burger King', 'Subway', 'Haldiram\'s', 'Bikanervala', 'Chaayos', 'Theobroma', 'Social'],
  'Lifestyle': ['Lifestyle', 'Shoppers Stop', 'Westside', 'Pantaloons', 'Central'],
  'Entertainment': ['PVR INOX', 'Timezone', 'Smaaash', 'Hamleys'],
  'Health & Beauty': ['Nykaa', 'Bath & Body Works', 'The Body Shop', 'Forest Essentials', 'MAC', 'Sephora'],
  'Sports': ['Nike', 'Adidas', 'Puma', 'Decathlon', 'Reebok', 'Under Armour'],
  'Jewelry': ['Tanishq', 'Malabar Gold', 'CaratLane', 'Kalyan Jewellers', 'PC Jeweller'],
  'Home & Living': ['Home Centre', 'IKEA', 'Chumbak', 'Good Earth', 'Pepperfry Studio'],
  'Books & Stationery': ['Crossword', 'Om Book Shop', 'Archies'],
};

export function generateStoresForMall(mallId: string, count: number): Store[] {
  const stores: Store[] = [];
  const mall = malls.find(m => m.id === mallId);
  const floors = mall?.floors || 4;
  let storeIdx = 0;
  for (const [category, brands] of Object.entries(brandNames)) {
    for (const brand of brands) {
      if (storeIdx >= count) break;
      const floor = (storeIdx % floors) + 1;
      stores.push({
        id: `${mallId}-store-${storeIdx}`,
        name: brand,
        category,
        floor,
        shopNumber: `${floor}${String.fromCharCode(65 + (storeIdx % 26))}${(storeIdx % 50) + 1}`,
        mallId,
      });
      storeIdx++;
    }
    if (storeIdx >= count) break;
  }
  return stores;
}

export const events: MallEvent[] = [
  { id: 'e1', title: 'Monsoon Fashion Festival', description: 'Exclusive monsoon collection launches from top fashion brands with up to 50% off.', mallId: 'mumbai', mallName: 'Onix Mall Mumbai', date: '2026-04-15', time: '11:00 AM', category: 'Fashion', status: 'upcoming' },
  { id: 'e2', title: 'Tech Expo 2026', description: 'Experience the latest in consumer technology with hands-on demos and exclusive launch offers.', mallId: 'delhi', mallName: 'Onix Mall Delhi', date: '2026-04-20', time: '10:00 AM', category: 'Technology', status: 'upcoming' },
  { id: 'e3', title: 'Food & Culture Fest', description: 'A celebration of India\'s diverse culinary heritage featuring master chefs and tastings.', mallId: 'bengaluru', mallName: 'Onix Mall Bengaluru', date: '2026-05-01', time: '12:00 PM', category: 'Food', status: 'upcoming' },
  { id: 'e4', title: 'Kids Summer Camp', description: 'Fun-filled summer activities for kids including art, science, and sports workshops.', mallId: 'hyderabad', mallName: 'Onix Mall Hyderabad', date: '2026-05-10', time: '9:00 AM', category: 'Kids', status: 'upcoming' },
  { id: 'e5', title: 'Diwali Grand Sale', description: 'The biggest sale of the year with unbeatable discounts across all stores.', mallId: 'mumbai', mallName: 'Onix Mall Mumbai', date: '2025-10-15', time: '10:00 AM', category: 'Sale', status: 'past' },
  { id: 'e6', title: 'Christmas Carnival', description: 'A magical Christmas celebration with Santa meet & greet, live music, and special offers.', mallId: 'delhi', mallName: 'Onix Mall Delhi', date: '2025-12-24', time: '4:00 PM', category: 'Festival', status: 'past' },
  { id: 'e7', title: 'Republic Day Cultural Show', description: 'Celebrating India\'s Republic Day with cultural performances and patriotic displays.', mallId: 'chennai', mallName: 'Onix Mall Chennai', date: '2026-01-26', time: '10:00 AM', category: 'Cultural', status: 'past' },
  { id: 'e8', title: 'Stand-Up Comedy Night', description: 'India\'s top comedians perform live at Onix Mall Pune.', mallId: 'pune', mallName: 'Onix Mall Pune', date: '2026-04-25', time: '7:00 PM', category: 'Entertainment', status: 'upcoming' },
];
