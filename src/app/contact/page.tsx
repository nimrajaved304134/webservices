export default function Contact() {
    return (
      <div className="min-h-screen relative">
        {/* Map background */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%' height='100%' fill='%23f3f4f6'/%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3Cpath d='M30 30h40v40H30z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t">
              <h2 className="text-xl font-semibold mb-4">Our Office</h2>
              <p className="text-gray-600">
                123 Web Street<br />
                Digital City, DC 12345<br />
                contact@webservicespro.com<br />
                (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }