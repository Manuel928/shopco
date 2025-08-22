import { createPortal } from "react-dom";

export default function SearchDropdownPortal({ anchorRef, open, children }) {
  if (!open || !anchorRef?.current) return null;

  const rect = anchorRef.current.getBoundingClientRect();
  const style = {
    position: "fixed",
    top: rect.bottom + 8,
    left: rect.left,
    width: rect.width,
    zIndex: 9999,
  };

  return createPortal(<div style={style}>{children}</div>, document.body);
}
