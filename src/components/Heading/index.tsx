import React from "react";
const sizes = {
    headingxs: "text-[16px] font-semibold 1lg:text-[13px]",
    headings: "text-[18px] font-bold lg:text-[15px]",
    headingmd: "text-[19px] font-bold lg:text-[16px]",
    headinglg: "text-[25px] font-bold lg:text-[21px] md:text-[23px] sm:text-[21px]",
    headingxl: "text-[30px] font-bold lg:text-[25px] md:text-[28px] sm:text-[26px]",
    heading2xl: "text-[40px] font-bold 1lg:text-[34px] md:text-[38px] sm:text-[36px]",
    heading3xl: "text-[50px] font-bold 1lg:text-[42px] md:text-[46px] sm:text-[40px]",
    heading4x1l: "text-[70px] font-bold lg:text-[70px] md:text-[48px]",
};
export type HeadingProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = "",
    size = "headingxs",
    as,
    ...restProps
}) => {
    const Component = as || "h6";
    return (
        <Component className={
            ` text-gray-900 font-inter ${className} ${sizes[size] as keyof typeof sizes}`} {...restProps}>
            {children}
        </Component >
    );
};
export { Heading };
