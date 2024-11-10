export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8">
          Welcome to WebServices Pro
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600">Custom websites built with modern technologies</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-600">Beautiful and intuitive user interfaces</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
            <p className="text-gray-600">Improve your search engine rankings</p>
          </div>
        </div>
      </div>
    </main>
  )
}