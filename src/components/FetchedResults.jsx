import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const FetchedResults = ({ result, onClose }) => {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
  return (
    <div
      ref={ref}
      className="p-4 bg-softGray font-satoshi absolute top-0 rounded-[20px] overflow-y-auto backdrop-blur-3xl max-h-[300px]"
    >
      {result && result.length > 0 ? (
        <div className="flex flex-col gap-2">
          {result.map((p) => (
            <Link
              to={`/shop/${p.id}`}
              key={p.id}
              className="hover:underline hover:text-black transition"
            >
              {p.title}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No Products Found!</p>
      )}
    </div>
  );
};

export default FetchedResults;
