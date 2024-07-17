interface MenuItem {
  label: string;
  href: string;
}

interface MenuItems {
  [key: string]: MenuItem[];
}

export const menuItems: MenuItems = {
  aboutUs: [
    { label: "Our Mission", href: "/#mission" },
    { label: "Our Team", href: "/about/team" },
    { label: "Partners", href: "/about/partners" },
    { label: "Testimonials", href: "/about/testimonials" },
  ],
  programs: [
    { label: "Projects", href: "/programs/projects" },
    { label: "Mentorship", href: "/programs/mentorships" },
    { label: "Scholarships", href: "/programs/scholarships" },
  ],
  resources: [
    { label: "Articles", href: "/resources/articles" },
    {
      label: "Videos, Podcast & Open Education Resources",
      href: "/resources/videos",
    },
  ],
  getInvolved: [
    { label: "Freelancing Opportunities", href: "/getInvolved/volunteer" },
    { label: "Donate", href: "/getInvolved/donation" },
  ],
};
