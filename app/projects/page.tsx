import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
    // Projects data (in a real app, this would come from a database or CMS)
    const projects = [
        {
            id: 1,
            title: "Khunlook Nursery",
            description:
                "A capstone project featuring a classroom management dashboard with responsive design and comprehensive testing. Improved user experience metrics from 57% to 90% through data-driven UI/UX redesign.",
            image: "/khunlook-asset.png",
            tags: [
                "React",
                "Ant Design",
                "Fastify",
                "Vitest",
                "Playwright",
                "Feature-based Architecture",
            ],
            link: "/projects/khunlook-nursery",
        },
        {
            id: 2,
            title: "BookBix",
            description:
                "A secure book marketplace platform with integrated payment processing. Built with NestJS and MongoDB, featuring Stripe integration and JWT authentication.",
            image: "/bookbix-architecture.png",
            tags: ["NestJS", "MongoDB", "Stripe", "JWT", "Scrum"],
            link: "/projects/bookbix",
        },
    ];

    return (
        <div className="container py-16">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Projects</h1>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
                    A collection of my recent work. Each project represents a
                    unique challenge and showcases different aspects of my
                    skills and expertise in full-stack development.
                </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
