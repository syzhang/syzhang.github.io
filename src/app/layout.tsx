import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Suyi Zhang - AI/ML Engineer",
  description: "AI/ML Engineer specializing in LLMs, agentic workflows, and production ML systems",
  authors: [{ name: "Suyi Zhang" }],
  openGraph: {
    title: "Suyi Zhang - AI/ML Engineer",
    description: "AI/ML Engineer specializing in LLMs, agentic workflows, and production ML systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased font-sans">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex h-screen flex-col justify-between">
            <header className="flex items-center justify-between py-10">
              <div>
                <Link href="/" aria-label="Suyi Zhang">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold sm:block">
                      Suyi Zhang
                    </div>
                  </div>
                </Link>
              </div>
              <nav className="flex items-center space-x-4 leading-5 sm:space-x-6">
                <Link
                  href="/blog"
                  className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block hover:text-primary-500 dark:hover:text-primary-400"
                >
                  Blog
                </Link>
                <Link
                  href="/projects"
                  className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block hover:text-primary-500 dark:hover:text-primary-400"
                >
                  Projects
                </Link>
                <Link
                  href="/publications"
                  className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block hover:text-primary-500 dark:hover:text-primary-400"
                >
                  Publications
                </Link>
              </nav>
            </header>
            <main className="mb-auto">{children}</main>
            <footer>
              <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                  <a
                    href="mailto:suyizhang52@gmail.com"
                    className="text-sm text-gray-500 transition hover:text-gray-600 dark:hover:text-gray-400"
                  >
                    Email
                  </a>
                  <div className="text-gray-500">•</div>
                  <a
                    href="https://github.com/syzhang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 transition hover:text-gray-600 dark:hover:text-gray-400"
                  >
                    GitHub
                  </a>
                  <div className="text-gray-500">•</div>
                  <a
                    href="https://www.linkedin.com/in/suyi-zhang/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 transition hover:text-gray-600 dark:hover:text-gray-400"
                  >
                    LinkedIn
                  </a>
                  <div className="text-gray-500">•</div>
                  <a
                    href="https://scholar.google.com/citations?user=2VXl1ckAAAAJ&hl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 transition hover:text-gray-600 dark:hover:text-gray-400"
                  >
                    Scholar
                  </a>
                </div>
                <div className="mb-8 text-sm text-gray-500">
                  © {new Date().getFullYear()} Suyi Zhang
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
