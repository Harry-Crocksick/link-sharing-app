"use client";

import { useInputsContext } from "@/context/Context";
import { Icon } from "@iconify/react";

export default function SocialLinks() {
  const { inputs, setInputs } = useInputsContext();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="grid grid-cols-3 gap-4 py-6">
      <div className="col-span-full lg:col-span-1">
        <div className="sticky top-8">
          <h1 className="text-black text-lg">Social Links</h1>
          <p className="text-sm text-gray-500">Add some social media links</p>
        </div>
      </div>
      <div className="col-span-full lg:col-span-2 flex flex-col space-y-4 bg-white p-6 ring-1 ring-slate-900/5 rounded-md">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div className="max-lg:col-span-full">
            <h1 className="mb-2">Facebook</h1>
            <div className="flex h-10">
              <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
                <Icon
                  icon={"ph:facebook-logo-duotone"}
                  width="1.35em"
                  height="1.35em"
                />
              </span>
              <input
                type="text"
                name="facebook"
                placeholder="https://fb.com/elonmusk"
                value={inputs.facebook}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-e-md placeholder:text-sm"
              />
            </div>
          </div>
          <div className="max-lg:col-span-full">
            <h1 className="mb-2">Twitter</h1>
            <div className="flex h-10">
              <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
                <Icon
                  icon={"ph:twitter-logo-duotone"}
                  width="1.35em"
                  height="1.35em"
                />
              </span>
              <input
                type="text"
                name="twitter"
                placeholder="https://twitter.com/elonmusk"
                value={inputs.twitter}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-e-md placeholder:text-sm"
              />
            </div>
          </div>
          <div className="max-lg:col-span-full">
            <h1 className="mb-2">Instagram</h1>
            <div className="flex h-10">
              <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
                <Icon
                  icon={"ph:instagram-logo-duotone"}
                  width="1.35em"
                  height="1.35em"
                />
              </span>
              <input
                type="text"
                name="instagram"
                placeholder="https://instagram.com/elonmusk"
                value={inputs.instagram}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-e-md placeholder:text-sm"
              />
            </div>
          </div>
          <div className="max-lg:col-span-full">
            <h1 className="mb-2">Github</h1>
            <div className="flex h-10">
              <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
                <Icon
                  icon={"ph:github-logo-duotone"}
                  width="1.35em"
                  height="1.35em"
                />
              </span>
              <input
                type="text"
                name="github"
                placeholder="https://github.com/elonmusk"
                value={inputs.github}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-e-md placeholder:text-sm"
              />
            </div>
          </div>
          <div className="max-lg:col-span-full">
            <h1 className="mb-2">Telegram</h1>
            <div className="flex h-10">
              <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
                <Icon
                  icon={"ph:telegram-logo-duotone"}
                  width="1.35em"
                  height="1.35em"
                />
              </span>
              <input
                type="text"
                name="telegram"
                placeholder="https://t.me/elonmusk"
                value={inputs.telegram}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-e-md placeholder:text-sm"
              />
            </div>
          </div>
          <div className="max-lg:col-span-full">
            <h1 className="mb-2">LinkedIn</h1>
            <div className="flex h-10">
              <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
                <Icon
                  icon={"ph:linkedin-logo-duotone"}
                  width="1.35em"
                  height="1.35em"
                />
              </span>
              <input
                type="text"
                name="linkedin"
                placeholder="https://linkedin.com/elonmusk"
                value={inputs.linkedin}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-e-md placeholder:text-sm"
              />
            </div>
          </div>
          <div className="max-lg:col-span-full">
            <h1 className="mb-2">Gmail</h1>
            <div className="flex h-10">
              <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
                <Icon icon={"mdi:gmail"} width="1.35em" height="1.35em" />
              </span>
              <input
                type="email"
                name="email"
                placeholder="elonmusk@gmail.com"
                value={inputs.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-e-md placeholder:text-sm"
              />
            </div>
          </div>
          <div className="max-lg:col-span-full">
            <h1 className="mb-2">Youtube</h1>
            <div className="flex h-10">
              <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
                <Icon
                  icon={"ph:youtube-logo-duotone"}
                  width="1.35em"
                  height="1.35em"
                />
              </span>
              <input
                type="text"
                name="youtube"
                placeholder="https://youtube.com/elonmusk"
                value={inputs.youtube}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-e-md placeholder:text-sm"
              />
            </div>
          </div>
          <div className="max-lg:col-span-full">
            <h1 className="mb-2">Discord</h1>
            <div className="flex h-10">
              <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
                <Icon
                  icon={"mingcute:discord-fill"}
                  width="1.35em"
                  height="1.35em"
                />
              </span>
              <input
                type="text"
                name="discord"
                placeholder="https://discord.com/users/id"
                value={inputs.discord}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-e-md placeholder:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
