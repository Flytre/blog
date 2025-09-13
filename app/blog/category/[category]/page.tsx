import Link from 'next/link'
import { getPostsByCategory, getAllCategories } from '@/lib/posts'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const posts = await getPostsByCategory(params.category)
  const categories = await getAllCategories()

  // Check if category exists
  if (!categories.some(cat => cat.toLowerCase() === params.category.toLowerCase())) {
    notFound()
  }

  const categoryName = categories.find(cat => cat.toLowerCase() === params.category.toLowerCase()) || params.category

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryName}</h1>
        <p className="text-lg text-gray-600">
          Articles in the {categoryName.toLowerCase()} category
        </p>
      </div>

      {/* Categories Filter */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors"
          >
            All
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category.toLowerCase()}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category.toLowerCase() === params.category.toLowerCase()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-blue-600 font-medium">
                {post.category}
              </span>
              <span className="text-gray-400">•</span>
              <time className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              <Link 
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts found in this category.</p>
          <Link
            href="/blog"
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors mt-2 inline-block"
          >
            View all posts →
          </Link>
        </div>
      )}
    </div>
  )
}
