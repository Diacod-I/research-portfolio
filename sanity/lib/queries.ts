// ./sanity/lib/queries.ts

import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const RESEARCHS_QUERY = groq`*[_type == "research" && defined(slug)] | order(publisehdAt desc)`;
export const RESEARCH_QUERY = groq`*[_type == "research" && slug.current == $slug][0]`;

export const PHOTOS_QUERY = groq`*[_type == "imageGallery" && defined(slug)]`
export const PHOTO_QUERY = groq`*[_type == "imageGallery" && slug.current == $slug][0]`