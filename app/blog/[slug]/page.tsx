import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

interface PostPageProps {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(remarkHtml)
    .process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Back to Blog */}
      <div className="mb-6">
        <Link
          href="/blog"
          className="text-yellow-700 hover:text-yellow-900 transition-colors"
        >
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-6">
        <div className="mb-3">
          <span className="text-sm text-yellow-700">
            {post.category}
          </span>
          <span className="text-gray-400 mx-2">•</span>
          <time className="text-sm text-black">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        <h1 className="text-2xl font-medium text-black mb-2">
          {post.title}
        </h1>
        
        <p className="text-lg text-black leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      {/* Article Content */}
      <article className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>

      {/* Article Footer */}
      <footer className="mt-8 pt-6 border-t border-yellow-300">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-black">
              Thanks for reading! If you enjoyed this article, consider sharing it.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/blog"
              className="text-yellow-700 hover:text-yellow-900 transition-colors font-medium"
            >
              More Articles
            </Link>
            <Link
              href="/about"
              className="text-yellow-700 hover:text-yellow-900 transition-colors font-medium"
            >
              About Me
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
