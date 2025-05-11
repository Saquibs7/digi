import React from "react";

export const LogoSectionByAnima = (): JSX.Element => {
  // Company logos data for easy mapping
  const companyLogos = [
    { src: "/press-logo.svg", alt: "Press logo" },
    { src: "/company-logo-3.svg", alt: "Company logo" },
    { src: "/company-logo.svg", alt: "Company logo" },
    { src: "/company-logo-6.svg", alt: "Company logo" },
    { src: "/company-logo-1.svg", alt: "Company logo" },
    { src: "/company-logo-7.svg", alt: "Company logo" },
  ];

  return (
    <section className="w-full flex flex-col items-center gap-16 py-16 bg-basewhite">
      <div className="w-full max-w-[1280px] flex flex-col items-center justify-center gap-3 px-8">
        <div className="w-full max-w-[800px] flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="w-full mt-[-1.00px] font-headline-m-desktop-bold font-[number:var(--headline-m-desktop-bold-font-weight)] text-gray-700 text-[length:var(--headline-m-desktop-bold-font-size)] text-center tracking-[var(--headline-m-desktop-bold-letter-spacing)] leading-[var(--headline-m-desktop-bold-line-height)] [font-style:var(--headline-m-desktop-bold-font-style)]">
              Proud to Be Used By
            </h2>

            <p className="w-full font-text-l-regular font-[number:var(--text-l-regular-font-weight)] text-gray-50 text-[length:var(--text-l-regular-font-size)] text-center tracking-[var(--text-l-regular-letter-spacing)] leading-[var(--text-l-regular-line-height)] [font-style:var(--text-l-regular-font-style)]">
              Professionally cultivate one-to-one customer service with robust
              ideas. Dynamically innovate resource-leveling customer service for
              state of the art customer service.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1280px] flex flex-col items-center gap-8 px-8">
        <div className="w-full flex flex-wrap items-start justify-center gap-16">
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              className="w-32 h-8"
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
