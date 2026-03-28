import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold">
          ⚡ SK Green Energy
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center">
          <a href="/" className="block hover:text-yellow-300">Home</a>
          <a href="#services" className="block hover:text-yellow-300">Services</a>
          <a href="#contact" className="block hover:text-yellow-300">Contact</a>
        </div>
      )}
      
    </nav>
  );
}

export default Navbar;