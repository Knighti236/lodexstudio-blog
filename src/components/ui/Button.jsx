import React from "react";

function Button({
  children,
  variant = "primary",
  fullWidth = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150";

  const width = fullWidth ? "w-full" : "";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-500",
  };
  return (
    <button className={`${base} ${variants[variant]} ${width}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
