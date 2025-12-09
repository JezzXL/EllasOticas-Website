import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

const variantClasses = {
  primary:
    "bg-black text-white hover:bg-gray-800 active:bg-gray-900 transition-colors",
  secondary:
    "bg-white text-black border-2 border-black hover:bg-gray-50 active:bg-gray-100 transition-colors",
  outline:
    "bg-transparent text-black border border-gray-300 hover:border-black hover:bg-gray-50 transition-all",
  ghost:
    "bg-transparent text-black hover:bg-gray-100 active:bg-gray-200 transition-colors",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm font-medium",
  md: "px-6 py-3 text-base font-medium",
  lg: "px-8 py-4 text-lg font-semibold",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-full font-sans transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-current",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;