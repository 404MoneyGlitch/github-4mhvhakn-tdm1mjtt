import React, { useEffect, useState } from 'react';
import { 
  Leaf, 
  Home, 
  Sofa, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter,
  Sparkles,
  Droplets,
  Building2,
  Car,
  Warehouse,
  Award,
  Users,
  Clock,
  Shield
} from 'lucide-react';

const rollingTexts = [
  "Eco-friendly cleaning solutions",
  "Sustainable home care",
  "Green cleaning expertise",
  "Natural cleaning products",
  "Professional & Reliable",
  "100% Satisfaction Guaranteed"
];

function App() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rollingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Leaf className="h-8 w-8 text-green-600 animate-pulse" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full" />
              </div>
              <span className="text-2xl font-semibold text-gray-800">Masterpropre</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 bg-green-100 rounded-full text-green-600 text-sm font-medium mb-4 animate-pulse">
                Eco-Friendly & Sustainable
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Transform Your Space<br />
                <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Naturally Clean</span>
              </h1>
              <div className="h-8 overflow-hidden">
                <p className="text-green-600 text-xl transition-transform duration-500">
                  {rollingTexts[currentTextIndex]}
                </p>
              </div>
              <p className="text-gray-600 text-lg max-w-xl">
                Experience the perfect blend of professional cleaning and environmental responsibility. 
                Our eco-friendly solutions ensure your space sparkles while protecting our planet.
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 duration-200 shadow-lg hover:shadow-green-200">
                  Book Now
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-all hover:shadow-lg">
                  Learn More
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="text-center transform hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">Eco-Friendly</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-green-600">5★</div>
                  <div className="text-gray-600">Rating</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-200 rounded-full opacity-50 animate-pulse delay-150"></div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
                alt="Eco-friendly cleaning"
                className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Masterpropre</h2>
            <p className="text-gray-600 text-lg">
              Leading the way in sustainable cleaning solutions since 2015. Our commitment to the environment 
              drives every aspect of our service, from the products we choose to the methods we employ.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-green-100 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800"
                alt="Our mission"
                className="rounded-2xl shadow-xl relative z-10"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To provide exceptional eco-friendly cleaning services while promoting environmental sustainability.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Masterpropre?</h3>
              <p className="text-gray-600">
                At Masterpropre, we believe in providing exceptional cleaning services while protecting our environment. 
                Our commitment to sustainability drives everything we do, from the eco-friendly products we use to our 
                water-conscious cleaning methods.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-700">Satisfaction Rate</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="text-green-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-700">100% Eco-friendly cleaning products</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Droplets className="text-green-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-700">Water-saving techniques</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Award className="text-green-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-700">Certified green cleaning professionals</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Users className="text-green-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-700">Customized cleaning plans</span>
                </div>
              </div>
              <div className="mt-8 space-y-6">
                <h4 className="text-xl font-semibold text-gray-800">Our Values</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-semibold text-green-600 mb-2">Sustainability</h5>
                    <p className="text-gray-600 text-sm">Committed to eco-friendly practices and products</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-semibold text-green-600 mb-2">Excellence</h5>
                    <p className="text-gray-600 text-sm">Delivering outstanding results every time</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-semibold text-green-600 mb-2">Innovation</h5>
                    <p className="text-gray-600 text-sm">Using latest eco-friendly technologies</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-semibold text-green-600 mb-2">Integrity</h5>
                    <p className="text-gray-600 text-sm">Honest, transparent service delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive eco-friendly cleaning solutions tailored to your needs. We combine cutting-edge 
              green technology with traditional cleaning expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Residential Cleaning</h3>
              <p className="text-gray-600">
                Comprehensive home cleaning services using eco-friendly products and methods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Cleaning</h3>
              <p className="text-gray-600">
                Professional cleaning solutions for offices and commercial spaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Sofa className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Furniture Cleaning</h3>
              <p className="text-gray-600">
                Gentle yet effective furniture cleaning that extends the life of your belongings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Car className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vehicle Cleaning</h3>
              <p className="text-gray-600">
                Eco-friendly car cleaning and detailing services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Warehouse className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industrial Cleaning</h3>
              <p className="text-gray-600">
                Heavy-duty cleaning solutions for industrial facilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Deep Cleaning</h3>
              <p className="text-gray-600">
                Thorough deep cleaning services for a complete refresh.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Droplets className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Window Cleaning</h3>
              <p className="text-gray-600">
                Professional window cleaning for crystal clear views.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Green Consulting</h3>
              <p className="text-gray-600">
                Expert advice on maintaining an eco-friendly environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
            <p className="text-gray-600 text-lg">
              We combine professional expertise with environmental responsibility to deliver 
              outstanding results that you and our planet will love.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Excellence</h3>
              <p className="text-gray-600">
                Our team of certified professionals ensures the highest quality of service.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly Products</h3>
              <p className="text-gray-600">
                We use only environmentally safe and biodegradable cleaning solutions.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Timely Service</h3>
              <p className="text-gray-600">
                Punctual and efficient service delivery every time.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority, backed by our 100% guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-12 bg-gradient-to-br from-green-600 to-green-700">
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-green-100 mb-8">
                    Ready to experience the difference of eco-friendly cleaning? Contact us today 
                    for a free consultation and quote.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-500/50 p-3 rounded-full">
                        <Phone className="text-white h-6 w-6" />
                      </div>
                      <span className="text-white">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-500/50 p-3 rounded-full">
                        <Mail className="text-white h-6 w-6" />
                      </div>
                      <span className="text-white">contact@masterpropre.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-500/50 p-3 rounded-full">
                        <MapPin className="text-white h-6 w-6" />
                      </div>
                      <span className="text-white">123 Eco Street, Green City, 12345</span>
                    </div>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-green-500/50 p-3 rounded-full hover:bg-green-400 transition-colors">
                        <Instagram className="h-5 w-5 text-white" />
                      </a>
                      <a href="#" className="bg-green-500/50 p-3 rounded-full hover:bg-green-400 transition-colors">
                        <Facebook className="h-5 w-5 text-white" />
                      </a>
                      <a href="#" className="bg-green-500/50 p-3 rounded-full hover:bg-green-400 transition-colors">
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-12">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Service Needed</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                        <option>Select a service</option>
                        <option>Residential Cleaning</option>
                        <option>Commercial Cleaning</option>
                        <option>Furniture Cleaning</option>
                        <option>Vehicle Cleaning</option>
                        <option>Industrial Cleaning</option>
                        <option>Deep Cleaning</option>
                        <option>Window Cleaning</option>
                        <option>Green Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="Tell us about your cleaning needs..."
                      ></textarea>
                    </div>
                    <button className="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 duration-200 shadow-lg">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-semibold">Masterpropre</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leading the way in eco-friendly cleaning solutions for a sustainable future.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Residential Cleaning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Cleaning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Furniture Cleaning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Green Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for tips on green living and exclusive offers.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent text-white"
                />
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all hover:scale-105">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Masterpropre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;