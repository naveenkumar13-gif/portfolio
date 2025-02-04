import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Naveenkumar, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Edemy",
    description:
      "Edemy is an online course platform with Framer Motion animations for an interactive learning experience",
    image: projects6,
    link: "https://github.com/naveenkumar13-gif/Edemy.git",
  },
  {
    name: "Food-Hut",
    description:
      "Food-Hut is a food ordering app with filters, animations, and a seamless user experience  ordering, and delivery.",
    image: projects5,
    link: "https://github.com/naveenkumar13-gif/Food-hut.git",
  },
  {
    name: "Pizza-Hut",
    description:
      "Pizza Hut's app enables easy ordering, customization, delivery, and deals for the lovely customer",
    image: projects3,
    link: "https://github.com/naveenkumar13-gif/pizza-Hut.git",
  },
  {
    name: "Amazon-2.0",
    description:
      "Amazon-2.0 is a demo version of Amazon, replicating its core features like product listings, shopping carts, checkout.",
    image: projects4,
    link: "https://github.com/naveenkumar13-gif/amazon-2.0.git",
  },
  {
    name: "Realestate",
    description:
      "Real estate apps facilitate property listings, searches, virtual tours, agent interactions, and transactions.",
    image: projects2,
    link: "https://github.com/naveenkumar13-gif/Realestate.git",
  },
  {
    name: "Omi-food",
    description:
      "The Landing page of Omi-Food apps streamline food ordering, delivery, restaurant listings, and customer interactions.",
    image: projects1,
    link: "https://github.com/naveenkumar13-gif/omi-food.git",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2024 — Now",
    title: "Senior Frontend Engineer at TechCorp",
    location: "Remote",
    description: [
      "Developed and launched applications like Edemy, Food-Hut, and Pizza-Hut with smooth animations.",
      "Focused on building interactive and user-friendly interfaces using React and Framer Motion.",
      "Collaborated with senior developers to enhance UI/UX and optimize web performance.",
      "Continuously learning and implementing best practices for scalable frontend development.",
    ],
  },
  {
    yearRange: "2023 — 2024",
    title: "Frontend Developer at Creative Solutions",
    location: "Remote",
    description: [
      "Started as a student, gaining hands-on experience in frontend development.",
      "Built and deployed projects like Omi-Food, RealEstate, and Amazon-2.0.",
      "Developed interactive and responsive UIs using React and Tailwind CSS.",
      "Enhanced web performance and user experience through optimized design and animations.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "naveenkumarofficial1316@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/naveenkumar13-gif",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "linkedin.com/in/naveen-kumar-6776b4331",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} NaveenKumar. All rights reserved.`,
};
