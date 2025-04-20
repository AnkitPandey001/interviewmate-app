

export const Footers = () =>{
    return (
        <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo and App Name */}
            <div>
              <h2 className="text-3xl font-bold mb-4">InterviewMate</h2>
              <p className="text-gray-400">
                Let AI Spark Your Success! Instant mock interviews tailored for you.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/generat" className="hover:text-blue-400">
                    Start Interview
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: ankitpandey62042@gmail.com </p>
              <p className="text-gray-400">Phone: +91 6204265733</p>
            </div>
  
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <i className="fab fa-facebook"></i> {/* Font Awesome Icon */}
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <i className="fab fa-twitter"></i> {/* Font Awesome Icon */}
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <i className="fab fa-linkedin"></i> {/* Font Awesome Icon */}
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="text-center mt-8 border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 AI Interviews. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}