import React from "react";
const sizes = {
    textxs: "text-[14px] font-normal",
    texts: "text-[15px] font-normal",
    textmd: "text-[16px] font-normal 1lg:text-[13px]",
    textlg: "text-[18px] font-normal 1g:text-[15px]",
    textxl: "text-[20px] font-normal 1lg:text-[17px]",
}
export type TextProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = "",
    as,
    size = "textmd",
    ...restProps
}) => {
    const Component = as || "p";
    return (
        <Component
            className={
                "text-white-a700_7f font-inter ${className} ${sizes[size as keyof typeof sizesl} "}
            {...restProps}
        >
            {children}
        </Component >
    );
}
export { Text };
