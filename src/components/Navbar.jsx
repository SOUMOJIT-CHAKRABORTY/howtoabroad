import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-bold">
            Home
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/search" className="hover:text-gray-300">
            Search Course
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link to="/portal" className="hover:text-gray-300">
            Portal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
