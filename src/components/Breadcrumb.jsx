import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <nav className="text-[#00000099] font-satoshi text-[14px] lg:text-[16px] gap-[2.5px]">
      <Link to={"/"}>Home </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const label = value.charAt(0).toUpperCase() + value.slice(1);
        return (
          <span key={to}>
            {"> "} <Link to={to}>{label + " "}</Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
