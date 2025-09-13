import Link from 'next/link'
import { getLatestPosts } from '@/lib/posts'

export default async function Home() {
  const latestPosts = await getLatestPosts(3)

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* Hero Section - Ultra Minimal */}
      <section className="mb-16">
        <h1 className="text-2xl font-mono text-white mb-4">
          hi, i'm flytre
        </h1>
        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
          software engineer & writer
        </p>
        <p className="text-gray-500 font-mono text-sm leading-relaxed">
          i write about technology, systems, and the things that interest me.
        </p>
      </section>

      {/* Latest Posts - Minimal List */}
      <section>
        <h2 className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-wider">
          recent posts
        </h2>
        <div className="space-y-6">
          {latestPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-800 pb-6 last:border-b-0">
              <div className="flex items-start justify-between mb-2">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-white hover:text-gray-300 transition-colors font-mono text-sm"
                >
                  {post.title}
                </Link>
                <time className="text-gray-600 font-mono text-xs ml-4 flex-shrink-0">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <p className="text-gray-500 font-mono text-xs leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
        
        <div className="mt-8">
          <Link
            href="/blog"
            className="text-gray-500 hover:text-white transition-colors font-mono text-xs"
          >
            view all posts →
          </Link>
        </div>
      </section>
    </div>
  )
}
