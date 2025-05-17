'use client'
import { ChevronDownIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import Navbar from "../../../../components/ui/Navbar";
import {
  requestNotificationPermission,
  getFcmToken,
  onMessageListener
} from "../../../../firebase"



export const HeroByAnima = (): JSX.Element => {
  const [token, setToken] = useState<string>("");
  const [notif, setNotif] = useState<{ title: string; body: string } | null>(null);

  const enableNotifications = async () => {
    try {
      await requestNotificationPermission();
      const fcmToken = await getFcmToken();
      console.log("FCM Token:", fcmToken);
      setToken(fcmToken);
      // TODO: send fcmToken to your backend
    } catch (err) {
      console.error("Notification permission error:", err);
    }
  };

  const sendTestNotification = async () => {
    if (!token) return;
    try {
      await fetch("http://localhost:4000/send", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    token,
    title: "Hello from your PWA!",
    body: "This is a test notification.",
  }),
});
    } catch (err) {
      console.error("Send notification error:", err);
    }
  };

  useEffect(() => {
    const unsubscribe = onMessageListener((payload) => {
      setNotif(payload.notification);
    });
    return unsubscribe;
  }, []);

  const partnerLogos = [
    { src: "/company-logo-8.svg", alt: "Company logo" },
    { src: "/company-logo-3.svg", alt: "Company logo" },
    { src: "/company-logo-11.svg", alt: "Company logo" },
    { src: "/company-logo-6.svg", alt: "Company logo" },
  ];

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
    <section className="flex w-full items-center justify-center relative bg-primary-900 lg:min-h-[calc(100vh-80px)]">
      {/* Right Background Container */}
      <div className="hidden bg-[#3971E7] md:block absolute top-0 bottom-0 right-0 left-1/2 z-0 " />

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row w-full max-w-[1280px] items-center gap-8 lg:gap-16 py-12 lg:py-20 pl-8 pr-4 md:px-8 relative z-10">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start justify-center gap-8 lg:gap-16 w-full lg:w-auto lg:max-w-[45%]">
          <div className="flex flex-col items-center lg:items-start gap-8 w-full">
            <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-basewhite tracking-[-0.5px] leading-[1.2] lg:leading-[60px]">
                Your Supercharged Design Workflow.
              </h1>
              <p className="text-base lg:text-lg text-primary-200 leading-relaxed lg:leading-[26px] max-w-[500px] text-justify">
                We&apos;ve been told it is not possible to overachieve our
                customers&apos; expectations. We have not reinvented the
                wheel, we decided to build upon it.
              </p>
            </div>
            {!token ? (
                <Button onClick={enableNotifications} className="w-full lg:w-auto bg-[#3971E7] text-basewhite shadow-shadow-XSM py-6 text-[15px]">
                  Enable Notifications
                </Button>
              ) : (
                <Button onClick={sendTestNotification} className="w-full lg:w-auto bg-secondary text-basewhite shadow-shadow-XSM py-6 text-[15px] bg-[#3971E7]  ">
                  Send Test Notification
                </Button>
              )}
          </div>

          {/* Partners Section */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full">
            <h3 className="text-sm text-basewhite font-medium">
              Who supports us
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
              {partnerLogos.map((logo, index) => (
                <img
                  key={index}
                  className="h-6 lg:h-7 w-auto"
                  alt={logo.alt}
                  src={logo.src}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Visual Grid */}
        <div className="relative bg-[#3971E7] w-full lg:w-[528px] aspect-square max-w-[600px] lg:max-w-none z-10">
          <div className="relative w-full h-full -top-0 lg:-top-12 lg:left-10">
            <div className="relative lg:absolute w-full lg:w-[448px] h-full lg:h-[560px] top-0 lg:top-8 left-0">
              <div className="scale-[0.6] lg:scale-100 origin-top-left">
                {gridElements.map((elem, index) => (
                  <img
                    key={index}
                    className={elem.className}
                    alt={elem.alt}
                    src={elem.src}
                  />
                ))}

                {/* Special elements */}
                <div className="absolute w-28 h-28 top-[448px] left-0 rounded-[56px] border-2 border-solid border-white">
                  <div className="relative w-14 h-14 top-[26px] left-[26px] bg-primary-200 rounded-[28px]" />
                </div>
                <div className="absolute w-28 h-28 top-28 left-0 bg-basewhite rounded-[56px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
