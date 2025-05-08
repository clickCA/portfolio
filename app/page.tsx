import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { BlogPreview } from "@/components/blog-preview";
import { getRecentPosts } from "@/lib/blog"; // Updated import path

// Add metadata for the home page
export const metadata = {
    title: "Chanakorn Aramsak - Full Stack Developer",
    description: "Full-stack developer specializing in building exceptional digital experiences with modern technologies like Next.js, React, and Node.js.",
    openGraph: {
        title: "Chanakorn Aramsak - Full Stack Developer",
        description: "Full-stack developer specializing in building exceptional digital experiences with modern technologies like Next.js, React, and Node.js.",
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
        title: "Chanakorn Aramsak - Full Stack Developer",
        description: "Full-stack developer specializing in building exceptional digital experiences with modern technologies like Next.js, React, and Node.js.",
        images: ["/preview-light.png"],
        creator: "@chanakorn",
    },
};

export default function Home() {
    // Featured projects
    const featuredProjects = [
        {
            id: 1,
            title: "Khunlook Nursery",
            description:
                "A capstone project featuring a classroom management dashboard with responsive design and comprehensive testing.",
            image: "/khunlook-asset.png",
            tags: ["React", "Ant Design", "Fastify", "Vitest"],
            link: "/projects/khunlook-nursery",
        },
        {
            id: 2,
            title: "BookBix",
            description:
                "A secure book marketplace platform with integrated payment processing system using Stripe and JWT authentication.",
            image: "/bookbix-architecture.png?height=400&width=600",
            tags: ["NestJS", "MongoDB", "Stripe", "JWT"],
            link: "/projects/bookbix",
        },
    ];

    // Get recent blog posts from markdown files
    const recentPosts = getRecentPosts(2);

    return (
        <div>
            {/* Hero section */}
            <section className="py-20 md:py-28">
                <div className="container flex flex-col items-center text-center">
                    <Image
                        src="/profile.jpg?height=120&width=120"
                        alt="Profile Picture"
                        width={120}
                        height={120}
                        className="rounded-full mb-6"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hi, I'm{" "}
                        <span className="text-primary">
                            Chanakorn Aramsak (Phee)
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
                        A full-stack developer specializing in building
                        exceptional digital experiences. Currently working at
                        Agoda, I focus on creating clean, user-friendly
                        applications with modern technologies like Next.js,
                        React, and Node.js.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button asChild>
                            <Link href="/projects">View Projects</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/about">About Me</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Featured projects section */}
            <section className="py-16 bg-zinc-50 dark:bg-zinc-800/50">
                <div className="container">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Featured Projects
                        </h2>
                        <Button variant="link" asChild>
                            <Link
                                href="/projects"
                                className="flex items-center gap-1"
                            >
                                View all projects{" "}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent blog posts section */}
            <section className="py-16">
                <div className="container">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Latest Posts
                        </h2>
                        <Button variant="link" asChild>
                            <Link
                                href="/blog"
                                className="flex items-center gap-1"
                            >
                                View all posts{" "}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {recentPosts.map((post) => (
                            <BlogPreview key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact section */}
            <section className="py-16 bg-zinc-50 dark:bg-zinc-800/50">
                <div className="container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                        I'm currently available for freelance work and open to
                        new opportunities. If you have a project that you want
                        to get started or need help with something, feel free to
                        reach out.
                    </p>
                    <Button asChild>
                        <a href="mailto:chanakorn.aramsak@gmail.com">
                            Get in Touch
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
}
