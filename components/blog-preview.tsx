import Link from "next/link";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog"; // Import the type from lib/blog

interface BlogPreviewProps {
    post: BlogPost;
}

export function BlogPreview({ post }: BlogPreviewProps) {
    return (
        <Card className="transition-all hover:shadow-md">
            <CardHeader>
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
                <CardTitle className="hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription>
                    {post.description || "No description available"}
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
    );
}
