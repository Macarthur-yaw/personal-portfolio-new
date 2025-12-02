
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'acx51ixy',
  dataset: 'testing',
  useCdn: true, 
  headers: {
    'X-Custom-Header': 'custom-value'
  },
  apiVersion: '2025-02-06', })


export async function getPosts() {
  const posts = await client.fetch('*[_type == "blog"]')
  return posts
}


export async function getSinglePosts(slug: string) {
  const post = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      slug,
      content,
      datePublished
    }`,
    { slug }
  );

  return post;
}


