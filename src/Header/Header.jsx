import logo from '../assets/logo.svg'; // Adjust the path to your logo

const Header = () => {
  return (
    <header
      className="shadow-md"
      style={{
        background: `linear-gradient(
          to right,
          rgba(251, 245, 229, 0.5) 0%,
          rgba(252, 205, 166, 0.64) 13%,
          rgba(255, 102, 0, 1) 46%
        )`,
        height: '5rem', // Set header height to match logo height (h-20 = 5rem)
      }}
    >
      <div className="px-2 py-1.5 flex justify-between items-center h-full"> {/* Ensure full height */}
        {/* Logo and Brand Name */}
        <div className="flex items-center h-full"> {/* Ensure full height */}
          <img src={logo} alt="Risk Guard Logo" className="h-20" /> {/* Logo height is h-20 (5rem) */}
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="#" className="text-lg text-white hover:text-gray-200 font-semibold">
            Home
          </a>
          <a href="#" className="text-lg text-white hover:text-gray-200 font-semibold">
            Services
          </a>
          <a href="#" className="text-lg text-white hover:text-gray-200 font-semibold">
            About Us
          </a>
          <a href="#" className="text-lg text-white hover:text-gray-200 font-semibold">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;