import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: "/icon-2.svg",
    title: "Explore ideas together",
    description:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    icon: "/icon-7.svg",
    title: "Bring those ideas to life",
    description:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    icon: "/icon-5.svg",
    title: "Ship better outcomes",
    description:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
];

export const LeftToRightWrapperByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-16 w-full bg-gray-950">
      <div className="flex flex-col md:flex-row items-center gap-20 px-8 max-w-[1280px] w-full">
        <div className="flex items-center justify-center w-full md:w-1/2 max-w-[560px] h-auto aspect-square">
          <img
            className="w-full h-full object-cover"
            alt="Photo"
            src="/photo-1.png"
          />
        </div>

        <div className="flex flex-col items-start gap-10 flex-1">
          <div className="flex flex-col items-start gap-8 w-full">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex items-start gap-4 w-full bg-transparent border-0 shadow-none"
              >
                <CardContent className="flex items-start gap-4 p-0 w-full">
                  <div className="inline-flex items-center justify-center p-2 bg-primary-600 rounded-[30px] flex-shrink-0">
                    <img className="w-8 h-8" alt="Icon" src={feature.icon} />
                  </div>

                  <div className="flex flex-col items-start gap-3 flex-1">
                    <div className="flex flex-col items-start gap-2 w-full">
                      <h3 className="w-full font-headline-XS-desktop-semibold font-[number:var(--headline-XS-desktop-semibold-font-weight)] text-neutral-200 text-[length:var(--headline-XS-desktop-semibold-font-size)] tracking-[var(--headline-XS-desktop-semibold-letter-spacing)] leading-[var(--headline-XS-desktop-semibold-line-height)] [font-style:var(--headline-XS-desktop-semibold-font-style)]">
                        {feature.title}
                      </h3>

                      <p className="w-full font-text-l-regular font-[number:var(--text-l-regular-font-weight)] text-neutral-800 text-[length:var(--text-l-regular-font-size)] tracking-[var(--text-l-regular-letter-spacing)] leading-[var(--text-l-regular-line-height)] [font-style:var(--text-l-regular-font-style)]">
                        {feature.description}
                      </p>
                    </div>

                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary-600 font-text-button-semibold-large font-[number:var(--text-button-semibold-large-font-weight)] text-[length:var(--text-button-semibold-large-font-size)] tracking-[var(--text-button-semibold-large-letter-spacing)] leading-[var(--text-button-semibold-large-line-height)] [font-style:var(--text-button-semibold-large-font-style)]"
                    >
                      Learn more
                      <ArrowRightIcon className="ml-1.5 w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
