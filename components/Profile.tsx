import { ComponentProps } from "@/utils/definitions";

export default function Profile({ inputs, setInputs }: ComponentProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="relative grid grid-cols-3 gap-4 pt-2 pb-6">
      <div className="col-span-1">
        <div className="sticky top-8">
          <h1 className="text-black text-lg">Profile</h1>
          <p className="text-sm text-gray-500">
            Some public information about you
          </p>
        </div>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 bg-white p-6 ring-1 ring-slate-900/5 rounded-md">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={inputs.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="about" className="block mb-2 text-sm">
            About yourself
          </label>
          <textarea
            name="about"
            id="about"
            cols={30}
            rows={3}
            placeholder="I am a developer"
            value={inputs.about}
            onChange={handleTextAreaChange}
            className="border border-gray-300 w-full rounded-md placeholder:text-slate-400 placeholder:text-base"
          ></textarea>
        </div>
        <div>
          <label htmlFor="url" className="block mb-2 text-sm">
            Photo Url
          </label>
          <input
            type="url"
            name="url"
            id="url"
            value={inputs.url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
