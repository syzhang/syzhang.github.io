'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface PostMetadata {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  slug: string;
  readingTime?: string;
}

interface BlogClientProps {
  posts: PostMetadata[];
}

const POSTS_PER_PAGE = 5;
const MIN_TAG_COUNT = 2; // Only show tags that appear at least twice

export default function BlogClient({ posts }: BlogClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Calculate tag counts and get top tags
  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      });
    });
    // Filter tags that appear at least MIN_TAG_COUNT times and sort by count
    return Array.from(counts.entries())
      .filter(([_, count]) => count >= MIN_TAG_COUNT)
      .sort((a, b) => b[1] - a[1]);
  }, [posts]);

  // Filter posts by selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.tags?.includes(selectedTag));
  }, [posts, selectedTag]);

  // Paginate filtered posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Reset to page 1 when tag filter changes
  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-700 mb-8">
        Technical posts on LLMs, AI agents, production ML systems and more.
        I write about lessons learned from building and playing with AI/ML, as well as general technology.
      </p>

      {posts.length === 0 ? (
        <div className="pt-8">
          <p className="text-gray-500 dark:text-gray-400">
            Blog posts coming soon! I'll be writing about building production LLM systems,
            AI agent architectures, and lessons learned from deploying ML in the real world.
          </p>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="pt-8">
          <p className="text-gray-500 dark:text-gray-400">
            No posts found with the selected tag.
          </p>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {paginatedPosts.map((post) => (
              <li key={post.slug} className="py-12">
                <article>
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

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Previous
              </button>
              <span className="text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {/* Tag filters at bottom */}
      {tagCounts.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {tagCounts.map(([tag, count]) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {tag} ({count})
              </button>
            ))}
            {selectedTag && (
              <button
                onClick={() => {
                  setSelectedTag(null);
                  setCurrentPage(1);
                }}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800"
              >
                Clear filter
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
