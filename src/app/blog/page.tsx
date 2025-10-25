import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { calculateReadingTime } from '../../utils/reading-time';
import BlogClient from './BlogClient';

interface PostMetadata {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  slug: string;
  readingTime?: string;
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

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPostsMetadata();

  return <BlogClient posts={posts} />;
}
