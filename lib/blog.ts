import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    description: string; // Make this required to match the updated implementation
    content?: string; // Make content optional since we don't always need it
}

export function getAllBlogPosts(): BlogPost[] {
    // Get file names under /content/blog
    const fileNames = fs.readdirSync(blogDirectory);

    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            // Remove ".md" from file name to get slug
            const slug = fileName.replace(/\.md$/, "");

            // Read markdown file as string
            const fullPath = path.join(blogDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // Use gray-matter to parse the post metadata section
            const { data, content } = matter(fileContents);

            // Always ensure description has a value
            let description = data.description || "";
            if (!description) {
                // Extract first paragraph or truncate content
                description = content.split("\n\n")[0].slice(0, 150) + "...";
            }

            // Combine the data with the slug
            return {
                slug,
                title: data.title,
                date: data.date.toString(),
                readTime: data.readTime,
                description,
                content,
            };
        });

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(blogDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);

        // Ensure description has a value
        let description = data.description || "";
        if (!description) {
            // Extract first paragraph or truncate content
            description = content.split("\n\n")[0].slice(0, 150) + "...";
        }

        return {
            slug,
            title: data.title,
            date: data.date.toString(),
            readTime: data.readTime,
            description,
            content,
        };
    } catch (error) {
        return null;
    }
}

export function getRecentPosts(count: number = 2): BlogPost[] {
    const allPosts = getAllBlogPosts();
    return allPosts.slice(0, count);
}
