import React, { useState } from 'react';
import { ChevronDown, Download, Star, Check, Menu, X, Play, Share2, Settings, HelpCircle } from 'lucide-react';

const LandingPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
              <span className="ml-2 text-xl font-bold">Cartoon Everything</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
            </nav>

            <button 
              className="md:hidden cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-4 py-2 space-y-2">
            <a href="#features" className="block py-2 text-gray-700">Features</a>
            <a href="#pricing" className="block py-2 text-gray-700">Pricing</a>
            <a href="#faq" className="block py-2 text-gray-700">FAQ</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Images
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create stunning visual content with our AI-powered image transformation tool. 
            Upload, customize, and download in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
              <Download className="mr-2" size={20} />
              Download for iOS
            </button>
            <button className="bg-gray-800 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 flex items-center justify-center">
              <Download className="mr-2" size={20} />
              Download for Android
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AI Processing", desc: "Advanced AI algorithms for image transformation" },
              { title: "Real-time Preview", desc: "See changes instantly before purchasing" },
              { title: "Multiple Formats", desc: "Export in various formats and resolutions" }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Showcase Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Style Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">Style {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Free", price: "$0", features: ["5 images/month", "Basic styles", "720p export"] },
              { name: "Pro", price: "$9.99", features: ["Unlimited images", "All styles", "4K export", "Priority support"] },
              { name: "Team", price: "$29.99", features: ["Everything in Pro", "Team collaboration", "API access", "Custom styles"] }
            ].map((plan, index) => (
              <div key={index} className={`bg-white border-2 ${index === 1 ? 'border-blue-600' : 'border-gray-200'} rounded-lg p-8`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm text-gray-600">/month</span></div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full cursor-pointer py-3 rounded-lg font-semibold ${
                  index === 1 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">Get notified about new features and updates</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-white outline-none border-2 border-white placeholder:text-white"
            />
            <button className="bg-white cursor-pointer text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              { q: "How does the AI image processing work?", a: "Our AI analyzes your image and applies the selected style transformation using advanced neural networks." },
              { q: "What file formats are supported?", a: "We support JPG, PNG, HEIC, and most common image formats." },
              { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time from your account settings." },
              { q: "Is there a mobile app?", a: "Yes, we have mobile apps available for both iOS and Android." }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex cursor-pointer justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown 
                    className={`transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">Download our app and start transforming your images today</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
              <Download className="mr-2" size={20} />
              App Store
            </button>
            <button className="bg-green-600 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center">
              <Download className="mr-2" size={20} />
              Google Play
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span className="ml-2 font-bold">AppName</span>
              </div>
              <p className="text-gray-400">Transform your images with AI-powered tools.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AppName. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;