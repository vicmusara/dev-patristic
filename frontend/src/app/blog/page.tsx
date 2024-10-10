import { Post } from "../../../types/sanity";
import { getPosts } from "../../../sanity/sanity-utility";
import BlogCard from "@/components/BlogCard";

export default async function BlogList() {
    try {
        const posts: Post[] = await getPosts();
        console.log("Fetched Posts in BlogList:", posts);

        return (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post: Post, index: number) => {
                    console.log(`Rendering post ${index}:`, post);
                    return <BlogCard key={post._id} post={post} />;
                })}
            </div>
        );
    } catch (error) {
        console.error("Error in BlogList:", error);
        return <div>Error loading blog posts</div>;
    }
}