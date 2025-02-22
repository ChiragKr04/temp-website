import { Helmet } from "react-helmet";

import { Button, Img, Text, Heading, Slider } from "../../components";
import Footer from "../../components/Footer";

import Header from "../../components/Header";

import ContactInformationSection from "./ContactInformationSection";
import FAQSection from "./FAQSection";

import LegalServicesSection from "./LegalServiceSection";

import ServicesOverviewSection from "./ServicesOverviewSection";
import WhyUsSection from "./WhyUsSection";

import React from "react";

import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";


export default function Home1Page() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  return (
    <>
      <Helmet>
        <title>Expert Legal Services - Johnson & Partners Law Firm</title>
        <meta
          name="description"
          content="Discover comprehensive legal services at Johnson & Partners. Specializing in family law, criminal defense, and intellectual property. Book a consultation today for personalized legal advice and a client-centric approach with a 99% success rate."
        />
      </Helmet>
      <div className="w-full bg-blue_gray-900_01">
        <div>
          <div className="flex flex-col items-end gap-[318px] lg:gap-[238px] md:gap-[238px] sm:gap-[159px]">
            <Img
              src="images/ing_hero_direction_12.png"
              alt="Herodirection"
              className="h-[512px] w-full object-cover lg:h-auto md:h-auto"
            />
            <Button size="g" className="mr-10 w-[50px] rounded-[24px] px-2.5 md:mr-0">
              <Img src="images/ing_settings.svg" />
            </Button>
          </div>
          <div className="relative mt-[-880px]">
            <div>
              <div className="relative h-[1272px] bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat py-18 sm:py-4">
                <div className="absolute bottom-[4%] left-@ right-8 mx-auto h-[1080px] flex-1 lg:h-auto md:h-auto">
                  <div className="absolute left-0 right-0 top-[6%] mx-auto h-[872px] w-[74%]">
                    <div className="absolute bottom-[0.59px] right-[7%] m-auto h-[810px] w-[46%] rounded-tl-[276px] rounded-tr-[276px] border border-solid border-orange-300" />
                    <div className="absolute right-[0.43px] top-0 m-auto h-[810px] w-[42%] rounded-t1-[276px] rounded-tr-[276px] border border-solid border-gray-900" />
                    <Img
                      src="images/ing_businesspeople.png"
                      alt="Businesspeople"
                      className="absolute bottom-0 right-[3%] top-@ my-auto h-[810px] w-[44%] rounded-t1-[276px] rounded-tr-[276px] object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 mx-auto w-[12%] rounded-[106px] bg-gray-900 p-[18px1">
                    <Img src="images/img_group_57.svg" alt="Image" className="h-[176px] w-full lg:h-auto md:h-auto" />
                  </div>
                  <Img src="images/img_group_41.png" alt="Image" className="h-[642px] w-[28%] object-contain" />
                  <div className="absolute left-0 right-0 top-[19%] mx-auto flex w-[74%] flex-col">
                    <Heading
                      size="headingmd"
                      as="h1"
                      className="w-[44%] !font-playfairdisplay text-[78px] font-bold leading-[93px] !text-white-a700 lg:w-full lg:px-5 md:w-full md:px-5 md:text-[48px]"
                    >
                      The Law Is The Public Conscience
                    </Heading>
                    <Text
                      size="textlg"
                      as="p"
                      className="mt-[38px] w-[44%] text-[18px] font-normal leading-8 !text-gray-400 lg:w-full 1g:px-5 lg:text-[15px] md:w-full md:px-5"
                    >
                      Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien.
                      Interdum et{" "}
                    </Text>
                    <div className="mt-14 flex items-center sm:flex-col">
                      <Button
                        color="orange_300"
                        shape="round"
                        className="min-w-[300px] rounded-[32px] px-[34px] font-bold capitalize sm:px-5"
                      >
                        Practicing Area
                      </Button>
                      <div className="flex flex-1 pl-16 pr-14 1g:pl-8 md:px-5 sm:self-stretch">
                        <Heading as="h2" className="self-end text-[16px] font-semibold !text-white-a70@ lg:text-[13px]">
                          Book an appointment
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Text
                    size="textxl"
                    as="p"
                    className="absolute left-[19.56px] top-[33%] m-auto rotate-[-90deg] text-[20px] font-normal capitalize !text-black-900_44 lg:text-[17px]"
                  >
                    © rahulonit @ 2024
                  </Text>
                </div>
                <Header />
              </div>
              <LegalServicesSection />
              <ServicesOverviewSection />
              <div className="bg-white-a700 py-[140px] 1g:py-8 md:py-5 sm:py-4">
                <WhyUsSection />
              </div>
              <div className="relative h-[828px] content-center lg:h-auto md:h-auto">
                <div className="relative h-[828px] w-full content-center lg:h-auto md:h-auto">
                  <div className="sliderourclient flex w-full">
                    {/* Slider content */}
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{
                        "0": { items: 1 },
                        "551": { items: 1 },
                        "1051": { items: 1 },
                        "1441": { items: 1 }
                      }}
                      renderDotsItem={(props: DotsItem) => {
                        return props?.isActive ? (
                          <div className="mr-[22px] inline-block h-[8px] w-[8px] cursor-pointer rounded-[50%] bg-white-a700" />
                        ) : (
                          <div className="mr-[22px] inline-block h-[8px] w-[8px] cursor-pointer rounded-[50%] bg-white-a700_33" />
                        );
                      }}
                      activeIndex={sliderState}
                      onSlideChanged={(e: EventObject) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      items={[...Array(3)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="relative h-[828px] bg-blue_gray-900_01">
                            <Img
                              src="images/img_group_53.svg"
                              alt="Inage"
                              className="absolute left-0 top-0 m-auto h-[564px] w-[30%] object-contain"
                            />
                            <Heading
                              size="heading3xl"
                              as="h1"
                              className="absolute left-0 right-@ top-[17%] mx-auto w-max !font-playfairdisplay text-[50px] font-bold !text-white-a70@ lg:text-[42px] md:text-[34px] sm:text-[28px]"
                            >
                              Our Clients Loves Us
                            </Heading>
                            <div className="absolute bottom-0 left-0 right-0 top-@ m-auto flex h-max flex-1 flex-col items-center gap-[52px] px-14 md:px-5 sm:gap-[26px] sm:px-4">
                              <div className="v- [8%] lg:w-full md:w-full">
                                <div className="flex flex-col items-end">
                                  <Img
                                    src="images/img_ellipse_94.png"
                                    alt="Inage"
                                    className="h-[124px] w-full rounded-[62px] object-cover lg:h-auto md:h-auto"
                                  />
                                  <Img
                                    src="images/img_settings_orange_300.svg"
                                    alt="Settings"
                                    className="relative mt-[-40px] h-[40px]"
                                  />
                                </div>
                              </div>
                              <Text
                                size="textlg"
                                as="p"
                                className="v- [44%] text-center text-[18px] font-normal leading-7 !text-white-a700 lg:w-full lg:text-[15px] md:w-full"
                              >
                                "I had the privilege of working with Johnson & Partners, and I can confidently say that
                                they are the best in the business. Attorney Emily Johnson and her team showed
                                exceptional dedication and legal expertise in handling my case. I'm truly grateful
                                for their support."
                              </Text>
                              <Text as="p" className="text-[16px] font-normal !text-white-a700_b2 lg:text-[13px]">
                                rr
                              </Text>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 mx-auto flex-1 px-[298px] py-[76px] lg:p-8 md:p-5 sm:p-4">
                    <div className="flex flex-1 justify-between gap-5">
                      {/* Button content */}
                      <Button size="xs"
                        shape="square"
                        onClick={() => sliderRef?.current?.slideNext()}
                      >
                        <Img src="images/img_arrow_right.svg" />
                      </Button>
                      <Button size="xs"
                        shape="square"
                        onClick={() => sliderRef?.current?.slideNext()}
                        className="w-[14px]"
                      >
                        <Img src="images/img_arrow_right.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FAQSection />
            <div>
              <div className="h-[878px] bg-[url(/public/images/img_frame_63.png)] bg-cover bg-no-repeat py-[106px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
                <ContactInformationSection />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
