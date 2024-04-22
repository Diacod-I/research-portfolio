// ./sanity/lib/queries.ts

import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const RESEARCHS_QUERY = groq`*[_type == "research" && defined(slug)]`;
export const RESEARCH_QUERY = groq`*[_type == "research" && slug.current == $slug][0]`;
export const ALL_RESEARCH_QUERY = groq`*[_type == "research"]{ ... }`;
