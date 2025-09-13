export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-mono text-white mb-8">about</h1>
      
      <div className="space-y-6 text-gray-300 font-mono text-sm leading-relaxed">
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

        <div className="pt-8 border-t border-gray-800">
          <h2 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">contact</h2>
          <div className="space-y-2 text-gray-400 font-mono text-xs">
            <p><a href="mailto:your.email@example.com" className="hover:text-white transition-colors">your.email@example.com</a></p>
            <p><a href="https://github.com/yourusername" className="hover:text-white transition-colors">github.com/yourusername</a></p>
            <p><a href="https://linkedin.com/in/yourusername" className="hover:text-white transition-colors">linkedin.com/in/yourusername</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
