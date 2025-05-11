import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

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

export const LeftToRightByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-16 bg-basewhite w-full">
      <div className="flex flex-col items-center justify-center gap-3 px-8 max-w-[1280px] w-full">
        <div className="flex flex-col items-center justify-center gap-2 max-w-[800px] w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="font-headline-m-desktop-bold font-[number:var(--headline-m-desktop-bold-font-weight)] text-gray-700 text-[length:var(--headline-m-desktop-bold-font-size)] text-center tracking-[var(--headline-m-desktop-bold-letter-spacing)] leading-[var(--headline-m-desktop-bold-line-height)] [font-style:var(--headline-m-desktop-bold-font-style)]">
              Redefining Product Features
            </h2>

            <p className="font-text-l-regular font-[number:var(--text-l-regular-font-weight)] text-gray-50 text-[length:var(--text-l-regular-font-size)] text-center tracking-[var(--text-l-regular-letter-spacing)] leading-[var(--text-l-regular-line-height)] [font-style:var(--text-l-regular-font-style)]">
              Keeping your eye on the ball while performing a deep dive on the
              start-up mentality to&nbsp;&nbsp;derive convergence on
              cross-platform integration.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-[124px] px-8 max-w-[1280px] w-full">
        <div className="flex flex-col items-start gap-10 flex-1 min-w-[300px]">
          <div className="flex flex-col items-start gap-8 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 w-full">
                <div className="flex items-center justify-center p-2 bg-primary-600 rounded-[30px]">
                  <img className="w-8 h-8" alt="Icon" src={feature.icon} />
                </div>

                <div className="flex flex-col items-start gap-3 flex-1">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="font-headline-XS-desktop-semibold font-[number:var(--headline-XS-desktop-semibold-font-weight)] text-gray-700 text-[length:var(--headline-XS-desktop-semibold-font-size)] tracking-[var(--headline-XS-desktop-semibold-letter-spacing)] leading-[var(--headline-XS-desktop-semibold-line-height)] [font-style:var(--headline-XS-desktop-semibold-font-style)]">
                      {feature.title}
                    </h3>

                    <p className="font-text-l-regular font-[number:var(--text-l-regular-font-weight)] text-gray-50 text-[length:var(--text-l-regular-font-size)] tracking-[var(--text-l-regular-letter-spacing)] leading-[var(--text-l-regular-line-height)] [font-style:var(--text-l-regular-font-style)]">
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
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center max-w-[560px] h-auto">
          <img
            className="w-full h-auto object-cover"
            alt="Photo"
            src="/photo.png"
          />
        </div>
      </div>
    </section>
  );
};
