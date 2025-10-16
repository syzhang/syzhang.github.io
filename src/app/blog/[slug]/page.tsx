import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

interface Props {
  params: { slug: string };
}

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { metadata: data, content };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');

  // Return empty array if directory doesn't exist yet
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
  const { metadata, content } = await getPost(params.slug);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        <div className="flex gap-4 text-gray-600">
          <time dateTime={metadata.date}>{metadata.date}</time>
          {metadata.tags && (
            <div className="flex gap-2">
              {metadata.tags.map((tag: string) => (
                <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="prose max-w-none">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeHighlight, rehypeSlug],
            },
          }}
        />
      </div>

      <div className="mt-12 pt-8 border-t">
        <a href="/blog" className="text-blue-600 hover:underline">
          ← Back to all posts
        </a>
      </div>
    </article>
  );
}
