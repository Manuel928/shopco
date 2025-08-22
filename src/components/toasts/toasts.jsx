import { CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

export const addedToCartToast = () =>
  toast("Added to cart.", {
    style: {
      background: "white",
      border: "1px solid black",
      padding: "10px",
      color: "black",
      fontFamily: "Satoshi",
    },
    icon: <CheckCircle />,
    iconTheme: {
      primary: "black",
      secondary: "white",
    },
  });



export const alreadyInCartToast = () =>
  toast("Item already in cart.", {
    style: {
      background: "white",
      border: "1px solid black",
      padding: "10px",
      color: "black",
      fontFamily: "Satoshi",
    },
    icon: <CheckCircle />,
    iconTheme: {
      primary: "black",
      secondary: "white",
    },
  });