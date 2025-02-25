import { ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';

export default function WhyMeSection() {
	return (
		<div>
			<AccordionSection />
		</div>
	)
}

const AccordionSection = () => {
	const [openItem, setOpenItem] = useState<number | null>(0);

	const accordionData = [
		{
			title: "Why Choose Me?",
			content: "With extensive courtroom experience and a client-focused approach, I provide comprehensive legal solutions tailored to your specific needs. My commitment to professional integrity and proven track record in handling high-stakes cases makes me your trusted legal partner."
		},
		{
			title: "Courtroom Experience",
			content: "I have extensive experience practicing before district courts, tribunals, and High Courts, with a thorough understanding of litigation strategy. This deep courtroom experience allows me to navigate complex legal challenges effectively and represent your interests with confidence."
		},
		{
			title: "Client-Focused Approach",
			content: "I believe in providing personalized attention to every case and maintaining transparent communication throughout the legal process. My practice is built on understanding your unique situation and ensuring you're informed and comfortable with every step we take."
		},
		{
			title: "Comprehensive Legal Expertise",
			content: "My expertise spans across civil, criminal, financial, and family law matters. With a proven track record of successfully handling high-stakes cases, including disputes against government agencies and municipal bodies, I bring broad legal knowledge and practical experience to your case."
		}
	];

	return (
		<div id="career" className="py-16 px-16 bg-white">
			<div className="text-center mb-16">
				<h2 className="text-5xl font-marcellus">IMPORTANT ANSWER</h2>
				<p className="text-[#BF9874] mt-4 font-archivo">EVERYTHING YOU NEED TO KNOW ABOUT ME</p>
			</div>

			<div className="max-w-4xl mx-auto">
				{accordionData.map((item, index) => (
					<AccordionItem
						key={index}
						title={item.title}
						content={item.content}
						isOpen={openItem === index}
						onClick={() => setOpenItem(openItem === index ? null : index)}
					/>
				))}
			</div>
		</div>
	);
};

const AccordionItem = ({
	title,
	content,
	isOpen,
	onClick
}: {
	title: string;
	content: string;
	isOpen: boolean;
	onClick: () => void;
}) => {
	const contentRef = useRef<HTMLDivElement>(null);

	return (
		<div className="border-b border-[#BF9874]/20">
			<button
				className="w-full py-6 flex justify-between items-center text-left transition-colors hover:text-[#BF9874]"
				onClick={onClick}
			>
				<h3 className="text-xl font-marcellus">{title}</h3>
				<span className={`text-[#BF9874] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
					<ChevronDown size={24} />
				</span>
			</button>

			<div
				className="overflow-hidden transition-all duration-300 ease-in-out"
				style={{
					height: isOpen ? contentRef.current?.scrollHeight + 'px' : '0',
					opacity: isOpen ? 1 : 0
				}}
			>
				<div ref={contentRef} className="pb-6 text-gray-600 font-archivo leading-relaxed">
					{content}
				</div>
			</div>
		</div>
	);
};
