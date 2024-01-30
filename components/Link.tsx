export default function Link() {
  return (
    <div className="col-span-full lg:col-span-2 grid grid-cols-2 gap-x-8 gap-y-6 justify-center bg-white p-6 ring-1 ring-slate-900/5 rounded-md">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm">
          Icon Key (optional)
        </label>
        <input
          type="text"
          name="iconKey"
          className="w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="url" className="block mb-2 text-sm">
          Label
        </label>
        <input
          type="url"
          name="label"
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
          className="w-full border border-gray-300 rounded-md"
        />
      </div>
      <small className="text-gray-400 text-center col-span-full">
        Link shown in preview once label and url are added
      </small>
    </div>
  );
}
