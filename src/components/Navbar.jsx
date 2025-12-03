import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); 
  const hideNavbarPaths = ["/", "/login", "/register"];
  if (hideNavbarPaths.includes(location.pathname)) {
    return null;
  }
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to="/home"
            className="text-2xl font-bold text-blue-600 flex items-center gap-2"
          >
            Montir<span className="text-gray-800">AI</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/home"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Pelayanan
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
