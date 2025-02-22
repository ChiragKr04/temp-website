import { Button, Text } from "./..";
interface Props {
    className?: string;
}
export default function Header({ ...props }: Props) {
    return (
        <header
            {...props}
            className={
                `${props.className} flex md:flex-col justify-between items-center top-[3%] 
                right-0 left-0 gap-5 px-[62px] mx-auto lg:px-8 md:px-5 sm:px-4 flex-1 absolute md:relative`}
        >
            <div className="h-[98px] w-[18%] bg-white-a700_33" />
            <div className="flex w-[56%] justify-center gap-8 md:w-full md:flex-col">
                <div className="flex flex-1 justify-center p-2 md:self-stretch">
                    <ul className="!mb-2.5 flex flex-wrap items-center gap-11">
                        <li>
                            <a href="#" className="1g: text-[13px]">
                                <Text as="p" className="text-[16px] font-normal">
                                    Expertise
                                </Text>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="1g: text-[13px]">
                                <Text as="p" className="text-[16px] font-normal">
                                    Thought Leadership
                                </Text>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="1g: text-[13px]">
                                <Text as="p" className="text-[16px] font-normal">
                                    News & Events
                                </Text>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="1g: text-[13px]">
                                <Text as="p" className="text-[16px] font-normal">
                                    Legacy
                                </Text>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="1g: text-[13px]">
                                <Text as="p" className="text-[16px] font-normal">
                                    Contact
                                </Text>
                            </a>
                        </li>
                    </ul>
                </div>
                <Button
                    color="white_A700_4c"
                    size="md"
                    variant="outline"
                    className="min-w-[212px] rounded-[24px] !border px-[21px] font-bold sm:px-4"
                >
                    Book an appointment
                </Button>
            </div>
        </ header>
    )
};
