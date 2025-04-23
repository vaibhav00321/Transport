import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">SwiftPost</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">About</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;