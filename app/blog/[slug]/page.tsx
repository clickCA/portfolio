import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug } from "@/lib/blog";
import { marked } from "marked";

interface BlogPostParams {
    params: {
        slug: string;
    };
}

export default function BlogPostPage({ params }: BlogPostParams) {
    const { slug } = params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Convert markdown to HTML
    const contentHtml = marked(post.content || "");
    console.log(slug);
    return (
        <div className="container py-16">
            <article className="prose dark:prose-invert mx-auto">
                <Button variant="ghost" asChild className="mb-8 -ml-4">
                    <Link href="/blog" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to all posts
                    </Link>
                </Button>

                <header className="mb-8 not-prose">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
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
                </header>

                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
        </div>
    );
}
