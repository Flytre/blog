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
      <h1 className="text-3xl font-medium text-black mb-4 text-center">{categoryName}</h1>

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

      {/* Posts List */}
      <div className="space-y-8">
        {posts.map((post) => (
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

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-black text-lg">no posts found</p>
        </div>
      )}
    </div>
  )
}

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = await getAllCategories()
  
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }))
}
