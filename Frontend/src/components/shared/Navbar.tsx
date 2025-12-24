import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-transparent">
      <div className="px-6 md:px-20 flex items-center justify-between h-20">
        <div className="text-white text-2xl font-extrabold">SpeedDetect</div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link to ="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <Link to="/login" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-lg transition-all duration-300">
            Get Started
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md w-full px-6 py-4 flex flex-col space-y-4 text-white font-medium">
          <Link to="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <Link to="/login" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-lg transition-all duration-300">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
