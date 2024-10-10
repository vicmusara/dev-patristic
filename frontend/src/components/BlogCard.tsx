import { CalendarIcon, UserIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"

import { urlForImage } from "@/lib/sanity"
import { Post } from "../../types/sanity";

interface BlogCardProps {
    post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-lg bg-black">
            <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-w-16 aspect-h-9">
                    <Image
                        src={urlForImage(post.mainImage).url()}
                        alt={post.title}
                        width={1792}
                        height={1024}
                        style={{ objectFit: 'cover' }}
                        priority
                        className="transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="mb-2 text-2xl font-bold text-white">{post.title}</h2>
                    <div className="mb-2 flex items-center justify-between text-sm text-gray-300">
                        <div className="flex items-center">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {format(new Date(post.publishedAt), 'dd MMMM yyyy')}
                        </div>
                        <div className="flex items-center">
                            <UserIcon className="mr-2 h-4 w-4" />
                            {post.author.name}
                        </div>
                    </div>
                    <p className="mb-2 text-sm text-gray-300 line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                        {post.categories?.map((category) => (
                            <span key={category._id} className="rounded-full bg-gray-700 px-2 py-1 text-xs text-white">
                                {category.title}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    )
}
