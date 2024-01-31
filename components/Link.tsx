"use client";

import { useExtraLinkContext } from "@/context/Context";
import { ExtraProps } from "@/utils/definitions";

export default function Link({ link }: { link: ExtraProps }) {
  const { data, setData } = useExtraLinkContext();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setData(
      data.map((datum) => {
        if (datum.id === link.id) {
          return {
            ...datum,
            [event.target.name]: event.target.value,
          };
        }
        return datum;
      })
    );
  }

  function handleDelete(id: number) {
    setData(data.filter((item) => item.id !== id));
  }

  return (
    <div className="relative group grid grid-cols-2 gap-x-8 gap-y-6 justify-center bg-white p-6 ring-1 ring-slate-900/5 rounded-md">
      <button className="absolute top-0 -left-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          role="img"
          className="icon h-6 w-6 text-slate-500 drag-handle"
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.5 4.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m4 0a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25M10.625 7.5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0M5.5 8.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m5.125 2.875a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0M5.5 12.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
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
