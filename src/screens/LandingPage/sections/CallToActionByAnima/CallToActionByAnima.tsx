import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const CallToActionByAnima = (): JSX.Element => {
  // Feature items data for mapping
  const featureItems = [
    { id: 1, text: "Fully Secure" },
    { id: 2, text: "24/7 Support" },
    { id: 3, text: "Done Deal" },
  ];

  return (
    <section className="flex w-full items-center justify-center px-0 py-16 relative bg-neutral-50">
      <div className="flex flex-col w-full max-w-[1280px] items-center justify-center gap-8 px-8 py-0">
        <div className="flex flex-col w-full max-w-[752px] items-center justify-center gap-6">
          <div className="inline-flex flex-col items-center gap-2">
            <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-primary-600 text-[length:var(--text-s-semibold-font-size)] tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
              1% OF THE INDUSTRY
            </div>

            <div className="flex flex-col w-full max-w-[752px] items-center gap-4">
              <h2 className="self-stretch mt-[-1.00px] font-headline-m-desktop-semibold font-[number:var(--headline-m-desktop-semibold-font-weight)] text-gray-700 text-[length:var(--headline-m-desktop-semibold-font-size)] text-center tracking-[var(--headline-m-desktop-semibold-letter-spacing)] leading-[var(--headline-m-desktop-semibold-line-height)] [font-style:var(--headline-m-desktop-semibold-font-style)]">
                Welcome to your new digital reality that will rock your world
                truly at all throughout.
              </h2>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-8">
          <Card className="flex flex-col w-full max-w-[752px] items-center gap-8 px-[120px] py-0 border-none bg-transparent shadow-none">
            <CardContent className="flex flex-col items-start gap-2 p-0 w-full">
              <div className="flex items-start relative w-full rounded-md overflow-hidden shadow-shadow-XSM">
                <Input
                  className="h-[46px] rounded-[6px_0px_0px_6px] border border-solid border-[#dae0e6] px-4 py-3 text-gray-25 font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-[length:var(--text-m-regular-font-size)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] [font-style:var(--text-m-regular-font-style)]"
                  placeholder="Enter your email"
                />
                <Button className="h-[46px] rounded-[0px_6px_6px_0px] bg-primary-600 px-[18px] py-3 font-text-button-semibold-large font-[number:var(--text-button-semibold-large-font-weight)] text-basewhite text-[length:var(--text-button-semibold-large-font-size)] tracking-[var(--text-button-semibold-large-letter-spacing)] leading-[var(--text-button-semibold-large-line-height)] [font-style:var(--text-button-semibold-large-font-style)]">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="inline-flex items-start gap-10">
            {featureItems.map((item) => (
              <div key={item.id} className="inline-flex items-start gap-3">
                <div className="inline-flex items-start gap-2.5 px-0 py-0.5">
                  <div className="relative w-5 h-5 bg-primary-600 rounded-[20px] flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-basewhite" />
                  </div>
                </div>

                <div className="inline-flex flex-col items-start">
                  <div className="relative w-fit mt-[-1.00px] font-text-l-medium font-[number:var(--text-l-medium-font-weight)] text-gray-700 text-[length:var(--text-l-medium-font-size)] tracking-[var(--text-l-medium-letter-spacing)] leading-[var(--text-l-medium-line-height)] whitespace-nowrap [font-style:var(--text-l-medium-font-style)]">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
