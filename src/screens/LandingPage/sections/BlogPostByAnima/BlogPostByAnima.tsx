import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Blog post data for mapping
const blogPosts = [
  {
    id: 1,
    image: "/rectangle-1.png",
    title: "Organize your digital assets with a new methodology here.",
    description:
      "Podcasting operational management inside of workflows to establish a framework seamless.\nConvergence collaboratively.",
    author: {
      name: "Andrew Miller",
      role: "CEO",
      avatar: "..//avatar-1.png",
    },
    date: "25 Apr",
  },
  {
    id: 2,
    image: "/rectangle-1-1.png",
    title: "Organize your digital assets with a new methodology here.",
    description:
      "Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.",
    author: {
      name: "David Munsan",
      role: "UX",
      avatar: "..//avatar-2.png",
    },
    date: "25 Apr",
  },
  {
    id: 3,
    image: "/rectangle-1-2.png",
    title: "Organize your digital assets with a new methodology here.",
    description:
      "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C.",
    author: {
      name: "Andrew Meller",
      role: "UI",
      avatar: "..//avatar-3.png",
    },
    date: "25 Apr",
  },
];

export const BlogPostByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-16 bg-basewhite">
      <div className="flex flex-col items-center justify-center gap-3 px-8 max-w-[1280px] w-full">
        <div className="flex flex-col items-center justify-center gap-2 max-w-[800px] w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="font-headline-m-desktop-bold font-[number:var(--headline-m-desktop-bold-font-weight)] text-gray-700 text-[length:var(--headline-m-desktop-bold-font-size)] text-center tracking-[var(--headline-m-desktop-bold-letter-spacing)] leading-[var(--headline-m-desktop-bold-line-height)] [font-style:var(--headline-m-desktop-bold-font-style)]">
              Latest Blog Posts
            </h2>

            <p className="font-text-l-regular font-[number:var(--text-l-regular-font-weight)] text-gray-50 text-[length:var(--text-l-regular-font-size)] text-center tracking-[var(--text-l-regular-letter-spacing)] leading-[var(--text-l-regular-line-height)] [font-style:var(--text-l-regular-font-style)]">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-[1280px] w-full">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="flex flex-col rounded-[5px] border-none"
          >
            <div className="relative w-full h-[300px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Blog post featured image"
                src={post.image}
              />
            </div>

            <CardContent className="flex flex-col gap-10 p-0 pt-6">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="font-headline-XS-desktop-semibold font-[number:var(--headline-XS-desktop-semibold-font-weight)] text-gray-700 text-[length:var(--headline-XS-desktop-semibold-font-size)] tracking-[var(--headline-XS-desktop-semibold-letter-spacing)] leading-[var(--headline-XS-desktop-semibold-line-height)] [font-style:var(--headline-XS-desktop-semibold-font-style)]">
                    {post.title}
                  </h3>

                  <p className="font-text-l-regular font-[number:var(--text-l-regular-font-weight)] text-gray-50 text-[length:var(--text-l-regular-font-size)] tracking-[var(--text-l-regular-letter-spacing)] leading-[var(--text-l-regular-line-height)] [font-style:var(--text-l-regular-font-style)]">
                    {post.description}
                  </p>
                </div>
              </div>

              <Separator className="bg-neutral-100" />

              <div className="flex items-center gap-[25px] w-full">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={post.author.avatar}
                      alt={post.author.name}
                    />
                    <AvatarFallback>
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <span className="font-text-s-medium font-[number:var(--text-s-medium-font-weight)] text-gray-700 text-[length:var(--text-s-medium-font-size)] tracking-[var(--text-s-medium-letter-spacing)] leading-[var(--text-s-medium-line-height)] whitespace-nowrap [font-style:var(--text-s-medium-font-style)]">
                      {post.author.name}
                    </span>

                    <span className="font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-gray-50 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                      {post.author.role}
                    </span>
                  </div>
                </div>

                <span className="ml-auto font-text-s-medium font-[number:var(--text-s-medium-font-weight)] text-gray-50 text-[length:var(--text-s-medium-font-size)] text-right tracking-[var(--text-s-medium-letter-spacing)] leading-[var(--text-s-medium-line-height)] [font-style:var(--text-s-medium-font-style)]">
                  {post.date}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
