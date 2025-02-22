import { Text, Img } from "./..";
import React from "react";
interface Props {
    className?: string;
    generalLegalText?: React.ReactNode;
    contractReviewText?: React.ReactNode;
}
export default function LegalAdviceSection({
    generalLegalText = "General Legal Advice",
    contractReviewText = "Contract Review and Drafting",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex sm:flex-col justify-center items-center self-stretch flex-1`}>
            <div className="flex items-start gap-3.5 self-end">
                <Img src="images/img_signal.svg" alt="Image" className="h-[12px]" />
                <Text as="p" className="self-center text-[16px] font-normal !text-white-a70@ sm:text-[13px]">
                    {generalLegalText}
                </Text>
            </div>
            <div className="flex flex-1 items-start justify-end gap-3.5 self-end px-8 sm:self-stretch sm:px-5">
                <Img src="images/img_signal.svg" alt="Image" className="h-[12px]" />
                <Text as="p" className="self-center text-[16px] font-normal !text-white-a70@ sm:text-[13px]">
                    {contractReviewText}
                </Text>
            </div>
        </div>
    );
}
