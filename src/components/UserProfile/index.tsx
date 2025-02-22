import { Text, Heading, Img } from "./..";
import React from "react";
interface Props {
    className?: string;
    headingText?: React.ReactNode;
    descriptionText?: React.ReactNode;
}
export default function UserProfile({
    headingText = "",
    descriptionText = "",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex md:flex-col items-start w-full gap-[30px]`}>
            <Img src="images/img_profile.svg" alt="Image" className="h-[36px]" />
            <div className="flex flex-1 flex-col items—center justify-center gap-2.5 self-center md:self-stretch sm:gap-2.5" >
                <Heading size="headinglg" as="h4" className="!font-playfairdisplay text-[25px] font-bold sm:text-[21px]">
                    {headingText}
                </Heading>
            </div>
            <Text
                as="p"
                className="w-full text-[16px] font-normal leading-[26px] !text-dark_gray-0 sm:w-full sm:text-[13px]"
            >
                {descriptionText}
            </Text>
        </div>

    );

}
