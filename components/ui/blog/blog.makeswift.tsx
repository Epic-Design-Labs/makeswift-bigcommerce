import { Number, Select, TextInput } from '@makeswift/runtime/controls';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ClipLoader from 'react-spinners/ClipLoader';

import { runtime } from '~/lib/makeswift/runtime';

import { Card } from '~/components/card';

interface Props {
  title: string;
  grid_size: string;
  itemsShown: number;
}

interface Post {
  id: string;
  title: {
    rendered: string;
  };
  uagb_featured_image_src: {
    medium: [string, number, string];
  };
  excerpt: {
    rendered: string;
  };
  uagb_excerpt: string;
}

runtime.registerComponent(
  function MakeswiftBlogPosts({ title, grid_size, itemsShown }: Props) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [color] = useState('#000');

    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);

        const response = await fetch(
          `https://articles.blueoceanride.com/wp-json/wp/v2/posts?per_page=${itemsShown}`,
        );
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const data = (await response.json()) as Post[];

        setPosts(data);
        setLoading(false);
      };

      void fetchPosts();
    }, [itemsShown]);

    const items = posts.map((post) => (
      <div key={post.id}>
        <Card
          href={`/wordpress-blog/${post.id}`}
          image={{
            src: post.uagb_featured_image_src.medium[0],
            altText: post.title.rendered,
          }}
          title={post.title.rendered}
        />
      </div>
    ));

    return (
      <div className="w-full">
        <h2 className="mb-6 text-center text-3xl font-bold">{title}</h2>
        {loading ? (
          <div className="mb-6 mt-6 text-center">
            <ClipLoader color={color} loading={loading} size={25} />
          </div>
        ) : (
          <div className={`grid grid-cols-${grid_size} gap-4`}>{items}</div>
        )}
      </div>
    );
  },
  {
    type: 'catalyst-blog-list',
    label: 'Catalyst / Blog',
    props: {
      title: TextInput({ label: 'Title', defaultValue: 'Recent Blog Posts' }),
      grid_size: Select({
        label: 'Grid Size',
        labelOrientation: 'horizontal',
        options: [
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
        ],
        defaultValue: '3',
      }),
      itemsShown: Number({
        label: 'Items shown',
        defaultValue: 6,
        min: 2,
        max: 12,
      }),
    },
  },
);
