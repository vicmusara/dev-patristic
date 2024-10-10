import clientConfig from './config/client-config'
import { Post } from "../types/sanity";
import { createClient, groq } from "next-sanity";

const client = createClient(clientConfig);

export async function getPosts(): Promise<Post[]> {
    try {
        const query = groq`*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          "slug": slug.current,
          author->{
            _id,
            name,
            "image": image.asset->url
          },
          "mainImage": mainImage.asset->url,
          categories[]->{
            _id,
            title
          },
          publishedAt,
          excerpt
        }`;
        const posts = await client.fetch(query);
        console.log('Fetched posts:', posts);
        return posts as Post[];
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function getPost(slug: string): Promise<Post> {
    try {
        const query = groq`*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          "slug": slug.current,
          author->{
            _id,
            name,
            "image": image.asset->url
          },
          "mainImage": mainImage.asset->url,
          categories[]->{
            _id,
            title
          },
          publishedAt,
          excerpt,
          content
        }`;
        const post = await client.fetch(query, { slug });
        console.log('Fetched post:', post);
        return post as Post;
    } catch (error) {
        console.error('Error fetching post:', error);
        throw error;
    }
}