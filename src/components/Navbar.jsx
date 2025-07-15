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
    <div className="mx-auto overflow-hidden max-w-[1240px] px-[16px] lg:py-[24px] lg:px-[100px]">
      <div className="nav-container">
        <div className="flex items-center gap-[16px] lg:gap-0">
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

        {/* Nav */}
        <nav className="hidden md:block">
          <ul className="nav-links">
            <li className="flex items-center gap-[4px]">
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

        {/* <div className="md:hidden flex items-center gap-[12px]">
          <SearchIcon className="w-8 h-8" />
          <ShoppingCartIcon className="w-8 h-8" />
          <CircleUserRoundIcon className="w-8 h-8" />
        </div> */}

        {/* Search */}
        <div className="search-box">
          <SearchIcon className="text-[#00000066] w-5 h-5 ml-4" />
          <input
            className="search-input"
            placeholder="Search for products..."
          />
        </div>
        <div className="flex items-center gap-4">
          <SearchIcon className="md:hidden w-7 h-7 lg:w-8 lg:h-8" />
          <ShoppingCartIcon className="w-7 h-7 lg:w-8 lg:h-8" />
          <CircleUserRoundIcon className="w-7 h-7 lg:w-8 lg:h-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
