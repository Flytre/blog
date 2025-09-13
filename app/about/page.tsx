export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-medium text-black mb-4 text-center">About</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6 text-lg text-black leading-relaxed">
          <p>
            Hi, I'm Flytre. I'm a 20-something year old engineer based in NYC. In the past, I've worked at a unicorn tech startup and in quantitive finance.
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-yellow-300">
          <h2 className="text-lg font-medium text-black mb-4 text-center">contact</h2>
          <div className="space-y-3 text-center">
            <p>
              <a 
                href="mailto:flytre@flytre.net" 
                className="text-yellow-700 hover:text-yellow-900 transition-colors text-lg font-medium"
              >
                flytre [ / at ] flytre.net
              </a>
            </p>
            <p>
              <a 
                href="https://github.com/flytre" 
                className="text-yellow-700 hover:text-yellow-900 transition-colors text-lg font-medium"
              >
                github.com/flytre
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
