import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Open_Sans } from 'next/font/google';
import { Github, Linkedin, GraduationCap } from 'lucide-react';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['300', '400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Suyi Zhang - AI/ML Engineer",
  description: "AI/ML Engineer specializing in LLMs, agentic workflows, and production ML systems",
  authors: [{ name: "Suyi Zhang" }],
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
  },
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
    <html lang="en" className={`${openSans.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased font-sans">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex h-screen flex-col justify-between">
            <header className="flex items-center justify-between py-10">
              <div>
                <Link href="/" aria-label="Suyi Zhang" className="flex items-center space-x-3">
                  <img
                    src="/logo.png"
                    alt="Suyi Zhang"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="text-2xl font-semibold sm:block">
                    Suyi Zhang
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
                <div className="mb-3 flex space-x-6">
                  <a
                    href="https://github.com/syzhang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 transition hover:text-gray-600 dark:hover:text-gray-400"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suyi-zhang/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 transition hover:text-gray-600 dark:hover:text-gray-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=2VXl1ckAAAAJ&hl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 transition hover:text-gray-600 dark:hover:text-gray-400"
                    aria-label="Google Scholar"
                  >
                    <GraduationCap size={20} />
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
