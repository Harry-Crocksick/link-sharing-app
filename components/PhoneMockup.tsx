"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useExtraLinkContext, useInputsContext } from "@/context/Context";

export default function PhoneMockup() {
  const { inputs } = useInputsContext();
  const { data } = useExtraLinkContext();

  return (
    <section className="sticky top-0 max-w-[425px] lg:max-w-[485px] px-4 border-l border-gray-200 w-full h-screen hidden lg:flex justify-center items-center bg-white">
      <div className="relative w-[375px] h-[735px] border-[10px] border-black rounded-[55px] overflow-y-scroll px-2 py-4 hide-scrollbar">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black w-40 h-8 rounded-b-2xl"></div>
        <div className="mt-12 text-center">
          <Image
            src={`${
              inputs.url
                ? inputs.url
                : "https://i.postimg.cc/d32BncbF/placeholder.png"
            }`}
            width={85}
            height={85}
            alt={inputs.name}
            priority
            className="object-contain w-[85px] h-[85px] rounded-full border-2 border-slate-200 mx-auto"
          />
          <h1 className="font-semibold text-xl text-black my-2">
            {inputs.name}
          </h1>
          <p>{inputs.about}</p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            {inputs.facebook && (
              <a href={inputs.facebook} target="_blank">
                <Icon
                  icon={"ph:facebook-logo-duotone"}
                  width="1.65em"
                  height="1.65em"
                />
              </a>
            )}
            {inputs.twitter && (
              <a href={inputs.twitter} target="_blank">
                <Icon
                  icon={"ph:twitter-logo-duotone"}
                  width="1.65em"
                  height="1.65em"
                />
              </a>
            )}
            {inputs.instagram && (
              <a href={inputs.instagram} target="_blank">
                <Icon
                  icon={"ph:instagram-logo-duotone"}
                  width="1.65em"
                  height="1.65em"
                />
              </a>
            )}
            {inputs.github && (
              <a href={inputs.github} target="_blank">
                <Icon
                  icon={"ph:github-logo-duotone"}
                  width="1.65em"
                  height="1.65em"
                />
              </a>
            )}
            {inputs.telegram && (
              <a href={inputs.telegram} target="_blank">
                <Icon
                  icon={"ph:telegram-logo-duotone"}
                  width="1.65em"
                  height="1.65em"
                />
              </a>
            )}
            {inputs.linkedin && (
              <a href={inputs.linkedin} target="_blank">
                <Icon
                  icon={"ph:linkedin-logo-duotone"}
                  width="1.65em"
                  height="1.65em"
                />
              </a>
            )}
            {inputs.email && (
              <a href={inputs.email} target="_blank">
                <Icon icon={"mdi:gmail"} width="1.65em" height="1.65em" />
              </a>
            )}
            {inputs.youtube && (
              <a href={inputs.youtube} target="_blank">
                <Icon
                  icon={"ph:youtube-logo-duotone"}
                  width="1.65em"
                  height="1.65em"
                />
              </a>
            )}
            {inputs.discord && (
              <a href={inputs.discord} target="_blank">
                <Icon
                  icon={"mingcute:discord-fill"}
                  width="1.65em"
                  height="1.65em"
                />
              </a>
            )}
          </div>
          <div className="mt-4 flex flex-col space-y-2">
            {data.map((list) => (
              <Fragment key={list.id}>
                {list.label && list.url && (
                  <a
                    href={list.url}
                    className="w-full inline-flex items-center space-x-4 p-4 rounded-md bg-slate-50 hover:bg-slate-100"
                    target="_blank"
                  >
                    <span className="w-5 h-5 inline-flex items-center">
                      <Icon
                        icon={
                          list.iconKey ? list.iconKey : "ph:link-simple-duotone"
                        }
                      />
                    </span>
                    <span>{list.label}</span>
                  </a>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
