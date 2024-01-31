"use client";

import { useExtraLinkContext } from "@/context/Context";
import { ExtraProps } from "@/utils/definitions";
import { Icon } from "@iconify/react";

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
    <div className="relative grid grid-cols-2 gap-x-8 gap-y-6 justify-center bg-white p-6 ring-1 ring-slate-900/5 rounded-md">
      <button className="absolute top-0 -left-6">
        <Icon
          icon={"ic:outline-drag-indicator"}
          width="1.65rem"
          height="1.65rem"
        />
      </button>
      <button
        className="absolute -top-[0.5em] -right-[0.5em] rounded-full p-1 bg-gray-200 max-w-max"
        onClick={() => handleDelete(link.id)}
      >
        <Icon icon={"radix-icons:cross-2"} width="1.35em" height="1.35em" />
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
