// sanity.d.ts
declare module 'sanity';
declare module '@sanity/vision';
declare module 'sanity/structure';

// next-sanity.d.ts
import { GroqStore } from '@sanity/groq-store'

declare module 'next-sanity' {
    export function groq(strings: TemplateStringsArray, ...keys: any[]): string;
    export function createClient(config: any): GroqStore;
}