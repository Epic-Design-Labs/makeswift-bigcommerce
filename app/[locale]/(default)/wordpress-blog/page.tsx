/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';

import { PostBlock } from '../../../../components/post-block';
import { fetchAPI } from '../../../../lib/wordpress-client';

export const getBlogPosts = async (first = 10) => {
  const data = await fetchAPI(
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`,
    {
      variables: {
        first,
      },
    },
  );

  return data?.posts?.nodes;
};

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

export default async function WordpressBlog() {
  const blogPosts = (await getBlogPosts()) as Post[];

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-xl">All my posts ({blogPosts.length})</h3>
      <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {blogPosts.map((post) => {
          return <PostBlock key={post.slug} post={post} />;
        })}
      </div>
    </div>
  );
}
