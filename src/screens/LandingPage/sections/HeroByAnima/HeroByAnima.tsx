// src/components/HeroByAnima.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../../../../components/ui/button';
import {
  requestNotificationPermission,
  getFcmToken,
  onMessageListener
} from '../../../../firebase';

export const HeroByAnima = (): JSX.Element => {
  const [token, setToken] = useState<string>('');
  const [notif, setNotif] = useState<{ title: string; body: string } | null>(null);

  // 1) Register the service worker ASAP (once) when this component mounts:
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((reg) => {
          console.log('Service Worker registered at scope:', reg.scope);
        })
        .catch((err) => {
          console.error('Service Worker registration failed:', err);
        });
    }

    // 2) Subscribe to foreground messages:
    const unsubscribe = onMessageListener((payload) => {
     // console.log('[HeroByAnima] onMessageListener payload →', payload);

      // Show a native notification (while in‐foreground) if desired:
      if (payload.notification) {
        const { title, body, icon } = payload.notification;
        new Notification(title, {
          body: body || '',
          icon: icon || '/pwa-192x192.png',
        });
      }

      // Also store it in state if you want to show it in the UI:
      setNotif(payload.notification as { title: string; body: string });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Called when user clicks “Enable Notifications”
  const enableNotifications = async () => {
    try {
    //  console.log('[HeroByAnima] Requesting permission...');
      await requestNotificationPermission();

      //console.log('[HeroByAnima] Getting FCM token (forceRefresh)...');
      const fcmToken = await getFcmToken(true);
     // console.log('[HeroByAnima] New FCM Token:', fcmToken);

      // 3) POST that token to your server:
      const res = await fetch('https://digi-x697.onrender.com/save-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: fcmToken }),
      });
      const data = await res.json();
    //  console.log('[HeroByAnima] /save-token response →', data);

      if (data.success) {
        setToken(fcmToken);
      }
    } catch (err) {
      //console.error('[HeroByAnima] Notification permission or token error:', err);
      alert('Could not enable notifications. See console for details.');
    }
  };

  // Called when user clicks “Send Test Notification”
  const sendTestNotification = async () => {
  //  console.log('[HeroByAnima] sendTestNotification called');
    try {
      const res = await fetch('https://digi-x697.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Hi from Digilab',
          body: 'This is a test notification.',
        }),
      });
      const data = await res.json();
      console.log('[HeroByAnima] /send response →', data);
    } catch (err) {
      console.error('[HeroByAnima] Send notification error:', err);
    }
  };

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
