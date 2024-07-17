import { Article, FAQsProps } from "@/types/user";

interface Video {
  id: number;
  title: string;
  videoId: string; // YouTube video ID
}
interface Podcast {
  id: number;
  title: string;
  description: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "How AI is Transforming Healthcare",
    description:
      "Discover how artificial intelligence is revolutionizing the healthcare industry.",
    image: "/images/projects/iotProject.png",
    link: "/articles/1",
    author: "John Doe",
    date: "2023-06-01",
  },
  {
    id: 2,
    title: "The Future of Remote Work",
    description:
      "An exploration of the trends and technologies shaping the future of remote work.",
    image: "/images/projects/gosanitize.png",
    link: "/articles/2",
    author: "Jane Smith",
    date: "2023-06-10",
  },
  {
    id: 3,
    title: "Advancements in Renewable Energy",
    description:
      "A look at the latest innovations in renewable energy sources.",
    image: "/images/projects/gosanitize.png",

    link: "/articles/3",
    author: "Alice Johnson",
    date: "2023-05-15",
  },
  {
    id: 4,
    title: "The Impact of 5G Technology",
    description: "How 5G technology is set to change the world.",
    image: "/images/projects/gosanitize.png",

    link: "/articles/4",
    author: "Robert Brown",
    date: "2023-04-20",
  },
  {
    id: 5,
    title: "Cybersecurity Trends in 2023",
    description: "The latest trends and challenges in cybersecurity.",
    image: "/images/projects/gosanitize.png",

    link: "/articles/5",
    author: "Emily Davis",
    date: "2023-03-30",
  },
  {
    id: 6,
    title: "The Role of AI in Education",
    description:
      "Exploring the potential of artificial intelligence in education.",
    image: "/images/projects/gosanitize.png",

    link: "/articles/6",
    author: "Michael Wilson",
    date: "2023-02-25",
  },
  {
    id: 7,
    title: "Smart Home Technology",
    description: "How smart home devices are transforming our living spaces.",
    image: "",
    link: "/articles/7",
    author: "Sarah Miller",
    date: "2023-01-15",
  },
  {
    id: 8,
    title: "Blockchain Beyond Cryptocurrency",
    description:
      "The applications of blockchain technology beyond digital currencies.",
    image: "",
    link: "/articles/8",
    author: "Daniel Martinez",
    date: "2022-12-05",
  },
  {
    id: 9,
    title: "Virtual Reality in Entertainment",
    description: "The rise of virtual reality in the entertainment industry.",
    image: "",
    link: "/articles/9",
    author: "Laura Garcia",
    date: "2022-11-10",
  },
  {
    id: 10,
    title: "AI and Robotics in Manufacturing",
    description:
      "The integration of AI and robotics in modern manufacturing processes.",
    image: "",
    link: "/articles/10",
    author: "Kevin Lee",
    date: "2022-10-01",
  },
  {
    id: 11,
    title: "Climate Change and Technology",
    description: "How technology is being used to combat climate change.",
    image: "",
    link: "/articles/11",
    author: "Jessica Harris",
    date: "2022-09-20",
  },
  {
    id: 12,
    title: "The Evolution of E-Commerce",
    description: "The trends and future of online shopping.",
    image: "",
    link: "/articles/12",
    author: "Thomas Clark",
    date: "2022-08-15",
  },
  {
    id: 13,
    title: "AI in Financial Services",
    description: "How AI is transforming the financial industry.",
    image: "",
    link: "/articles/13",
    author: "Nancy Lewis",
    date: "2022-07-05",
  },
  {
    id: 14,
    title: "The Future of Autonomous Vehicles",
    description: "Exploring the advancements in autonomous vehicle technology.",
    image: "",
    link: "/articles/14",
    author: "Brian Walker",
    date: "2022-06-01",
  },
  {
    id: 15,
    title: "AI and Ethics",
    description: "The ethical considerations of artificial intelligence.",
    image: "",
    link: "/articles/15",
    author: "Linda Young",
    date: "2022-05-10",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const videos: Video[] = [
  {
    id: 1,
    title: "Video 1",
    videoId: "4Fp4XHi6Eks",
  },
  {
    id: 2,
    title: "Video 2",
    videoId: "V_Dm3PJU8N4",
  },
  {
    id: 3,
    title: "Video 2",
    videoId: "V_Dm3PJU8N4",
  },
];

const podcasts: Podcast[] = [
  {
    id: 1,
    title: "Podcast 1",
    description: "This is the description for podcast 1.",
    link: "https://example.com/podcast1",
  },
  {
    id: 2,
    title: "Podcast 2",
    description: "This is the description for podcast 2.",
    link: "https://example.com/podcast2",
  },
];

const faqs: FAQsProps[] = [
  {
    question: "What is GoGirls ICT Initiative?",
    answer:
      "GoGirls ICT Initiative is a community-based organization focused on empowering women and girls through technology and education.",
  },
  {
    question: "How can I get involved?",
    answer:
      "You can get involved by volunteering, attending our events, or becoming a mentor. Visit our 'Get Involved' page for more details.",
  },
  {
    question: "What programs do you offer?",
    answer:
      "We offer various programs including coding bootcamps, mentorship programs, and workshops on digital skills.",
  },
  {
    question: "How can I donate to your cause?",
    answer:
      "You can donate through our website by visiting the 'Donate' page. We appreciate any support you can provide.",
  },
  {
    question: "Where are your events held?",
    answer:
      "Our events are held at various locations throughout the community. Check our 'Events' page for upcoming events and locations.",
  },
  {
    question: "Who can attend your workshops?",
    answer:
      "Our workshops are open to everyone, but we particularly encourage women and girls to participate.",
  },
];

export { articles, videos, podcasts, faqs };
