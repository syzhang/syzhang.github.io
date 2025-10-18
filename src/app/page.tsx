import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { calculateReadingTime } from '../utils/reading-time';

interface PostMetadata {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  slug: string;
  readingTime?: string;
}

function getLatestPosts(count: number = 2): PostMetadata[] {
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
      const { data, content } = matter(fileContents);
      const readingTime = calculateReadingTime(content);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags,
        readingTime,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, count);
}

export default function Home() {
  const latestPosts = getLatestPosts(2);

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 pb-8 pt-8">
        <div className="xl:col-span-3 prose max-w-none dark:prose-dark">
          <p className="text-gray-700 dark:text-gray-300">
            AI/ML Engineer with 10+ years building machine learning systems, from brain-computer interfaces to production AI agents.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Now building LLM-powered agentic workflows that solve real-world problems as startup co-founder/CTO.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Previously Oxford & Cambridge researcher working on ML models of neuroimaging and pain.
          </p>
        </div>
      </div>

      <div className="py-12">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 mb-8">
          Latest
        </h2>
        {latestPosts.length === 0 ? (
          <div className="text-gray-500 dark:text-gray-400">
            <p>Blog posts coming soon! I'll be writing about building production LLM systems, AI agent architectures, and lessons learned from deploying ML in the real world.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {latestPosts.map((post) => (
              <article key={post.slug} className="py-12">
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>{post.date}</time>
                      {post.readingTime && (
                        <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                          • {post.readingTime}
                        </span>
                      )}
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {post.title}
                          </Link>
                        </h3>
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
            ))}
          </div>
        )}

        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
