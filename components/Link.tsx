"use client";

import { ExtraProps } from "@/utils/definitions";

export default function Link({
  data,
  setData,
  link,
}: {
  link: ExtraProps;
  data: ExtraProps[];
  setData: (prop: ExtraProps[]) => void;
}) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {}

  function handleDelete(id: number) {
    setData(data.filter((item) => item.id !== id));
  }

  return (
    <div className="relative group col-span-full lg:col-span-2 grid grid-cols-2 gap-x-8 gap-y-6 justify-center bg-white p-6 ring-1 ring-slate-900/5 rounded-md">
      <button
        className="absolute group-hover:block hidden -top-[0.5em] -right-[0.5em] rounded-full p-1 bg-gray-200 max-w-max"
        onClick={() => handleDelete(link.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div>
        <label htmlFor="name" className="block mb-2 text-sm">
          Icon Key (optional)
        </label>
        <input
          type="text"
          name="iconKey"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="url" className="block mb-2 text-sm">
          Label
        </label>
        <input
          type="text"
          name="label"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-full">
        <label htmlFor="url" className="block mb-2 text-sm">
          URL
        </label>
        <input
          type="url"
          name="url"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md"
        />
      </div>
      <small className="text-gray-400 text-center col-span-full">
        Link shown in preview once label and url are added
      </small>
    </div>
  );
}
