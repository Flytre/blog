import Link from 'next/link'
import { getLatestPosts } from '@/lib/posts'

export default async function Home() {
  const latestPosts = await getLatestPosts(3)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-medium text-black mb-3 leading-tight">
          Hello. I'm Flytre.
        </h1>
        <p className="text-lg text-black mb-4 max-w-3xl mx-auto leading-relaxed">
          I'm an engineer.
        </p>
        {/* <p className="text-lg text-black max-w-4xl mx-auto leading-relaxed">
          i explore the intersection of technology and creativity, 
          writing about the stories behind the code and the art in the algorithms.
        </p> */}
      </section>

      {/* Latest Posts - Minimal Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <article key={post.slug} className="group">
              <Link 
                href={`/blog/${post.slug}`}
                className="block"
              >
                <div className="bg-white/50 backdrop-blur-sm border border-yellow-200 p-6 hover:bg-white/70 transition-all duration-300 hover:shadow-lg">
                  <div className="mb-3">
                    <span className="text-xs text-yellow-700 uppercase tracking-wider font-medium">
                      {post.category}
                    </span>
                    <time className="text-xs text-black/60 ml-2">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
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
        
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-yellow-700 hover:text-yellow-900 font-medium transition-colors border border-yellow-300 px-6 py-3 hover:bg-yellow-50"
          >
            view all posts
          </Link>
        </div>
      </section>
    </div>
  )
}
