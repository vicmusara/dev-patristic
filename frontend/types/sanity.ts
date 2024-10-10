import { PortableTextBlock } from '@portabletext/types'

export interface Author {
    _id: string
    name: string
    image: string
}

export interface Category {
    _id: string
    title: string
}

export interface Post {
    _id: string
    title: string
    slug: string
    author: Author
    mainImage: string
    categories: Category[]
    publishedAt: string
    excerpt: string
    content?: PortableTextBlock[]
}