import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/posts'

export default async function Blog() {
  const posts = await getAllPosts()
  const categories = await getAllCategories()

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-mono text-white mb-8">blog</h1>

      {/* Categories Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            className="px-3 py-1 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors font-mono text-xs"
          >
            all
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category.toLowerCase()}`}
              className="px-3 py-1 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors font-mono text-xs"
            >
              {category.toLowerCase()}
            </Link>
          ))}
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-800 pb-8 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <Link 
                href={`/blog/${post.slug}`}
                className="text-white hover:text-gray-300 transition-colors font-mono text-sm"
              >
                {post.title}
              </Link>
              <time className="text-gray-600 font-mono text-xs ml-4 flex-shrink-0">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
            
            <p className="text-gray-500 font-mono text-xs leading-relaxed mb-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-mono text-xs">
                {post.category.toLowerCase()}
              </span>
              {post.tags.length > 0 && (
                <>
                  <span className="text-gray-700">•</span>
                  <div className="flex gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-gray-600 font-mono text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 font-mono text-sm">no posts found</p>
        </div>
      )}
    </div>
  )
}
