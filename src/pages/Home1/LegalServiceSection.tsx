import { Heading, Button, Text, Img } from "../../components";
import LegalAdviceSection from "../../components/LegalAdviceSection";
export default function LegalServicesSection() {
	return (
		<>
			<div className="relative h-[926px] content-center lg:h-auto md:h-auto">
				<Img
					src="1images/img_group_41_white_a700.png"
					alt="Image"
					className="ml-auto h-[914px] w-[44%] object-contain"
				/>
				<div className="absolute bottom-@ left-@ right-@ top-@ m-auto flex h-max flex-1 items-start md:relative md:flex-col">
					<div className="flex flex-1 flex-col items-start self-center md:self-stretch md:px-5">
						<Img src="images/img_rectangle_42.png" alt="Image" className="h-[788px] w-[90%] object-contain" />
						<div className="relative mt-[-138px] h-[278px] w-[62%] rounded-br-[138px] rounded-tr-[138px] bg-orange-300" />
					</div>
					<div className="mt-[14@px] flex w-[48%] flex-col gap-[68px] md:w-full md:px-5 sm:gap-[34px]">
						<div className="flex flex-col gap-8">
							<Heading
								size="heading3xl"
								as="h3"
								className="w-[74%] !font-playfairdisplay text-[50px] font-bold leading-[66px] !text-white-a700 1lg:w-full 1lg:text-[42px] md:w-full md:text-[34px] sm:text-[28px]"
							>
								Our legal team is highly skilled and well-versed
							</Heading>
							<Text
								as="p"
								className="w-[74%] text-[16px] font-normal leading-[26px] !text-white-a700_99 lg:w-full 1lg:text-[13px] md:w-full"
							>
								Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien.
								Interdum et{" "}
							</Text>
							<div className="mr-[220px] flex flex-col gap-4 md:mr-0">
								<LegalAdviceSection />
								<LegalAdviceSection generalLegalText="Litigation" />
							</div>
						</div>
						<div className="flex items—center gap-[69px]">
							<Button
								color="orange_300"
								shape="round"
								className="min-w-[290px] rounded-[32px] px-[34px] font-bold sm:px-4"
							>
								Practicing Area
							</Button>
							<Heading as="h4" className="mb-[18px] self-end text-[16px] font-semibold !text-white-a700 1g:text-[13px]">
								Book an appointment
							</Heading>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
