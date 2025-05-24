import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom heading components with cyberpunk styling
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-white mb-6 mt-8 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mb-4 mt-8 relative pl-6">
        <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-cyan-400 mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-white mb-2 mt-4">
        {children}
      </h4>
    ),
    
    // Paragraph styling
    p: ({ children }) => (
      <p className="text-gray-300 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    
    // Link styling
    a: ({ href, children }) => (
      <Link 
        href={href || '#'} 
        className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-200"
      >
        {children}
      </Link>
    ),
    
    // Code blocks
    pre: ({ children }) => (
      <pre className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-lg p-6 mb-6 overflow-x-auto">
        {children}
      </pre>
    ),
    
    // Inline code
    code: ({ children }) => (
      <code className="bg-gray-900 text-cyan-400 px-2 py-1 rounded text-sm font-mono border border-gray-700/50">
        {children}
      </code>
    ),
    
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
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-700/50 rounded-lg overflow-hidden">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-800/50">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-cyan-400 font-semibold border-b border-gray-700/50">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-gray-300 border-b border-gray-700/30">
        {children}
      </td>
    ),
    
    // Images
    img: ({ src, alt }) => (
      <div className="my-6 rounded-lg overflow-hidden border border-gray-700/50">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
    ),
    
    // Horizontal rule
    hr: () => (
      <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    ),
    
    // Custom components can be added here
    ...components,
  };
} 