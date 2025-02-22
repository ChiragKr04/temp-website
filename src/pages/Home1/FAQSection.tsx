import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import { Suspense } from "react";

const faqGrid = [
	{
		headingText: "What is the purpose of this website?",
		descriptionText: "This website is a platform for users to ask questions and get answers from legal experts.",
	},
];

export default function FAQSection() {
	return (
		<>
			<div>
				<div className="flex flex-col items-center justify-center bg-white-a700 py-[140px] 1g:py-8 md:py-5 sm:py-4">
					<div className="container-xs flex flex-col items-center gap-28 lg:gap-28 1g:px-5 md:gap-[84px] md:px-5 sm:gap-14">
						<Heading
							size="heading3xl"
							as="h1"
							className="w- [48%] text-center !font-playfairdisplay text-[50px] font-bold leading-[66px] lg:w-full 1lg:text-[42px] md:w-full md:text-[34px] sm:text-[28px]"
						>
							Frequently Asked Questions
						</Heading>
						<div className="grid grid-cols-2 justify-center gap-10 self-stretch lg:grid-cols-2 md:grid-cols-1">
							<Suspense fallback={<div>Loading feed...</div>}>
								{faqGrid.map((d, index) => (
									<UserProfile {...d} key={"home" + index} />
								))}
							</Suspense>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
