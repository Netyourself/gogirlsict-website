interface TeamMember {
  name: string;
  role: string;
  image?: string;
  description: string;
}
interface AdvisoryBoardProps {
  name: string;
  position: string;
  image?: string;
  bio: string;
}

interface Partner {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
}
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  image: string;
  company: string;
}

interface Project {
  id: number;
  title: string;
  year?: string;
  description: string;
  image?: string;
}

interface Workshops {
  id: string;
  title: string;
  date: Date;
  description: string;
}

interface NoticBoardProps {
  id: string;
  title: string;
  date: Date | string;
  description: string;
  type: string;
}

export {
  Partnersprops,
  TeamMember,
  AdvisoryBoardProps,
  Partner,
  Testimonial,
  Project,
  Workshops,
  NoticBoardProps,
};

export interface Article {
  id: number;
  title: string;
  description: string;
  image?: string;
  link: string;
  author: string;
  date: string;
}

// Resource Page Interface
export interface FAQsProps {
  id?: string;
  question: string;
  answer: string;
}
