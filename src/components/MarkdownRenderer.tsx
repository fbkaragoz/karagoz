"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-lg prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mb-4 mt-8 text-white relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-cyan-400 before:to-blue-500 before:rounded-full">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3 mt-6">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold text-gray-200 mb-2 mt-4">
              {children}
            </h4>
          ),
          
          // Paragraphs
          p: ({ children }) => (
            <p className="text-gray-300 leading-relaxed mb-4">
              {children}
            </p>
          ),
          
          // Links
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-200 hover:shadow-lg hover:shadow-cyan-500/20"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
          
          // Code blocks
          code: (props) => {
            const { className, children } = props;
            const match = /language-(\w+)/.exec(className || '');
            const isInline = !match;
            return !isInline ? (
              <div className="my-6 rounded-lg overflow-hidden border border-gray-700/50">
                <div className="bg-gray-800 px-4 py-2 text-sm text-gray-400 border-b border-gray-700/50">
                  {match[1]}
                </div>
                <SyntaxHighlighter
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  style={oneDark as any}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                    padding: '1.5rem',
                  }}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code 
                className="bg-gray-900 text-cyan-400 px-2 py-1 rounded text-sm font-mono border border-gray-700/50"
              >
                {children}
              </code>
            );
          },
          
          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 italic text-gray-400 mb-4 bg-gray-900/30 rounded-r-lg">
              {children}
            </blockquote>
          ),
          
          // Lists
          ul: ({ children }) => (
            <ul className="text-gray-300 mb-4 space-y-2 list-none pl-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="text-gray-300 mb-4 space-y-2 list-decimal pl-6">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-300 relative before:content-['▸'] before:text-cyan-400 before:absolute before:-left-4 before:top-0">
              {children}
            </li>
          ),
          
          // Tables
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-700/50 rounded-lg overflow-hidden">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-800">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="bg-gray-900/50">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-gray-700/50">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-cyan-400 font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-gray-300">
              {children}
            </td>
          ),
          
          // Horizontal rule
          hr: () => (
            <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          ),
          
          // Images
          img: ({ src, alt }) => (
            <div className="my-6">
              <img 
                src={src} 
                alt={alt} 
                className="rounded-lg border border-gray-700/50 shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
              />
              {alt && (
                <p className="text-center text-gray-400 text-sm mt-2 italic">
                  {alt}
                </p>
              )}
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 