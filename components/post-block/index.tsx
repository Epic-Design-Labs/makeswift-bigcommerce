import Image from 'next/image';

import { Link } from '../../components/link';

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

export const PostBlock = ({ post }: { post: Post }) => {
  return (
    <div className="post-block rounded-md p-2">
      <Link href={`/wordpress-blog/${post.slug}`}>
        <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
          <Image
            alt={post.title}
            className="absolute h-full w-full rounded-md object-cover"
            fill
            src={post.featuredImage.node.sourceUrl}
          />
        </div>
      </Link>
      <Link className="post-content my-4" href={`/wordpress-blog/${post.slug}`}>
        <h3 className="py-4 text-2xl">{post.title}</h3>
        <div className="italic" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      </Link>
    </div>
  );
};
