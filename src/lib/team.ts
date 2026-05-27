export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Zaid Sheliya",
    role: "Founder & CEO",
    bio: "Leading Lexivotech with a passion for creating impactful digital solutions, from concept and strategy to design and development.",
    photo: "/team/zaid.png",
  },
  {
    name: "Alok Sharma",
    role: "Operations & Growth Lead",
    bio: "Overseeing client engagement, business operations, and growth strategies to help transform ideas into successful digital solutions.",
    photo: "/team/alok.jpeg",
  },
  {
    name: "Anurag Yadav",
    role: "Frontend Developer",
    bio: "Building responsive, user-focused web experiences with clean code, modern technologies, and attention to performance.",
    photo: "/team/anurag.jpeg",
  },
  {
    name: "Ritesh Vishwakarma",
    role: "Creative Content Manager",
    bio: "Creating engaging content, managing social media presence, and producing visual assets that strengthen brand identity and audience engagement.",
    photo: "/team/ritesh.png",
  },
  {
    name: "Raj Vishwakarma",
    role: "Growth Associate",
    bio: "Responsible for prospect research, strategic outreach, and nurturing new business opportunities across multiple channels.",
    photo: "/team/raj.png",
  },
];
