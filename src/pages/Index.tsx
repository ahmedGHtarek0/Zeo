
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold tracking-wider">
              TESLA
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-red-500 transition-colors duration-300">Home</a>
              <a href="#models" className="text-white hover:text-red-500 transition-colors duration-300">Models</a>
              <a href="#energy" className="text-white hover:text-red-500 transition-colors duration-300">Energy</a>
              <a href="#charging" className="text-white hover:text-red-500 transition-colors duration-300">Charging</a>
              <a href="#downloads" className="text-white hover:text-red-500 transition-colors duration-300">Downloads</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-48 h-48 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-500/30 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider animate-fade-in">
            MODEL S
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            Plaid: Beyond Ludicrous
          </p>
          <div className="space-y-4">
            <div className="text-4xl font-bold animate-pulse">
              1.99s <span className="text-lg">0-60 mph</span>
            </div>
            <div className="text-4xl font-bold animate-pulse">
              200mph <span className="text-lg">Top Speed</span>
            </div>
            <div className="text-4xl font-bold animate-pulse">
              405mi <span className="text-lg">Range</span>
            </div>
          </div>
          <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl">
            Order Now
          </button>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Our Vehicles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Model S */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="h-64 bg-gradient-to-br from-black to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500/20 group-hover:bg-red-500/40 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-3xl font-bold">Model S</h3>
                  <p className="text-red-300">From $94,990</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">405mi</div>
                    <div className="text-sm text-gray-600">Range</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1.99s</div>
                    <div className="text-sm text-gray-600">0-60 mph</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">200mph</div>
                    <div className="text-sm text-gray-600">Top Speed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Model 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="h-64 bg-gradient-to-br from-gray-800 to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-500/40 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-3xl font-bold">Model 3</h3>
                  <p className="text-blue-300">From $38,990</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">358mi</div>
                    <div className="text-sm text-gray-600">Range</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3.1s</div>
                    <div className="text-sm text-gray-600">0-60 mph</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">162mph</div>
                    <div className="text-sm text-gray-600">Top Speed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Model X */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="h-64 bg-gradient-to-br from-purple-900 to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/40 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-3xl font-bold">Model X</h3>
                  <p className="text-purple-300">From $109,990</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">348mi</div>
                    <div className="text-sm text-gray-600">Range</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2.5s</div>
                    <div className="text-sm text-gray-600">0-60 mph</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">163mph</div>
                    <div className="text-sm text-gray-600">Top Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Section */}
      <section id="energy" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Tesla Energy</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Solar Roof</h3>
              <p className="text-xl mb-6 text-gray-300">
                Beautiful solar without compromise. Generate the energy you use with Tesla Solar Roof.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Durable and weatherproof
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  25-year warranty
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Superior efficiency
                </li>
              </ul>
            </div>
            
            <div className="h-96 bg-gradient-to-br from-red-900/50 to-yellow-900/50 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="text-3xl font-bold">Solar Roof</div>
                <div className="text-red-400">Transform your home</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charging Section */}
      <section id="charging" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Supercharger Network</h2>
          
          <div className="text-center mb-12">
            <div className="inline-flex space-x-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">45,000+</div>
                <div className="text-gray-600">Superchargers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">4,500+</div>
                <div className="text-gray-600">Stations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Charge in minutes, not hours</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Find Us</h4>
                <p className="text-gray-600">Use the Tesla app to locate Superchargers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Plug In</h4>
                <p className="text-gray-600">Charging starts automatically</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Relax</h4>
                <p className="text-gray-600">Grab a coffee and get back on the road</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-20 bg-gradient-to-br from-black via-gray-900 to-red-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">Download Resources</h2>
          <p className="text-xl text-gray-300 mb-12">
            Get detailed information about Tesla vehicles and technology
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* PowerPoint Download */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tesla Presentation</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive PowerPoint presentation covering all Tesla models, features, and specifications.
              </p>
              <button 
                onClick={() => {
                  // Create a mock PPT file download
                  const link = document.createElement('a');
                  link.href = '../public/Tesla_Safety_Presentation.pptx'; // Replace with actual PPT file path
                  link.download = 'Tesla_Presentation.pptx';
                  link.click();
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Download PPT
              </button>
            </div>

            {/* Word Document Download */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Documentation</h3>
              <p className="text-gray-300 mb-6">
                Detailed Word document with technical specifications, safety features, and performance data.
              </p>
              <button 
                onClick={() => {
                  // Create a mock Word file download
                  const link = document.createElement('a');
                  link.href = '../public/Tesla_Safety_Case_Study_Report.docx'; // Replace with actual DOCX file path
                  link.download = 'Tesla_Technical_Documentation.docx';
                  link.click();
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Download Word Doc
              </button>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
            <p className="text-gray-400 text-sm">
              📋 Note: These are demo download buttons. In a real application, these would link to actual Tesla resource files.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Vehicles</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Model S</li>
                <li>Model 3</li>
                <li>Model X</li>
                <li>Model Y</li>
                <li>Cybertruck</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Energy</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Solar Roof</li>
                <li>Solar Panels</li>
                <li>Powerwall</li>
                <li>Megapack</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Charging</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Supercharger</li>
                <li>Destination Charging</li>
                <li>Wall Connector</li>
                <li>Mobile Connector</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Investor Relations</li>
                <li>News</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tesla, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s both;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Index;
