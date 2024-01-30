import { ComponentProps, InputProps } from "@/utils/definitions";

export default function ProfileForm({ inputs, setInputs }: ComponentProps) {
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
    <div className="bg-teal-500">
      <div>
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={inputs.name}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div>
        <label htmlFor="about" className="block">
          About yourself
        </label>
        <textarea
          name="about"
          id="about"
          cols={30}
          rows={10}
          value={inputs.about}
          onChange={handleTextAreaChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="url" className="block">
          Photo Url
        </label>
        <input
          type="url"
          name="url"
          id="url"
          value={inputs.url}
          onChange={handleChange}
          className="w-full"
        />
      </div>
    </div>
  );
}
