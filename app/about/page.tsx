export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-medium text-black mb-4 text-center">about</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6 text-lg text-black leading-relaxed">
          <p>
            i'm a software engineer passionate about building systems that matter. 
            i write about technology, engineering practices, and the things i'm learning.
          </p>

          <p>
            currently focused on distributed systems, performance optimization, 
            and the intersection of technology and human experience.
          </p>

          <p>
            when i'm not coding, you'll find me reading, writing, or exploring 
            new ideas in technology and beyond.
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-yellow-300">
          <h2 className="text-lg font-medium text-black mb-4 text-center">contact</h2>
          <div className="space-y-3 text-center">
            <p>
              <a 
                href="mailto:your.email@example.com" 
                className="text-yellow-700 hover:text-yellow-900 transition-colors text-lg font-medium"
              >
                your.email@example.com
              </a>
            </p>
            <p>
              <a 
                href="https://github.com/yourusername" 
                className="text-yellow-700 hover:text-yellow-900 transition-colors text-lg font-medium"
              >
                github.com/yourusername
              </a>
            </p>
            <p>
              <a 
                href="https://linkedin.com/in/yourusername" 
                className="text-yellow-700 hover:text-yellow-900 transition-colors text-lg font-medium"
              >
                linkedin.com/in/yourusername
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
