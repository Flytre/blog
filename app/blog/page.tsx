import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/posts'

export default async function Blog() {
  const posts = await getAllPosts()
  const categories = await getAllCategories()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-medium text-black mb-4 text-center">blog</h1>

      {/* Categories Filter */}
      <div className="mb-12 text-center">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/blog"
            className="px-4 py-2 border border-yellow-600 text-yellow-700 hover:text-yellow-900 hover:border-yellow-800 transition-colors font-medium"
          >
            all
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category.toLowerCase()}`}
              className="px-4 py-2 border border-yellow-600 text-yellow-700 hover:text-yellow-900 hover:border-yellow-800 transition-colors font-medium"
            >
              {category.toLowerCase()}
            </Link>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link 
              href={`/blog/${post.slug}`}
              className="block"
            >
              <div className="bg-white/50 backdrop-blur-sm border border-yellow-200 p-6 hover:bg-white/70 transition-all duration-300 hover:shadow-lg h-full">
                <div className="mb-3">
                  <span className="text-xs text-yellow-700 uppercase tracking-wider font-medium">
                    {post.category}
                  </span>
                  <time className="text-xs text-black/60 ml-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                <h3 className="text-lg font-medium text-black group-hover:text-yellow-700 transition-colors leading-tight">
                  {post.title}
                </h3>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-black text-lg">no posts found</p>
        </div>
      )}
    </div>
  )
}
