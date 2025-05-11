import React from "react";
import { BlogPostByAnima } from "./sections/BlogPostByAnima";
import { CallToActionByAnima } from "./sections/CallToActionByAnima";
import { FeaturesByAnima } from "./sections/FeaturesByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { HeroByAnima } from "./sections/HeroByAnima";
import { LeftToRightByAnima } from "./sections/LeftToRightByAnima";
import { LeftToRightWrapperByAnima } from "./sections/LeftToRightWrapperByAnima/LeftToRightWrapperByAnima";
import { LogoSectionByAnima } from "./sections/LogoSectionByAnima";
import { TestimonialByAnima } from "./sections/TestimonialByAnima";
import Navbar from "../../components/ui/Navbar";
export const LandingPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-basewhite">
      <Navbar/>
      <HeroByAnima />
      <FeaturesByAnima />
      <LeftToRightByAnima />
      <LeftToRightWrapperByAnima />
      <TestimonialByAnima />
      <LogoSectionByAnima />
      <BlogPostByAnima />
      <CallToActionByAnima />
      <FooterByAnima />
    </main>
  );
};
