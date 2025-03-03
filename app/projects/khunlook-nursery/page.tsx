import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function KhunlookNurseryProject() {
    // Project tech stack
    const technologies = [
        "React",
        "Ant Design",
        "Fastify",
        "Vitest",
        "Playwright",
        "Feature-based Architecture",
        "TDD",
    ];

    // Project highlights
    const highlights = [
        {
            title: "UI/UX Redesign",
            description:
                "Improved user experience metrics from 57% to 90% through data-driven UI/UX redesign for classroom management dashboard.",
        },
        {
            title: "Frontend Architecture",
            description:
                "Led architecture decisions and project initialization, establishing Feature-based Architecture with React/Vite.",
        },
        {
            title: "Responsive Dashboard",
            description:
                "Implemented responsive management classroom dashboard using Ant Design Grid System with 80%+ test coverage.",
        },
        {
            title: "Comprehensive Testing",
            description:
                "Established comprehensive testing strategy using Vitest for unit tests and Playwright for end-to-end testing.",
        },
    ];

    return (
        <div className="container py-16">
            <Button variant="ghost" asChild className="mb-8 -ml-4">
                <Link href="/projects" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to all projects
                </Link>
            </Button>

            <div className="grid md:grid-cols-3 gap-12">
                {/* Project content - takes up 2/3 of the space on desktop */}
                <div className="md:col-span-2 space-y-8">
                    <Image
                        src="/khunlook-page.png?height=400&width=800"
                        alt="Khunlook Nursery Project"
                        width={800}
                        height={400}
                        className="rounded-lg object-cover w-full"
                    />

                    <div>
                        <h1 className="text-3xl font-bold mb-4">
                            Khunlook Nursery
                        </h1>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            A capstone project developed for Chulalongkorn
                            University's nursery school. This project features a
                            classroom management dashboard that helps teachers
                            and administrators manage student information,
                            attendance, learning activities, and communication
                            with parents.
                        </p>

                        <h2 className="text-xl font-semibold mt-8 mb-3">
                            My Role
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            As the Designer and Frontend Developer, I led the
                            UI/UX redesign process based on user feedback and
                            analytics. I established the frontend architecture
                            using React and Vite, focusing on a feature-based
                            approach that improved code organization and
                            maintainability. I also implemented comprehensive
                            testing practices that achieved over 80% test
                            coverage.
                        </p>

                        <h2 className="text-xl font-semibold mt-8 mb-3">
                            Technical Challenges
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            One of the key challenges was creating a responsive
                            dashboard that worked seamlessly across devices
                            while maintaining optimal performance. I leveraged
                            Ant Design's Grid System to create a fluid layout
                            that adapted to different screen sizes. Another
                            challenge was implementing a comprehensive testing
                            strategy that covered both unit functionality and
                            end-to-end user flows, which I addressed using
                            Vitest and Playwright.
                        </p>

                        <h2 className="text-xl font-semibold mt-8 mb-3">
                            Results
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            The redesigned system improved user experience
                            metrics from 57% to 90%, significantly enhancing
                            user satisfaction and productivity. The adoption of
                            feature-based architecture and comprehensive testing
                            resulted in reduced bugs in production and faster
                            development cycles for new features.
                        </p>
                    </div>
                </div>

                {/* Sidebar - takes up 1/3 of the space on desktop */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            Project Info
                        </h2>
                        <div className="space-y-2">
                            <div>
                                <span className="font-medium">Type:</span>{" "}
                                Capstone Project
                            </div>
                            <div>
                                <span className="font-medium">Role:</span>{" "}
                                Designer / Frontend Developer
                            </div>
                            <div>
                                <span className="font-medium">Duration:</span>{" "}
                                May 2024 - October 2024
                            </div>
                            <div>
                                <span className="font-medium">Client:</span>{" "}
                                Khunlook Nursery (Chulalongkorn University)
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            Technologies
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
