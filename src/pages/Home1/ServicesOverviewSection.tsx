import { Suspense } from "react";
import { Button, Heading, Text } from "../../components";
import LegalAdviceCard from "../../components/LegalAdviceCard";

const legalAdviceList = [
	{
		imageSrc: "images/img_image_6.png",
		title: "Criminal Defense",
		description: "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et"
	},
	{
		imageSrc: "images/img_image_6.png",
		title: "Criminal Defense",
		description: "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et"
	}
];

export default function ServicesOverviewSection() {
	return (
		<>
			<div>
				<div className="flex flex-col items-center justify-center bg-white-a700 py-[140px] lg:py-8 md:py-5 sm:py-4">
					<div className="container-xs flex flex-col gap-[98px] lg:gap-[98px] 1g:px-5 md:gap-[73px] md:px-5 sm:gap-[49px]">
						<div className="flex items-center justify-center md:flex-col">
							<div className="flex flex-1 flex-col items-start gap-[22px] md:self-stretch">
								<Heading
									size="heading3xl"
									as="h5"
									className="!font-playfairdisplay text-[50px] font-bold 1lg:text-[42px] md:text-[34px] sm:text-[28px]"
								>
									Our Range of Services
								</Heading>
								<Text as="p" className="text-[16px] font-normal !text-dark_gray-0 lg:text-[13px]">
									Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien.
									Interdum et{" "}
								</Text>
							</div>
							<Button shape="round" className="min-w-[178px] self-end rounded-[32px] px-[34px] font-bold sm:px-4">
								All Services
							</Button>
						</div>
						<div className="ml-[222px] flex gap-16 md:ml-0 md: flex-col">
							<Suspense fallback={<div>Loading feed...</div>}>
								{legalAdviceList.map((d, index) => (
									<LegalAdviceCard {...d} key={"listgenerallega" + index} />
								))}
							</Suspense>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}