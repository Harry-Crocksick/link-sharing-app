"use client";

import Link from "./Link";
import { ReactSortable } from "react-sortablejs";
import { useExtraLinkContext } from "@/context/Context";
// import { v4 as uuid } from "uuid";

let nextId = 0;

export default function Links() {
  const { data, setData } = useExtraLinkContext();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setData([
      ...data,
      {
        id: nextId++,
        iconKey: "",
        label: "",
        url: "",
      },
    ]);
    console.log(data);
  }

  return (
    <div className="grid grid-cols-3 gap-4 py-6">
      <div className="col-span-full lg:col-span-1">
        <div className="sticky top-8">
          <h1 className="text-black text-lg">Links</h1>
          <p className="text-sm text-gray-500">Add some links here</p>
          <small>
            Icon keys can be found in{" "}
            <a
              href="https://icones.js.org/"
              target="_blank"
              className="underline hover:text-slate-700"
            >
              https://icones.js.org/
            </a>
            .{" "}
          </small>
        </div>
      </div>
      {data.length > 0 && (
        <ReactSortable
          ghostClass="blue-background"
          animation={200}
          list={data}
          setList={setData}
          className="col-span-full lg:col-span-2 flex flex-col space-y-6"
        >
          {data.length > 0 &&
            data.map((link) => <Link key={link.id} link={link} />)}
        </ReactSortable>
      )}
      <button
        className="col-span-full lg:col-start-2 py-1.5 flex items-center justify-center border border-gray-400 rounded-md mt-4"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.65em"
          height="1.65em"
          viewBox="0 0 24 24"
          className="text-gray-500/75"
        >
          <path
            fill="currentColor"
            d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
          ></path>
        </svg>
      </button>
    </div>
  );
}
