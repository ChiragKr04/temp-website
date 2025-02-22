import { Button, Text, Heading, Img } from "../../components";
export default function ContactInformationSection() {
	return (
		<>
			{/* contact information section */}
			<div className="mb-[282px] flex justify-center">
				<div className="container-xs flex items-start justify-center px-14 1lg:px-5 md:flex-col md:px-5">
					<div className="relative h-[380px] w-[40%] self-center md:w-full">
						<div className="absolute bottom-0 left-[17px] top-0 my-auto h-[362px] w-[68%] rounded-bl-[156px] rounded-br-[156px] border border-solid border-lime-800" />
						<div className="absolute left-0 top-0 m-auto flex w-[66%] items-center justify-center gap-[22px] bg-white-a700 p-5">
							<Img
								src="images/img_image_6.png"
								alt="Imagesix"
								className="h-[74px] w-[30%] rounded-[36px] object-contain"
							/>
							<div className="flex flex-1 flex-col items-start justify-center">
								<Heading
									size="headingmd"
									as="h6"
									className="!font-playfairdisplay text-[19px] font-bold 1g:text-[16px]"
								>
									Josh Meyer
								</Heading>
								<Text size="textxs" as="p" className="text-[14px] font-normal !text-dark_gray-0">
									Legal Expert
								</Text>
							</div>
						</div>
					</div>
					<div className="absolute bottom-6 left-@ m-auto flex w-[66%] flex-col items-center justify-center gap-[22px] rounded-bl-[120px] rounded-br-[120px] bg-blue_gray-900_01 px-14 py-[62px] 1g:py-8 md:p-5 sm:p-4">
						<div className="flex w-[78%] items-start justify-center gap-3 lg:w-full md:w-full">
							<Img src="images/img_frame_orange_300_24x24.svg" alt="Image" className="h-[24px]" />
							<div className="flex flex-1 flex-col items-start justify-center gap-0.5 self-center">
								<Text size="textxs" as="p" className="text-[14px] font-normal">
									Call us
								</Text>
								<Heading
									as="h6"
									className="!font-playfairdisplay text-[16px] font-bold !text-white-a700 1g:text-[13px]"
								>
									+1 2923 2393 298
								</Heading>
							</div>
						</div>
					</div>
					<div className="flex w-[84%] items-start justify-center gap-3 lg:w-full md:w-full">
						<Img src="images/img_frame_24x24.svg" alt="Image Ten" className="h-[24px]" />
						<div className="flex flex-1 flex-col items-start justify-center self-center">
							<Text size="textxs" as="p" className="mt-1 text-[14px] font-normal">
								Write a message
							</Text>
							<Heading
								as="h6"
								className="!font-playfairdisplay text-[16px] font-bold !text-white-a700 1g:text-[13px]"
							>
								law@domain. com
							</Heading>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-16 flex flex-1 flex-col items-start gap-9 md:self-stretch">
				<div className="flex flex-col items-start justify-center gap-2 self-stretch">
					<Heading
						size="heading2xl"
						as="h1"
						className="!font-playfairdisplay text-[40px] font-bold 1g:text-[34px] md:text-[34px] sm:text-[32px]"
					>
						Speak with an Attorney Today
					</Heading>
					<Text as="p" className="w-full text-[16px] font-normal leading-[26px] !text-dark_gray-0 1g:text-[13px]">
						Ut quis molestie ipsum, non imperdiet nisi. Praesent sollicitudin, enim vel laoreet congue, enim lorem
						ullamcorper risus, sed vestibulum ante
					</Text>
				</div>
				<Button shape="round" className="min-w-[200px] rounded-[32px] px-[34px] font-bold sm:px-4">
					Schedule a Meet
				</Button>
			</div>
		</>
	);
}

