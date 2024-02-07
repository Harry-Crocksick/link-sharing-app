"use client";

import { Fragment } from "react";
import Image from "next/image";
import { decodeData } from "@/utils/transform";
import { InputProps, PageProps } from "@/utils/definitions";
import { Icon } from "@iconify/react";

export default function Page({ params, searchParams }: PageProps) {
  const inputs: InputProps = decodeData(searchParams.data);

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <img
          src="https://play.tailwindcss.com/img/beams.jpg"
          alt="Beams"
          className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          width={1308}
          height={1080}
        />
        <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative bg-white px-6 pt-10 pb-8 ring-1 ring-slate-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className="text-center">
            <Image
              src={`${inputs.url
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
                <a href={`mailto:${inputs.email}`} target="_blank">
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
              {inputs.extra.map((list) => (
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
                            list.iconKey
                              ? list.iconKey
                              : "ph:link-simple-duotone"
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
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
