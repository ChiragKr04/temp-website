import React from "react";
const shapes = {
  square: "rounded-[@px]",
  circle: "rounded-(50%]",
  round: "rounded- [32px]",
} as const;
const variants = {
  outline: {
    white_A700_dc: "border-white-a700_dc border border-solid text-white-a700",
    white_A700_19: "border-white-a700_19 border border-solid",
  },
  fill: {
    orange_300: "bg-orange-300 text-gray-900",
    gray_900: "bg-gray-900 text-white-a700",

  }
}
const sizes = {
  g: "h-[50px] px-2.5",
  md: "h-[50px] px-[22px] text-[16px]",
  xs: "h-[24px]",
  sm: "h-[40px] px-3",
  x1: "h-[64px] px-[34px] text-[16px]",
} as const;
type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "x1",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  )
}
export { Button };
