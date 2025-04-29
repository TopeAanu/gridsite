import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "light" | "dark";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button = ({
  children,
  variant = "dark",
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-block border-none rounded px-6 py-2 hover:opacity-80 transition-opacity duration-300";

  const variantClasses = {
    primary: "bg-teal-600 text-white",
    secondary: "bg-fuchsia-500 text-white",
    light: "bg-gray-200 text-black",
    dark: "bg-black text-white",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
