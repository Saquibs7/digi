import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Define the footer link data for reusability
const resourceLinks = [
  { title: "Community" },
  { title: "Events" },
  { title: "Help Center" },
  { title: "Partners" },
];

const productLinks = [
  { title: "Integrations" },
  { title: "Solutions" },
  { title: "Features" },
  { title: "Enterprise" },
];

const socialIcons = [
  { src: "/social-platforms-logo-3.svg", alt: "Social platforms" },
  { src: "/social-platforms-logo-1.svg", alt: "Social platforms" },
  { src: "/social-platforms-logo-2.svg", alt: "Social platforms" },
  { src: "/social-platforms-logo.svg", alt: "Social platforms" },
];

export const FooterByAnima = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center py-16 w-full bg-gray-950">
      <div className="flex flex-col items-start gap-12 px-8 w-full max-w-[1280px]">
        <div className="flex flex-wrap items-start justify-between w-full gap-8">
          {/* Company Logo and Description */}
          <div className="flex flex-col items-start gap-4">
            <img
              className="w-40 h-10"
              alt="Company logo"
              src="/company-logo-2.svg"
            />
            <div className="max-w-[247px] font-text-l-regular text-neutral-800">
              Generate outside the box thinking with the possibility to targtet
              the low.
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col items-start gap-6">
            <div className="font-text-l-semibold text-neutral-200">
              Resources
            </div>
            <div className="flex flex-col items-start gap-3">
              {resourceLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 font-text-l-medium text-neutral-800 hover:bg-transparent hover:text-neutral-200"
                >
                  {link.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div className="flex flex-col items-start gap-6">
            <div className="font-text-l-semibold text-neutral-200">
              Products
            </div>
            <div className="flex flex-col items-start gap-3">
              {productLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 font-text-l-medium text-neutral-800 hover:bg-transparent hover:text-neutral-200"
                >
                  {link.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Email Notifications */}
          <div className="flex flex-col items-start gap-6">
            <div className="font-text-l-semibold text-neutral-200">
              Get Email Notifications
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="max-w-[302px] font-text-l-regular text-neutral-800">
                Generate outside the box thinking with the possibility to
                targtet the low
              </div>
              <div className="flex w-full max-w-[302px]">
                <div className="flex-grow">
                  <Input
                    className="h-[46px] rounded-r-none bg-gray-600 border-[#2e3445] text-neutral-800 font-text-m-regular"
                    placeholder="Enter email...."
                  />
                </div>
                <Button className="h-[46px] rounded-l-none bg-primary-600 hover:bg-primary-700 text-basewhite font-text-button-semibold-large">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="w-full bg-[#2e3445]" />

        {/* Footer Bottom */}
        <div className="flex flex-wrap items-center justify-between w-full pt-6">
          <div className="font-text-l-regular text-neutral-800">
            © 2023 Lookscout. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-6 h-6"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
