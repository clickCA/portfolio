import Link from "next/link";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getAllBlogPosts } from "@/lib/blog";

// Add metadata for the blog page
export const metadata = {
    title: "Blog - Chanakorn Aramsak",
    description: "Articles and tutorials on web development, React, Next.js and other technologies I work with.",
    openGraph: {
        title: "Blog - Chanakorn Aramsak",
        description: "Articles and tutorials on web development, React, Next.js and other technologies I work with.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Chanakorn Aramsak's Blog",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog - Chanakorn Aramsak",
        description: "Articles and tutorials on web development, React, Next.js and other technologies I work with.",
        images: ["/profile.jpg"],
        creator: "@chanakorn",
    },
};

export default function BlogPage() {
    // Get blog posts from the file system
    const posts = getAllBlogPosts();

    return (
        <div className="container py-16">
            <div className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Blog</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Thoughts, insights, and guides on web development,
                        design, and technology.
                    </p>
                </header>

                <div className="space-y-8">
                    {posts.map((post, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString(
                                            "en-US",
                                            {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }
                                        )}
                                    </time>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <CardTitle className="hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </CardTitle>
                                <CardDescription>
                                    {post.description ||
                                        (post.content
                                            ? `${post.content.substring(
                                                  0,
                                                  150
                                              )}...`
                                            : "")}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    Read More
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
