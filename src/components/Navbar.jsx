import { useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  MenuIcon,
  ChevronDown,
  SearchIcon,
  ShoppingCartIcon,
  CircleUserRoundIcon,
  XIcon,
} from "lucide-react";
import { useCartData } from "./context/CartContext";
import { useFetchAllProducts } from "./context/FetchAllProducts";
import FetchedResults from "./FetchedResults";
import SearchDropdownPortal from "./SearchDropdownPortal";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoading, allProducts } = useFetchAllProducts();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [result, setResult] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const { cartRef, isCartVisible, cartItemsCount } = useCartData();
  const searchWrapRef = useRef(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search.trim().toLowerCase());
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    if (!debouncedSearch) {
      setResult(null);
      return;
    }

    const match = allProducts?.filter((p) =>
      p.title.toLowerCase().includes(debouncedSearch)
    );
    setResult(match);
  }, [debouncedSearch, allProducts]);
  return (
    <>
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
                <Link to="/shop/on-sale">On Sale</Link>
              </li>
              <li>
                <a href="/#newArrivals">New Arrivals</a>
              </li>
              <li>
                <Link to="/shop/brands">Brands</Link>
              </li>
            </ul>
          </nav>

          {/* Search Box + Results */}
          <div
            ref={searchWrapRef}
            className="col-span-5 hidden md:flex items-center bg-[#F0F0F0] rounded-[62px] relative"
          >
            <SearchIcon className="text-[#00000066] w-5 h-5 ml-4" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent h-[48px] placeholder:font-satoshi px-2 focus:outline-none text-sm w-full"
              placeholder="Search for products..."
            />

            {/* Results dropdown */}
            {result && (
              <SearchDropdownPortal anchorRef={searchWrapRef} open={!!result}>
                <FetchedResults
                  result={result}
                  onClose={() => setResult(null)}
                />
              </SearchDropdownPortal>
            )}
          </div>

          {/* Icons */}
          <div className="col-span-1 relative flex items-center justify-end gap-4">
            <SearchIcon className="md:hidden w-7 h-7" />

            <ShoppingCartIcon
              onClick={() => {
                isCartVisible.current = true;
                cartRef.current.style.right = "0";
              }}
              className="w-7 h-7 cursor-pointer"
            />
            <div className=" p-2 h-[30px] rounded-[20px] flex items-center justify-center absolute top-4 right-12">
              <span className="font-bold text-[14px] font-satoshi">
                {cartItemsCount}
              </span>
            </div>

            <CircleUserRoundIcon className="w-7 h-7 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile view of Navigation */}
      {isOpen && (
        <>
          {/* Optional: semi-transparent background */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div
            ref={navRef}
            className="fixed left-0 bottom-0 w-3/4 h-full bg-white px-[19px] shadow-2xl border flex flex-col z-50"
          >
            <div className="flex items-center justify-end py-4">
              <XIcon
                className="cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  scrollTo(0, 0);
                }}
              />
            </div>
            {/* Insert your nav items here */}

            <ul className="space-y-[16px]">
              <li className="flex group group-hover:cursor-pointer items-center gap-[4px]">
                <Link
                  onClick={() => {
                    setIsOpen(false);
                    scrollTo(0, 0);
                  }}
                  to="/shop"
                >
                  Shop
                </Link>

                <ChevronDown />
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                    scrollTo(0, 0);
                  }}
                  to="/shop/on-sale"
                >
                  On Sale
                </Link>
              </li>
              <li
                onClick={() => {
                  setIsOpen(false);
                  scrollTo(0, 0);
                }}
              >
                <a href="/#newArrivals">New Arrivals</a>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                    scrollTo(0, 0);
                  }}
                  to="/shop/brands"
                >
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
