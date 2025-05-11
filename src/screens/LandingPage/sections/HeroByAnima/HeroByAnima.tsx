import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import Navbar from "../../../../components/ui/Navbar";

export const HeroByAnima = (): JSX.Element => {

  // Partner logos
  const partnerLogos = [
    { src: "/company-logo-8.svg", alt: "Company logo" },
    { src: "/company-logo-3.svg", alt: "Company logo" },
    { src: "/company-logo-11.svg", alt: "Company logo" },
    { src: "/company-logo-6.svg", alt: "Company logo" },
  ];

  // Grid elements for the visual component
  const gridElements = [
    {
      src: "/elem-1.svg",
      alt: "Elem",
      className: "absolute w-56 h-28 top-0 left-28",
    },
    {
      src: "/elem-2.svg",
      alt: "Elem",
      className: "absolute w-28 h-28 top-0 left-[336px]",
    },
    {
      src: "/elem-3.svg",
      alt: "Elem",
      className: "absolute w-28 h-56 top-28 left-[336px]",
    },
    {
      src: "/elem-4.svg",
      alt: "Elem",
      className: "absolute w-28 h-56 top-[336px] left-[336px]",
    },
    {
      src: "/elem-5.svg",
      alt: "Elem",
      className: "absolute w-56 h-28 top-[448px] left-28",
    },
    {
      src: "/elem-7.png",
      alt: "Elem",
      className: "absolute w-28 h-56 top-56 left-0",
    },
    {
      src: "/elem-9.svg",
      alt: "Elem",
      className: "absolute w-56 h-28 top-[336px] left-28",
    },
    {
      src: "/rectangle-34624127.png",
      alt: "Rectangle",
      className: "absolute w-56 h-56 top-28 left-28 object-cover",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center relative bg-primary-900">

      {/* Main Content */}
      <div className="flex w-full max-w-[1280px] items-center gap-16 pt-12 pb-20 px-8 relative z-0">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center gap-16 relative flex-1 self-stretch">
          <div className="flex flex-col items-start justify-end gap-20 relative self-stretch w-full h-[528px]">
            {/* Hero Text and CTA */}
            <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                <h1 className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-basewhite text-[52px] tracking-[-0.52px] leading-[60px]">
                  Your Supercharged Design Workflow.
                </h1>

                <p className="relative flex-1 [font-family:'Inter',Helvetica] font-normal text-primary-200 text-lg tracking-[-0.10px] leading-[26px]">
                  We&apos;ve been told it is not possible to overachieve our
                  customers&apos; expectations. We have not reinvented the
                  wheel, we decided to build upon it.
                </p>
              </div>

              <Button className="bg-primary-600 text-basewhite shadow-shadow-XSM [font-family:'Inter',Helvetica] font-normal text-[15px] leading-[22px]">
                Send Notification
              </Button>
            </div>

            {/* Partners Section */}
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
              <h3 className="relative flex-1 [font-family:'Inter',Helvetica] font-medium text-basewhite text-sm tracking-[-0.10px] leading-5">
                Who supports us
              </h3>

              <div className="flex items-start gap-2.5 relative self-stretch w-full">
                {partnerLogos.map((logo, index) => (
                  <img
                    key={index}
                    className="relative w-28 h-7"
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Component */}
        <div className="relative w-[528px] h-[528px] rounded-[10px]">
          <div className="relative w-[600px] h-[656px] -top-12 left-10">
            <div className="absolute w-[488px] h-[656px] top-0 left-28 bg-primary-700" />

            <div className="absolute w-[448px] h-[560px] top-8 left-0">
              {gridElements.map((elem, index) => (
                <img
                  key={index}
                  className={elem.className}
                  alt={elem.alt}
                  src={elem.src}
                />
              ))}

              {/* Special elements that aren't simple images */}
              <div className="absolute w-28 h-28 top-[448px] left-0 rounded-[56px] border-2 border-solid border-white">
                <div className="relative w-14 h-14 top-[26px] left-[26px] bg-primary-200 rounded-[28px]" />
              </div>

              <div className="absolute w-28 h-28 top-28 left-0 bg-basewhite rounded-[56px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
