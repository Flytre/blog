import Link from 'next/link'
import { getLatestPosts } from '@/lib/posts'

export default async function Home() {
  const latestPosts = await getLatestPosts(3)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section - Medium Inspired */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-medium text-black mb-3 leading-tight">
          Hello. I'm Flytre.
        </h1>
        <p className="text-lg text-black mb-4 max-w-3xl mx-auto leading-relaxed">
          creative technologist & digital storyteller
        </p>
        <p className="text-lg text-black max-w-4xl mx-auto leading-relaxed">
          i explore the intersection of technology and creativity, 
          writing about the stories behind the code and the art in the algorithms.
        </p>
      </section>

      {/* Latest Posts - Clean List */}
      <section>
        <div className="space-y-8">
          {latestPosts.map((post, index) => (
            <article key={post.slug} className="border-b border-yellow-200 pb-6">
              <div className="mb-2">
                <span className="text-sm text-yellow-700">
                  {post.category}
                </span>
                <span className="text-gray-400 mx-2">•</span>
                <time className="text-sm text-black">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="block hover:text-yellow-700 transition-colors"
              >
                <h3 className="text-lg font-medium text-black mb-1">
                  {post.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-yellow-700 hover:text-yellow-900 font-medium transition-colors"
          >
            view all posts
          </Link>
        </div>
      </section>
    </div>
  )
}
