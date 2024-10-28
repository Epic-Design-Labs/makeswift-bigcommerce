/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { fetchAPI } from '../../../../../lib/wordpress-client';

import './page.css';

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      title
    }
  }`,
    {
      variables: {
        id: slug,
      },
    },
  );

  return data?.post as Post;
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function WordpressBlogPost({ params: { slug } }: Props) {
  const post = await getPostBySlug(slug);

  return (
    <section className="entry-content container mx-auto py-12">
      <div
        className="post-header relative flex min-h-[200px] w-full flex-col items-center justify-center rounded-md"
        style={{
          backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute z-10 h-full w-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}
        />
        <div className="z-20 text-center">
          <h1 className="mb-4 text-2xl md:text-4xl">{post.title}</h1>
          <p className="italic">By Jeffrey</p>
        </div>
      </div>
      <div
        className="mx-auto mt-20 w-full py-6 text-lg md:w-3/5"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
}
