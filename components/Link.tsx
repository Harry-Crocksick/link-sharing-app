"use client";

import { useExtraLinkContext } from "@/context/Context";
import { ExtraProps } from "@/utils/definitions";
import { Icon } from "@iconify/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Link({
  link,
  index,
}: {
  link: ExtraProps;
  index: number;
}) {
  const { data, setData } = useExtraLinkContext();
  const {
    attributes,
    isDragging,
    isOver,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: link.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: `${isDragging ? "#fafaf9" : "#fff"}`,
    touchAction: "none",
  };

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

  function handleDelete() {
    setData(data.filter((item) => item.id !== link.id));
  }

  return (
    <div className="relative">
      <button
        className={`${isDragging ? "opacity-0" : isOver ? "opacity-0" : "opacity-100"
          } block absolute -top-[0.5em] -right-[0.5em] rounded-full p-1 bg-gray-200 max-w-max z-50`}
        onClick={handleDelete}
      >
        <Icon icon={"radix-icons:cross-2"} width="1.35em" height="1.35em" />
      </button>
      <div
        className={`${isDragging && "z-50"
          } grid grid-cols-2 gap-x-8 gap-y-6 justify-center bg-white p-6 ring-1 ring-slate-900/5 rounded-md`}
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <button className="absolute top-0 -left-6">
          <Icon
            icon={"ic:outline-drag-indicator"}
            width="1.65rem"
            height="1.65rem"
          />
        </button>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Icon Key (optional)
          </label>
          <input
            type="text"
            name="iconKey"
            value={data[index].iconKey}
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
            value={data[index].label}
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
            value={data[index].url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md"
          />
        </div>
        <small className="text-gray-400 text-center col-span-full">
          Link shown in preview once label and url are added
        </small>
      </div>
    </div>
  );
}
