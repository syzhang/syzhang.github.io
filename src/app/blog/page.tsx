import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PostMetadata {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  slug: string;
}

function getPostsMetadata(): PostMetadata[] {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPostsMetadata();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Blog
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Technical posts on LLMs, AI agents, and production ML systems
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="pt-8">
          <p className="text-gray-500 dark:text-gray-400">
            Blog posts coming soon! I'll be writing about building production LLM systems,
            AI agent architectures, and lessons learned from deploying ML in the real world.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post) => (
            <li key={post.slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>{post.date}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        {post.tags && (
                          <div className="flex flex-wrap mt-3">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="mr-3 text-sm font-medium uppercase text-primary-500 dark:text-primary-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {post.description}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read more: ${post.title}`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
