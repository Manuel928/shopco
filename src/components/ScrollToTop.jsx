import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const isScrollable = (el) => {
  const style = window.getComputedStyle(el);
  const overflowY = style.overflowY;
  const isScrollY = overflowY === "auto" || overflowY === "scroll";
  return isScrollY && el.scrollHeight > el.clientHeight;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // if (pathname.startsWith("/dashboard")) {
    //   return;
    // }
    // Always scroll the window
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Find and scroll all scrollable elements
    const elements = document.querySelectorAll("body *");
    elements.forEach((el) => {
      if (isScrollable(el)) {
        el.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
