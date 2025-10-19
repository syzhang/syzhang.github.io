// Simple reading time calculation
// Average reading speed: 200-250 words per minute
const WORDS_PER_MINUTE = 150;

export function calculateReadingTime(content: string): string {
  // Remove markdown syntax and count words
  const plainText = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*|__|\*|_/g, '') // Remove bold/italic
    .replace(/>\s+/g, '') // Remove blockquotes
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

  return `${minutes} min read`;
}