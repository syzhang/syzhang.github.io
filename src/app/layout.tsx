import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-xl font-bold">Suyi Zhang</a>
              <div className="flex gap-6">
                <a href="/" className="hover:text-blue-600">About</a>
                <a href="/blog" className="hover:text-blue-600">Blog</a>
                <a href="/publications" className="hover:text-blue-600">Publications</a>
                <a href="https://github.com/syzhang" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="mt-16 py-8 border-t bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Suyi Zhang</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
