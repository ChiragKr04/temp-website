import { Text, Heading, Img } from "./..";
import React from "react";
interface Props {
    className?: string;
    imageSrc?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
}
export default function LegalAdviceCard({
    imageSrc = "images/img_frame.svg",
    title = "General Legal Advice",
    description = "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et ",
    ...props
}: Props) {
    return (
        <div {...props} className={" ${props.className} flex flex-col items-start w-[32%] md:w-full gap-5"}>
            <Img src={imageSrc} alt="Image" className="h-[72px] w-[22%] object-contain" />
            <Heading size="headings" as="h6" className="!font-playfairdisplay text-[18px] font-bold">
                {title}
            </Heading>
            <Text as="p" className="mb-1 w-full text-[16px] font-normal leading-[26px] !text-dark_gray-1">
                {description}
            </Text>
        </div>
    );
}
