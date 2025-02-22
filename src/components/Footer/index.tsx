import { Text, Button, Img } from "./..";
interface Props {
  className?: string;
}
export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col items-center mt-[-300px] py-[30px] sm:py-4 rounded-tr-[300px] z-[1] relative bg-blue_gray-900_01`}
    >
      <div className="container-xs mt-10 flex flex-col gap-[140px] lg:gap-[105px] lg:px-5 md:gap-[105px] md:px-5 sm:gap-[70px]">
        <div className="flex items-start justify-between gap-5 md:flex-col">
          <div className="flex w-[48%] flex-col gap-8 md:w-full">
            <Img src="images/img_footer_logo.png" alt="Footerlogo" className="h-[98px] w-[290px] object-contain" />
            <Text size="textlg" as="p" className="text-[18px] font-normal leading-8 1g:text-[15px]">
              Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum
              et{" "}
            </Text>
            <div className="flex gap-2">
              <Button
                color="white_A700_19"
                size="sm"
                variant="outline"
                shape="circle"
                className="w-[40px] rounded-[20px] !'border px-3"
              >
                <Img src="images/img_close.svg" />
              </Button>
              <Button
                color="white_A700_19"
                size="sm"
                variant="outline"
                shape="circle"
                className="w-[40px] rounded-[20px] !'border px-3"
              >
                <Img src="images/img_close_gray_800.svg" />
              </Button>
              <Button
                color="white_A700_19"
                size="sm"
                variant="outline"
                shape="circle"
                className="w-[40px] rounded-[20px] !'border px-3"
              >
                <Img src="images/img_close_black_900.svg" />
              </Button>
            </div >
          </div>
          <div className="my-6 flex w-[48%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
            <div className="flex w-[34%] flex-col items-start gap-[22px] self-center md:w-full">
              <Text
                size="textxl"
                as="p"
                className="!font-playfairdisplay text-[20px] font-normal !text-white-a70@ 1lg:text-[17px]"
              >
                Practicing Area
              </Text>
              <ul className="flex flex-col items-start">
                <li>
                  <a href="#" className="mt-1.5 1lg:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Personal Injury
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-[26px] 1g:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Personal Injury
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-[26px] 1g:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Family Law
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-[26px] 1g:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Criminal Defense
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-[26px] 1g:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Real Estate
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-[26px] 1g:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Corporate Law
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" className="mt-[26px] 1g:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Immigration
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-[26px] 1g:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Estate Planning
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="flex w-[34%] flex-col items-start gap-[22px] md:w-full">
              <Text
                size="textxl"
                as="p"
                className="!font-playfairdisplay text-[20px] font-normal !text-white-a700 lg:text-[17px]"
              >
                About
              </Text>
              <ul className="flex flex-col items-start gap-[30px]">
                <li>
                  <a href="Company" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Company
                    </Text>
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col items-start gap-[30px]">
                <li>
                  <a href="Clients" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Clients
                    </Text>
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col items-start gap-[30px]">
                <li>
                  <a href="Team" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Team
                    </Text>
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col items-start gap-[30px]">
                <li>
                  <a href="Career" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Career
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="flex flex-col items-start gap-[22px]">
              <Text
                size="textxl"
                as="p"
                className="!font-playfairdisplay text-[20px] font-normal !text-white-a70@ 1lg:text-[17px]"
              >
                Resources
              </Text>
              <ul className="flex flex-col items-start gap-[30px]">
                <li>
                  <a href="Blogs" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Blogs
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Press" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Press
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Frequently Asked
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Questions" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text as="p" className="text-[16px] font-normal">
                      Questions
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 sm:flex-col">
          <Text size="texts" as="p" className="text-[15px] font-normal">
            2023 . All Rights Reserved.
          </Text>
          <div className="flex flex-wrap gap-6">
            <a href="#">
              <Text size="texts" as="p" className="text-[15px] font-normal">
                Terms & Conditions{" "}
              </Text>
            </a>
            <a href="#">
              <Text size="texts" as="p" className="text-[15px] font-normal">
                Privacy
              </Text>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
};

