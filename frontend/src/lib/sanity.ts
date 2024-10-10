import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'


const imageBuilder = createImageUrlBuilder({
    projectId: 'o84mx4zv',
    dataset: 'production',
})

export const urlForImage = (source: { asset: { url: string } }) => {
    return imageBuilder?.image(source).auto('format').fit('max')
}

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: '2024-10-10',
})