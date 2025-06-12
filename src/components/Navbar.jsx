import { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="w-full bg-white shadow px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-900">Furniture</div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#service" className="hover:text-blue-600">
            Services
          </a>
          <a href="#products" className="hover:text-blue-600">
            Products
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Right Side: Search + Icons */}
        <div className="flex items-center gap-4">
          {/* Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search className="w-5 h-5 " />
          </Button>

          {/* User Icon */}
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>

          {/* Cart Icon */}
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Search Input (conditionally visible) */}
      {showSearch && (
        <div className="max-w-7xl mx-auto mt-3 flex px-2m">
          <Input
            type="text"
            placeholder="Search products..."
            className="w-full"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
