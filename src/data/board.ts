import piyush from '@/assets/board/piyush-prasad.jpg';
import arpita from '@/assets/board/arpita-prasad.jpg';
import rahul from '@/assets/board/rahul-mehta.jpg';
import sneha from '@/assets/board/sneha-iyer.jpg';
import vikram from '@/assets/board/vikram-shah.jpg';
import ananya from '@/assets/board/ananya-rao.jpg';
import rajesh from '@/assets/board/rajesh-malhotra.jpg';
import arvind from '@/assets/board/arvind-nair.jpg';

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: 'piyush-prasad',
    name: 'Piyush Prasad',
    role: 'Chief Executive Officer (CEO)',
    description: 'Leads company vision, growth strategy, and overall business direction.',
    image: piyush,
  },
  {
    id: 'arpita-prasad',
    name: 'Arpita Prasad',
    role: 'Chief Financial Officer (CFO)',
    description: 'Oversees financial planning, budgeting, and risk management.',
    image: arpita,
  },
  {
    id: 'rahul-mehta',
    name: 'Rahul Mehta',
    role: 'Chief Technology Officer (CTO)',
    description: 'Drives digital infrastructure, smart-mall systems, and engineering excellence.',
    image: rahul,
  },
  {
    id: 'sneha-iyer',
    name: 'Sneha Iyer',
    role: 'Chief Operating Officer (COO)',
    description: 'Ensures seamless mall operations, tenant relations, and visitor experience.',
    image: sneha,
  },
  {
    id: 'vikram-shah',
    name: 'Vikram Shah',
    role: 'Chief Marketing Officer (CMO)',
    description: 'Shapes brand positioning, campaigns, and customer engagement across India.',
    image: vikram,
  },
  {
    id: 'ananya-rao',
    name: 'Ananya Rao',
    role: 'Head of Strategy',
    description: 'Spearheads market expansion, partnerships, and long-term strategic planning.',
    image: ananya,
  },
  {
    id: 'rajesh-malhotra',
    name: 'Rajesh Malhotra',
    role: 'Independent Director',
    description: 'Provides governance oversight with three decades of retail and finance leadership.',
    image: rajesh,
  },
  {
    id: 'arvind-nair',
    name: 'Arvind Nair',
    role: 'Director of Operations',
    description: 'Manages multi-city facility operations, safety standards, and service quality.',
    image: arvind,
  },
];
