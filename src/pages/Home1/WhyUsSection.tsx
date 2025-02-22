import { Heading, Button, Text, Img } from "../../components";
export default function WhyUsSection() {
	return (
		<>
			<div className="relative h-[880px] px-[142px] 1g:px-8 md:px-5 sm:px-4">
				<Img
					src="1images/img_mask_group.png"
					alt="Image"
					className="absolute bottom-0 left-[13%] top-@ my-auto h-[880px] w-[52%] object-contain"
				/>
				<div className="absolute bottom-@ left-@ right-@ top-@ m-auto flex h-max flex-1 items-start md:relative md:flex-col">
					<div className="flex w-[22%] justify-center rounded-[30px] bg-orange-300 p-3 shadow-xs md:w-full">
						<Heading
							size="headingxl"
							as="h6"
							className="w-[76%] text-[30px] font-bold leading-[142.2%] 1g:text-[25px] md:text-[24px] sm:text-[22px]"
						>
							<span className="text-[60px]">
								<>
									99% <br />
								</>
							</span>
							<span className="font-medium">Rate of success</span>
						</Heading>
					</div>
					<div className="mt-20 flex flex-1 items-start justify-end gap-[33px] self-end pl-14 pr-[78px] 1g:pr-8 md:flex-col md:self-stretch md:px-5 sm:px-4">
						<div className="flex w-[30%] justify-center self-end rounded-[30px] bg-blue_gray-900_01 p-3 shadow-xs md:w-full">
							<Heading
								size="headingxl"
								as="h3"
								className="w-[72%] text-[30px] font-bold leading-[142.2%] !text-white-a700 1g:text-[25px] md:text-[24px] sm:text-[22px]"
							>
								<span className="text-[60px]">15&nbsp;</span>
								<span className=" font-medium">
									<>
										Years <br />
										of experience
									</>
								</span>
							</Heading>
						</div>
						<div className="mb-[390px] flex w-[54%] flex-col gap-[52px] md:mb-@ md:w-full sm:gap-[26px]">
							<div className="flex flex-col items-start gap-[22px]">
								<Heading
									size="heading3xl"
									as="h1"
									className="!font-playfairdisplay text-[50px] font-bold 1lg:text-[42px] md:text-[34px] sm:text-[28px]"
								>
									Why Us
								</Heading>
								<Text as="p" className="w-full text-[16px] font-normal leading-7 !text-dark_gray-@ lg:text-[13px]">
									Mauris dictum massa non consectetur volutpat. Sed id accumsan risus, eget sagittis lectus. Donec ut
									est mauris. Etiam et libero tellus. Suspendisse ac dictum massa, ac viverra lorem.
								</Text>
								<div className="flex flex-col gap-[22px] self-stretch">
									<div className="flex justify-center">
										<div className="flex items-center gap-3">
											<Img src="images/img_frame_orange_300.svg" alt="Image" className="h-[24px]" />
											<Text as="p" className="text-[16px] font-normal !text-gray-900 lg:text-[13px]">
												Expertise
											</Text>
										</div>
										<div className="flex flex-1 items-center justify-end gap-4 px-4">
											<Img src="images/img_frame_orange_300.svg" alt="Image" className="h-[24px]" />
											<Text as="p" className="text-[16px] font-normal !text-gray-900 lg:text-[13px]">
												Client-Centric Approach
											</Text>
										</div>
									</div>
									<div className="flex justify-center">
										<div className="flex items-center gap-3">
											<Img src="images/img_frame_orange_300.svg" alt="Image" className="h-[24px]" />
											<Text as="p" className="text-[16px] font-normal !text-gray-900 lg:text-[13px]">
												Results-Oriented
											</Text>
										</div>
										<div className="flex flex-1 items-center justify-center gap-3 px-[46px] md:px-5 sm:px-4">
											<Img src="images/img_frame_orange_300.svg" alt="Image" className="h-[24px]" />
											<Text as="p" className="text-[16px] font-normal !text-gray-900 lg:text-[13px]">
												Personalized Service
											</Text>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between gap-5">
						<Button shape="round" className="min-w-[238px] rounded-[32px] px-[34px] font-bold sm:px-4">
							Practicing Area
						</Button>
						<Heading as="h6" className="mb-[18px] mr-[54px] self-end text-[16px] font-semibold lg:text-[13px]">
							Book an appointment
						</Heading>
					</div>
				</div>
			</div>
		</>
	);
}