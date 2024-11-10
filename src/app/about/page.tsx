export default function About() {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg mb-6">
              We are a team of passionate web developers and designers dedicated to
              creating exceptional digital experiences for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver innovative web solutions that help businesses thrive in
                  the digital world.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Quality First</li>
                  <li>Client Satisfaction</li>
                  <li>Innovation</li>
                  <li>Transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }