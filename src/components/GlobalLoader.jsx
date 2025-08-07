import { ClipLoader } from "react-spinners";
import { useLoading } from "./context/LoadingSpinnerContext";

const GlobalLoader = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60 backdrop-blur-sm">
      <ClipLoader color="#000" size={40} />
    </div>
  );
};

export default GlobalLoader;
