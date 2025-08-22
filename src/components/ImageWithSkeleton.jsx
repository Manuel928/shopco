import { useState } from "react";
import Skeleton from "./Skeleton";
import { useLoading } from "./context/LoadingSpinnerContext";

export default function ImageWithSkeleton({
  src,
  alt,
  className,
  onClick,
  key,
}) {
  const { isLoading, setIsLoading } = useLoading();

  return (
    <div className={`relative ${className}`}>
      {/* Skeleton placeholder */}
      {isLoading && <Skeleton className="absolute inset-0 w-full h-full" />}

      {/* Image */}
      <img
        key={key}
        src={src}
        alt={alt}
        onClick={onClick}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        className={`${className} ${!isLoading ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
