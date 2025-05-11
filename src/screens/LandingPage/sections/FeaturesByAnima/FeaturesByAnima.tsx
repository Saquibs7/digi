import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: "/icon-9.svg",
    title: "Easier Work Organization",
    description:
      "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.",
  },
  {
    icon: "/icon-10.svg",
    title: "Fast Connection",
    description:
      "Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.",
  },
  {
    icon: "/icon-11.svg",
    title: "Streamlined Processes",
    description:
      "Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.",
  },
  {
    icon: "/icon-1.svg",
    title: "Easier Integrations",
    description:
      "Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.",
  },
  {
    icon: "/icon-3.svg",
    title: "Marketing Analytics",
    description:
      "Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.",
  },
  {
    icon: "/icon.svg",
    title: "Workflow Builder",
    description:
      "Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.",
  },
];

export const FeaturesByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-16 bg-basewhite">
      <div className="flex flex-col items-center justify-center gap-3 px-8 max-w-[1280px] w-full">
        <div className="flex flex-col items-center justify-center gap-2 max-w-[800px] w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="font-headline-m-desktop-bold font-[number:var(--headline-m-desktop-bold-font-weight)] text-gray-700 text-[length:var(--headline-m-desktop-bold-font-size)] text-center tracking-[var(--headline-m-desktop-bold-letter-spacing)] leading-[var(--headline-m-desktop-bold-line-height)] [font-style:var(--headline-m-desktop-bold-font-style)]">
              Messaging for all
            </h2>

            <p className="font-text-l-regular font-[number:var(--text-l-regular-font-weight)] text-gray-50 text-[length:var(--text-l-regular-font-size)] text-center tracking-[var(--text-l-regular-letter-spacing)] leading-[var(--text-l-regular-line-height)] [font-style:var(--text-l-regular-font-style)]">
              User generated content in real-time will have multiple touchpoints
              for offshoring.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-16 px-8 max-w-[1280px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-none rounded-[5px] bg-transparent"
            >
              <CardContent className="p-0 flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-5 w-full">
                  <div className="inline-flex items-center justify-center p-2 bg-primary-600 rounded-[30px]">
                    <img
                      className="w-8 h-8"
                      alt={`${feature.title} icon`}
                      src={feature.icon}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-3 w-full">
                    <h3 className="font-headline-XS-desktop-semibold font-[number:var(--headline-XS-desktop-semibold-font-weight)] text-gray-700 text-[length:var(--headline-XS-desktop-semibold-font-size)] tracking-[var(--headline-XS-desktop-semibold-letter-spacing)] leading-[var(--headline-XS-desktop-semibold-line-height)] [font-style:var(--headline-XS-desktop-semibold-font-style)] w-full">
                      {feature.title}
                    </h3>

                    <p className="font-text-l-regular font-[number:var(--text-l-regular-font-weight)] text-gray-50 text-[length:var(--text-l-regular-font-size)] tracking-[var(--text-l-regular-letter-spacing)] leading-[var(--text-l-regular-line-height)] [font-style:var(--text-l-regular-font-style)] w-full">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="p-0 h-auto hover:bg-transparent"
                >
                  <span className="font-text-button-semibold-large font-[number:var(--text-button-semibold-large-font-weight)] text-primary-600 text-[length:var(--text-button-semibold-large-font-size)] tracking-[var(--text-button-semibold-large-letter-spacing)] leading-[var(--text-button-semibold-large-line-height)] [font-style:var(--text-button-semibold-large-font-style)]">
                    Learn more
                  </span>
                  <ArrowRightIcon className="w-5 h-5 ml-1.5 text-primary-600" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
