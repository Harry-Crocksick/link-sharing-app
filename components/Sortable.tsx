import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

interface ItemType {
  id: number;
  name: string;
}

export default function Sortable() {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: "shark" },
    { id: 2, name: "fiona" },
  ]);

  return (
    <ReactSortable list={state} setList={setState}>
      {state.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-slate-100 hover:bg-slate-200 rounded-md mb-4"
        >
          {item.name}
        </div>
      ))}
    </ReactSortable>
  );
}
