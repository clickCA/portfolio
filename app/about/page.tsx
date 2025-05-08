import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Code,
    Wrench,
    GraduationCap,
    LayoutDashboard,
    Database,
    TestTube,
    Briefcase,
    Building,
    Car,
    School,
    CreditCard,
} from "lucide-react";

// Add metadata for the about page
export const metadata = {
    title: "About Me - Chanakorn Aramsak",
    description: "Learn more about my background, skills, and experience as a full-stack developer.",
    openGraph: {
        title: "About Me - Chanakorn Aramsak",
        description: "Learn more about my background, skills, and experience as a full-stack developer.",
        images: [
            {
                url: "/preview-light.png",
                width: 1200,
                height: 630,
                alt: "Chanakorn Aramsak",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Me - Chanakorn Aramsak",
        description: "Learn more about my background, skills, and experience as a full-stack developer.",
        images: ["/preview-light.png"],
        creator: "@chanakorn",
    },
};

export default function AboutPage() {
    // Skills data updated with your actual skills and icons
    const skills = [
        {
            category: "Frontend",
            icon: <LayoutDashboard className="text-blue-500" />,
            items: [
                "React",
                "Next.js",
                "TypeScript",
                "TailwindCSS",
                "Redux Toolkit",
                "Ant Design",
                "Apollo Client",
            ],
        },
        {
            category: "Backend",
            icon: <Database className="text-green-600" />,
            items: [
                "Node.js",
                "Fastify.js",
                "GraphQL",
                "RESTful APIs",
                "JWT Authentication",
                "Entity Framework",
            ],
        },
        {
            category: "DevOps & Tools",
            icon: <Wrench className="text-blue-600" />,
            items: [
                "Git",
                "Docker",
                "Docker Compose",
                "VS Code",
                "SSL/Certbot",
                "Vercel",
            ],
        },
        {
            category: "Testing",
            icon: <TestTube className="text-purple-500" />,
            items: [
                "Vitest",
                "Playwright",
                "End-to-End Testing",
                "Unit Testing",
            ],
        },
    ];

    return (
        <div className="container py-16">
            <div className="max-w-3xl mx-auto">
                <header className="mb-12 text-center">
                    <Image
                        src="/profile.jpg?height=200&width=200"
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-6"
                    />
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Hi! I'm a full-stack developer who enjoys creating
                        user-friendly web applications. In my free time, I like
                        exploring new tech and learning new skills.
                    </p>
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">My Story</h2>
                    <div className="space-y-4">
                        <p>
                            I discovered my passion for coding during my studies
                            at Chulalongkorn University. What started as
                            curiosity quickly evolved into enthusiasm as I spent
                            time working on personal web projects alongside my
                            coursework. Seeing my code come to life was always
                            exciting!
                        </p>
                        <p>
                            My approach to development is doing the right thing,
                            not just working hard. I believe in taking the time
                            to understand problems fully before solving them.
                            This means writing clean, maintainable code that
                            works correctly the first time, rather than rushing
                            and fixing issues later.
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <GraduationCap className="text-primary" />
                        Education
                    </h2>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">
                            Bachelor of Computer Engineering
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            Chulalongkorn University • Graduated: July 23, 2024
                        </p>
                        <p className="mt-2">
                            <span className="font-medium">
                                Relevant Coursework:
                            </span>{" "}
                            OOP in Java, Algorithms Design, Operating Systems,
                            Data Structures, Cloud Computing, Software
                            Engineering, Database Systems, Software Development
                            Practice
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Code className="text-primary" />
                        Skills & Expertise
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skillGroup) => (
                            <div key={skillGroup.category} className="mb-4">
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                    {skillGroup.icon}
                                    {skillGroup.category}
                                </h3>
                                <ul className="space-y-1">
                                    {skillGroup.items.map((skill) => (
                                        <li
                                            key={skill}
                                            className="text-zinc-600 dark:text-zinc-400"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Briefcase className="text-primary" />
                        Experience
                    </h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <Building className="text-blue-500 h-5 w-5" />
                                Full Stack Developer
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Agoda • Current
                            </p>
                            <p className="mt-2">
                                Working as a fullstack developer contributing to
                                Agoda's web platforms.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <Car className="text-green-500 h-5 w-5" />
                                Full Stack Developer
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Motorist • November 2024 - Present
                            </p>
                            <ul className="mt-2 list-disc pl-5 space-y-1 text-zinc-600 dark:text-zinc-400">
                                <li>
                                    Implemented responsive frontend designs
                                    using Next.js, TailwindCSS, and Apollo
                                    Client for seamless GraphQL integration.
                                </li>
                                <li>
                                    Built custom in-house components, including
                                    Select menus, dropdowns, accordions,
                                    hoverable text elements, and Google Maps API
                                    integration.
                                </li>
                                <li>
                                    Resolved critical authentication bugs in a
                                    session-based authentication system.
                                </li>
                                <li>
                                    Delivered pixel-perfect, responsive CSS
                                    designs aligned with detailed design
                                    specifications.
                                </li>
                                <li>
                                    Dockerized the backend and implemented
                                    database seeding to streamline development
                                    setup.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <School className="text-orange-500 h-5 w-5" />
                                Full Stack Developer (Contract)
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Khunlook Nursery (Chulalongkorn University) •
                                May 2024 - October 2024
                            </p>
                            <ul className="mt-2 list-disc pl-5 space-y-1 text-zinc-600 dark:text-zinc-400">
                                <li>
                                    Developed robust user authentication flows
                                    using React and Ant Design for 1000+
                                    projected users.
                                </li>
                                <li>
                                    Designed and implemented state management
                                    architecture with Redux Toolkit and Saga,
                                    incorporating CSRF token security.
                                </li>
                                <li>
                                    Standardized RESTful API endpoints using
                                    Fastify.js, resolving 80% of
                                    inconsistencies.
                                </li>
                                <li>
                                    Achieved 80%+ test coverage with
                                    comprehensive unit and end-to-end tests
                                    using Vitest and Playwright.
                                </li>
                                <li>
                                    Deployed Docker Compose for efficient
                                    containerized backend development
                                    environments.
                                </li>
                                <li>
                                    Enhanced secure development workflows by
                                    signing backend SSL certificates with Cron
                                    job and Certbot.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <CreditCard className="text-purple-500 h-5 w-5" />
                                Full Stack Developer Intern
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Thai Credit Guarantee Corporation • May 2023 -
                                July 2023
                            </p>
                            <ul className="mt-2 list-disc pl-5 space-y-1 text-zinc-600 dark:text-zinc-400">
                                <li>
                                    Reduced application load time by 90% through
                                    strategic backend/frontend migration using
                                    optimized pagination techniques.
                                </li>
                                <li>
                                    Improved database performance for 1M+
                                    records by migrating stored procedures to
                                    Entity Framework Code First.
                                </li>
                                <li>
                                    Integrated a JWT authentication system,
                                    implementing refresh/access token handling
                                    on the frontend.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                        I'm always open to new opportunities and interesting
                        projects. Feel free to reach out!
                    </p>
                    <Button asChild className="mb-4">
                        <a href="mailto:chanakorn.aramsak@gmail.com">
                            Email Me
                        </a>
                    </Button>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        Phone: +66 92-253-0275
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        You can also find me on{" "}
                        <a
                            href="https://github.com/clickCA"
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}
