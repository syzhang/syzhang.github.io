import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { calculateReadingTime } from '../../../utils/reading-time';

interface Props {
  params: Promise<{ slug: string }>;
}

interface PostMetadata {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  readingTime?: string;
  [key: string]: any; // Allow other frontmatter properties
}

async function getPost(slug: string): Promise<{ metadata: PostMetadata; code: string }> {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Compile MDX
  const code = String(await compile(content, {
    outputFormat: 'function-body',
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
  }));

  const readingTime = calculateReadingTime(content);
  return { metadata: { ...data, readingTime } as PostMetadata, code };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx$/, ''),
    }));
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const { metadata, code } = await getPost(slug);

  // Run the compiled MDX
  const { default: Content } = await run(code, runtime as any);

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <header className="space-y-2 pb-8 pt-6 md:space-y-5">
        <dl className="space-y-10">
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={metadata.date}>{metadata.date}</time>
              {metadata.readingTime && (
                <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                  • {metadata.readingTime}
                </span>
              )}
            </dd>
          </div>
        </dl>
        <div>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {metadata.title}
          </h1>
          {metadata.tags && (
            <div className="flex flex-wrap mt-3">
              {metadata.tags.map((tag: string) => (
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
      </header>
      <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-dark">
            <Content />
          </div>
        </div>
        <footer>
          <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base pt-8">
            <div className="pt-4 xl:pt-8">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Back to blog"
              >
                &larr; Back to blog
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
