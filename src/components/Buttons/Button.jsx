const Button = ({
  backgroundColor = "black",
  textcolor = "white",
  text,
  border = "black",
  hoverBg = "black",
  width = "w-full lg:w-[210px]", // Tailwind classes
  height = "h-[52px]", // Tailwind class
  align = "self-start",
  additionalClasses = "",
}) => {
  const bgColor = {
    black: "bg-black",
    white: "bg-white",
    gray: "bg-[#F0F0F0]",
  };

  const textColor = {
    black: "text-black",
    white: "text-white",
    gray: "text-[#00000099]",
  };

  const hover = {
    black: "hover:bg-black hover:text-white",
    white: "hover:bg-white hover:text-black",
    gray: "hover:bg-[#e4e4e4]",
  };

  const borderColor = {
    black: "border border-black",
    softGray: "border border-[#0000001A]",
    none: "border-none",
  };

  const bgClass = bgColor[backgroundColor] || "";
  const textClass = textColor[textcolor] || "";
  const borderClass = borderColor[border] || "";
  const hoverClass = hover[hoverBg] || "";

  return (
    <button
      className={`
        ${bgClass} 
        ${textClass} 
        ${borderClass} 
        ${hoverClass} 
        ${width} 
        ${height} 
        ${align}
        ${additionalClasses} 
        font-satoshi 
        cursor-pointer 
        text-center
        transition 
        duration-300 
        rounded-[62px]
      `}
    >
      {text}
    </button>
  );
};

export default Button;
