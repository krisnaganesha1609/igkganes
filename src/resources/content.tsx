import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Krisna",
  lastName: "Ganesha",
  name: "I Gede Krisna Ganesha Widhiarta",
  role: "Mobile Developer | Fullstack Developer",
  avatar: "/images/ganesh.jpeg",
  email: "igkganes@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/krisnaganesha1609",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/igkganes",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/igedekrisnaganesha_/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Elegance. Clarity. Meaningful.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">eHydroTel</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/ehydrotel",
  },
  subline: (
    <>
      Informatics major, well-architected junior mobile developer, fullstack developer, and CTF
      enthusiast based in Bandung, Indonesia. <br />
      <br /> Passionate about crafting efficient and scalable software solutions that drive
      innovation and deliver exceptional user experiences.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <div>
          I am a software developer specializing in Mobile Development (Flutter) with solid
          experience in Backend Engineering using Golang and Node.js. I have a strong interest in
          system architecture, application performance, and security, and I consistently aim to
          build software that is not only functional, but also scalable, maintainable, and
          resilient.
        </div>
        <div>
          My academic background in computer science has shaped my analytical and structured
          approach to problem-solving. I am accustomed to working across various layers of software
          development such from relational database design, state management, payment gateway
          integration, to cloud deployment and system scaling. In parallel, my organizational and
          leadership experience has strengthened my sense of responsibility, collaboration, and
          adherence to project timelines.
        </div>

        <div>
          I am particularly interested in application security and offensive security practices,
          including penetration testing. This perspective influences how I design and develop
          applications, as I prioritize security considerations alongside usability and performance.
          I believe that high-quality software should balance technical robustness with a seamless
          user experience.
        </div>
        <div>
          I am motivated to continuously learn, adapt, and grow as a software engineer, while
          contributing to projects that deliver real-world impact through thoughtful and
          well-engineered digital solutions.
        </div>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IoT Laboratory Telkom University",
        timeframe: "2025 - Present",
        role: "Coordinator of Mobile Apps for IoT Division",
        achievements: [
          <>
            Implementing mobile applications that facilitate seamless interaction between users and
            IoT devices, enhancing overall system usability such as hydropnics monitoring systems.
          </>,
          <>
            Developing and maintaining mobile applications that interface with IoT devices,
            enhancing user experience and data accessibility.
          </>,
          <>
            Collaborating with cross-functional teams to design and implement features that enhance
            user experience and system performance.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/ehydrotel/eHydrotel.png",
            alt: "eHydroTel App Highlights",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Nevmock",
        timeframe: "2024 - 2025",
        role: "Mobile Apps Developer",
        achievements: [
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Developed and implemented design screens for RASA KOPI Cafe Backoffice Module Tab-Sized
            mobile application using Flutter with Riverpod Clean Architecture, integrated seamlessly
            with payment gateway and backend services.
          </>,
          <>
            Developed and implemented design screens for Point-of-Sale Tab-Sized mobile application
            named Marhaen Digital Cashier, using Flutter with Getx.
          </>,
          <>
            Collaborated with cross-functional teams to design and implement features that enhance
            user experience and system performance.
          </>,
        ],
        images: [
          {
            src: "/images/projects/rasakopi/RasaKopi.png",
            alt: "RasaKopi App Highlights",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/marhaen/MarhaenWork.png",
            alt: "Marhaen Apps Highlights",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "IndiHealth",
        timeframe: "Feb 2025 - May 2025",
        role: "Fullstack Web Developer",
        achievements: [
          <>
            Developed and implemented design screens for SMART X SIMULATOR Web Application using
            React.js + Vite, Material Tailwind, integrated with backend services and AI Stunting
            Detection System.
          </>,
          <>
            Developed backend services using Python FastAPI and SQLAlchemy for SMART X SIMULATOR Web
            Application, ensuring robust data handling and seamless integration with frontend
            components.
          </>,
          <>
            Collaborated with cross-functional teams to design and implement features that enhance
            user experience and system performance.
          </>,
        ],
        images: [],
      },
      {
        company: "Cyberlabs",
        timeframe: "Apr 2022 - Aug 2022",
        role: "Fullstack Web Developer",
        achievements: [
          <>
            Developed and implemented design screens for company profile website named TROPISIANIMAL
            using Laravel Jetstream, Livewire, Bootstrap, and MySQL
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Telkom University",
        description: <>Majoring in Bachelor of Informatics.</>,
      },
      {
        name: "Vocational High School 4 Bandung",
        description: <>Majoring in Software Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Mobile Development",
        description: <> Capable of building cross-platform, highly-interactive, and modern mobile applications with Flutter.</>,
        tags: [
          {
            name: "Flutter",
            icon: "flutter",
          },
          {
            name: "Dart",
            icon: "dart",
          },
          {
            name: "Riverpod",
            icon: "state",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/rasakopi/RasaKopi.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/ehydrotel/eHydrotel.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend Development",
        description: <> Robust programming to create RESTful HTTP API backend services. </>,
        tags: [
          {
            name: "Go",
            icon: "golang",
          },
          {
            name: "Gin Gonic",
            icon: "state",
          },
          {
            name: "Fiber",
            icon: "state",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Frontend Development",
        description: <>Building next gen web UI with Next.js + Tailwind. And also other UI Library components.</>,
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },{
        title: "CTF & Offensive Security",
        description: <> Digital security enhancement and offensive security techniques. </>,
        tags: [
          {
            name: "Kali Linux",
            icon: "kaliLinux",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing mostly about tech and lifework...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/1.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/3.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/4.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/5.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
