import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import {
  MenuIcon,
  ChevronDown,
  SearchIcon,
  ShoppingCartIcon,
  CircleUserRoundIcon,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto max-w-[1440px] px-[16px] lg:px-[100px]">
      <div className="nav-container">
        {/* Menu + Logo */}
        <div className="col-span-2 flex items-center space-x-[16px] lg:space-x-0">
          <MenuIcon
            className="w-8 h-8 pt-[6px] cursor-pointer md:hidden"
            onClick={() => setIsOpen(true)}
          />
          <Link
            to="/"
            className="font-IntegralCF font-bold text-[25.2px] lg:text-[28px]"
          >
            SHOP.CO
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="col-span-4 hidden md:block">
          <ul className="nav-links">
            <li className="flex group group-hover:cursor-pointer items-center gap-[4px]">
              <Link to="/shop">Shop</Link>
              <ChevronDown />
            </li>
            <li>
              <Link to="/on-sale">On Sale</Link>
            </li>
            <li>
              <Link to="/new-arrivals">New Arrivals</Link>
            </li>
            <li>
              <Link to="/brands">Brands</Link>
            </li>
          </ul>
        </nav>

        {/* Search Box */}
        <div className="col-span-5 hidden md:flex items-center bg-[#F0F0F0] rounded-[62px]">
          <SearchIcon className="text-[#00000066] w-5 h-5 ml-4" />
          <input
            className="bg-transparent h-[48px] px-2 focus:outline-none text-sm w-full"
            placeholder="Search for products..."
          />
        </div>

        {/* Icons */}
        <div className="col-span-1 flex items-center justify-end gap-4">
          <SearchIcon className="md:hidden w-7 h-7" />
          <ShoppingCartIcon className="w-7 h-7 cursor-pointer" />
          <CircleUserRoundIcon className="w-7 h-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
