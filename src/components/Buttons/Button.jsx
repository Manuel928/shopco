const Button = ({ backgroundColor = "", textcolor = "", text, border="" }) => {
  const bgColor = {
    black: "bg-black",
    white: "bg-white",
  };

  const buttonTextColor = {
    black: "text-black",
    white: "text-white",
  };

  const borderColor = {
    black: "border border-black",
    softGray: "border border-[#0000001A]"

  }

  const bgClass = bgColor[backgroundColor] || bgColor.black;
  const buttonColorClass = buttonTextColor[textcolor] || buttonTextColor.white;
  const borderClass = borderColor[border] || borderColor.black
  return (
    <button
      className={`${bgClass} ${buttonColorClass} ${borderClass} font-satoshi cursor-pointer text-center h-[52px] w-full lg:w-[210px] rounded-[62px]`}
    >
      {text}
    </button>
  );
};

export default Button;
