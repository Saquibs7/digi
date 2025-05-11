import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="bg-[#2B63D9] text-white shadow-md border-b border-[#648ef7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[86px]">
          
          {/* Left side: Logo + Nav links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <a href="/" className="flex items-center mr-30">
              <img 
                src="/company-logo-2.svg" 
                alt="Company Logo" 
                className="w-[150px] h-[28px]"
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-blue-200">Home</a>
              <a href="/our-products" className="hover:text-blue-200">Our Products</a>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="flex items-center space-x-1 hover:text-blue-200"
                >
                  <span>Resources</span>
                  <ChevronDown size={16} />
                </button>
                {resourcesOpen && (
                  <div className="absolute bg-white text-black mt-2 rounded shadow-lg w-40 z-50">
                    <a href="/resources/blogs" className="block px-4 py-2 hover:bg-gray-100">Blogs</a>
                    <a href="/resources/case-studies" className="block px-4 py-2 hover:bg-gray-100">Case Studies</a>
                    <a href="/resources/ebooks" className="block px-4 py-2 hover:bg-gray-100">Ebooks</a>
                  </div>
                )}
              </div>

              <a href="/contacts" className="hover:text-blue-200">Contacts</a>
            </div>
          </div>

          {/* Right side: Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="/login" className="px-4 py-2 rounded text-sm font-semibold">Login</a>
            <a href="/register" className="bg-[#437EF7] px-4 py-2 rounded hover:brightness-95 text-sm font-semibold">Signup</a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden flex flex-col gap-2 py-4 text-white">
            <a href="/" className="block px-3 py-2 hover:bg-blue-500 rounded">Home</a>
            <a href="/our-products" className="block px-3 py-2 hover:bg-blue-500 rounded">Our Products</a>

            {/* Mobile dropdown */}
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex justify-between items-center px-3 py-2 hover:bg-blue-500 rounded"
            >
              <span>Resources</span>
              <ChevronDown size={16} />
            </button>
            {resourcesOpen && (
              <div className="pl-4">
                <a href="/resources/blogs" className="block px-3 py-2 hover:bg-blue-600 rounded">Blogs</a>
                <a href="/resources/case-studies" className="block px-3 py-2 hover:bg-blue-600 rounded">Case Studies</a>
                <a href="/resources/ebooks" className="block px-3 py-2 hover:bg-blue-600 rounded">Ebooks</a>
              </div>
            )}

            <a href="/contacts" className="block px-3 py-2 hover:bg-blue-500 rounded">Contacts</a>
            <a href="/login" className="block px-3 py-2 bg-white text-[#2B63D9] rounded">Login</a>
            <a href="/register" className="block px-3 py-2 bg-white text-[#2B63D9] rounded">Signup</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;