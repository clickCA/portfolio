import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

// Generate metadata for the BookBix project page
export const metadata: Metadata = {
    title: "BookBix Project - Chanakorn Aramsak",
    description: "A secure book marketplace platform with integrated payment processing system using Stripe and JWT authentication.",
    openGraph: {
        title: "BookBix Project - Chanakorn Aramsak",
        description: "A secure book marketplace platform with integrated payment processing system using Stripe and JWT authentication.",
        images: [
            {
                url: "/bookbix-architecture.png",
                width: 1200,
                height: 630,
                alt: "BookBix Architecture",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "BookBix Project - Chanakorn Aramsak",
        description: "A secure book marketplace platform with integrated payment processing system using Stripe and JWT authentication.",
        images: ["/bookbix-architecture.png"],
        creator: "@chanakorn",
    },
};

export default function BookBixProject() {
    // Project tech stack
    const technologies = [
        "NestJS",
        "MongoDB",
        "Stripe API",
        "JWT Authentication",
        "Scrum Methodology",
        "RESTful API",
    ];

    // Project highlights
    const highlights = [
        {
            title: "Secure Payment Processing",
            description:
                "Built a secure payment processing system with Stripe integration that handled book purchases and marketplace transactions.",
        },
        {
            title: "Authentication System",
            description:
                "Implemented JWT authentication for secure user authentication and authorization across the platform.",
        },
        {
            title: "Agile Development",
            description:
                "Worked in a team of 9 using Scrum methodology with sprint planning, daily standups, and sprint reviews.",
        },
        {
            title: "Backend Architecture",
            description:
                "Designed and implemented backend services using NestJS and MongoDB for scalable and maintainable code.",
        },
        {
            title: "Database Optimization",
            description:
                "Implemented indexing strategies and query optimization techniques that improved database performance by 40% for high-traffic operations.",
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
                    <div className="rounded-lg overflow-hidden border bg-white dark:bg-zinc-800 p-6">
                        <div className="flex flex-col items-center">
                            <div className="text-lg font-semibold mb-4 text-center">
                                BookBix Architecture
                            </div>
                            <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
                                {/* Frontend to API */}
                                <div className="col-span-3 flex justify-center items-center p-3 bg-zinc-100 dark:bg-zinc-700 rounded-lg">
                                    <div className="text-center">
                                        <div className="font-medium">
                                            Frontend Client
                                        </div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                                            React/Next.js
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex justify-center">
                                    <div className="w-0.5 h-8 bg-zinc-300 dark:bg-zinc-600"></div>
                                </div>

                                {/* API Layer */}
                                <div className="col-span-3 flex justify-center items-center p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                    <div className="text-center">
                                        <div className="font-medium">
                                            API Layer
                                        </div>
                                        <div className="text-sm font-medium text-green-600 dark:text-green-400">
                                            NestJS
                                        </div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                                            JWT Authentication • RESTful
                                            Endpoints
                                        </div>
                                    </div>
                                </div>

                                {/* Connectors */}
                                <div className="col-span-3 flex justify-between px-12">
                                    <div className="w-0.5 h-8 bg-zinc-300 dark:bg-zinc-600"></div>
                                    <div className="w-0.5 h-8 bg-zinc-300 dark:bg-zinc-600"></div>
                                    <div className="w-0.5 h-8 bg-zinc-300 dark:bg-zinc-600"></div>
                                </div>

                                {/* Services */}
                                <div className="flex justify-center items-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                    <div className="text-center">
                                        <div className="font-medium">
                                            Database
                                        </div>
                                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                            MongoDB
                                        </div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                                            Book & User Data
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center p-3 bg-zinc-100 dark:bg-zinc-700 rounded-lg">
                                    <div className="text-center">
                                        <div className="font-medium">
                                            Auth Service
                                        </div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                                            JWT Tokens
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                    <div className="text-center">
                                        <div className="font-medium">
                                            Payments
                                        </div>
                                        <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                            Stripe API
                                        </div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                                            Secure Transactions
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold mb-4">BookBix</h1>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            BookBix is a modern book marketplace platform that
                            allows users to buy, sell, and trade books. The
                            platform features secure payment processing, user
                            authentication, and a responsive interface for
                            browsing and managing book listings.
                        </p>

                        <h2 className="text-xl font-semibold mt-8 mb-3">
                            My Role
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            As a Backend Developer on this project, I was
                            responsible for designing and implementing core
                            backend services using NestJS and MongoDB. My
                            primary focus areas were the payment processing
                            system with Stripe integration and the JWT
                            authentication system to ensure secure user sessions
                            and data protection.
                        </p>

                        <h2 className="text-xl font-semibold mt-8 mb-3">
                            Development Process
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            Our team of 9 followed Scrum methodology, with
                            regular sprint planning sessions to define tasks and
                            priorities, daily standups to track progress and
                            address blockers, and sprint reviews to demonstrate
                            completed features and gather feedback. This
                            structured approach helped us maintain consistent
                            progress and adapt to changing requirements
                            throughout the development process.
                        </p>

                        <h2 className="text-xl font-semibold mt-8 mb-3">
                            Technical Implementation
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            For the payment system, I integrated Stripe API to
                            handle secure transactions, including features like
                            payment intents, webhooks for transaction status
                            updates, and refund handling. The authentication
                            system used JWT tokens with refresh/access token
                            strategy to maintain secure sessions while providing
                            a smooth user experience.
                        </p>

                        <h2 className="text-xl font-semibold mt-8 mb-3">
                            Key Highlights
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4 mt-4">
                            {highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="border rounded-lg p-4 bg-white dark:bg-zinc-800"
                                >
                                    <h3 className="text-lg font-medium mb-2">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {highlight.description}
                                    </p>
                                </div>
                            ))}
                        </div>
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
                                <span className="font-medium">Type:</span> Team
                                Project
                            </div>
                            <div>
                                <span className="font-medium">Role:</span>{" "}
                                Backend Developer
                            </div>
                            <div>
                                <span className="font-medium">Team Size:</span>{" "}
                                9 Developers
                            </div>
                            <div>
                                <span className="font-medium">
                                    Methodology:
                                </span>{" "}
                                Scrum/Agile
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
