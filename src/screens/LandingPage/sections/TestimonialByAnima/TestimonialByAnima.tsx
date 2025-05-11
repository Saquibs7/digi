import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialByAnima = (): JSX.Element => {
  const testimonialData = {
    companyLogo: "/company-logo-4.svg",
    quote:
      "Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!",
    author: {
      avatar: "..//avatar.png",
      name: "Lisa Smith",
      title: "CEO Company",
    },
  };

  return (
    <section className="flex flex-col items-center justify-center gap-16 py-16 bg-basewhite">
      <div className="flex flex-col items-center justify-center gap-2.5 px-8 w-full max-w-[1280px]">
        <div className="items-center gap-4 w-full flex relative">
          <Card className="flex-1 p-0 bg-neutral-100 rounded-[10px] border-none">
            <CardContent className="p-0">
              <div className="flex flex-col items-center gap-8 px-4 py-8 md:px-[154px]">
                <img
                  className="w-32 h-8"
                  alt="Company logo"
                  src={testimonialData.companyLogo}
                />

                <p className="font-headline-s-desktop-medium font-[number:var(--headline-s-desktop-medium-font-weight)] text-gray-700 text-[length:var(--headline-s-desktop-medium-font-size)] text-center tracking-[var(--headline-s-desktop-medium-letter-spacing)] leading-[var(--headline-s-desktop-medium-line-height)] [font-style:var(--headline-s-desktop-medium-font-style)]">
                  {testimonialData.quote}
                </p>

                <div className="flex items-center gap-2.5">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={testimonialData.author.avatar}
                      alt={testimonialData.author.name}
                    />
                    <AvatarFallback>
                      {testimonialData.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col items-start">
                    <p className="mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-gray-700 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)]">
                      {testimonialData.author.name}
                    </p>

                    <p className="font-text-s-medium font-[number:var(--text-s-medium-font-weight)] text-gray-50 text-[length:var(--text-s-medium-font-size)] tracking-[var(--text-s-medium-letter-spacing)] leading-[var(--text-s-medium-line-height)]">
                      {testimonialData.author.title}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
