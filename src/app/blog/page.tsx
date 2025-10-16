import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PostMetadata {
  title: string;
  date: string;
  description: string;
  slug: string;
}

function getPostsMetadata(): PostMetadata[] {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');

  // Return empty array if directory doesn't exist yet
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
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPostsMetadata();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {posts.length === 0 ? (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-gray-700">
            Blog posts coming soon! I'll be writing about:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Building production LLM agent systems</li>
            <li>Scaling AI services on AWS</li>
            <li>Multimodal RAG in practice</li>
            <li>Real-time ML on neuroimaging data</li>
            <li>Transitioning from academia to AI industry</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600 hover:text-blue-800">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm mb-3">{post.date}</p>
              <p className="text-gray-700">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-2 inline-block">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
