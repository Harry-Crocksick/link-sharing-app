import { ComponentProps } from "@/utils/definitions";

export default function SocialLinks({ inputs, setInputs }: ComponentProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="grid grid-cols-3 gap-4 py-6">
      <div className="col-span-1">
        <div className="sticky top-8">
          <h1 className="text-black text-lg">Social Links</h1>
          <p className="text-sm text-gray-500">Add some social media links</p>
        </div>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 bg-white p-6 ring-1 ring-slate-900/5 rounded-md">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          <div className="flex h-10">
            <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96"
                    opacity=".2"
                  ></path>
                  <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0"></path>
                </g>
              </svg>
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
          <div className="flex h-10">
            <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="m240 72l-32 32c-4.26 66.84-60.08 120-128 120c-32 0-40-12-40-12s32-12 48-36c0 0-55.15-32-47.22-120c0 0 39.66 40 87.22 48V88c0-22 18-40.27 40-40a40.74 40.74 0 0 1 36.67 24Z"
                    opacity=".2"
                  ></path>
                  <path d="M247.39 68.94A8 8 0 0 0 240 64h-30.43a48.65 48.65 0 0 0-41.47-24a46.87 46.87 0 0 0-33.74 13.7A47.87 47.87 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.3 47.79 9.57 79.77 22 98.18a110.92 110.92 0 0 0 21.89 24.2c-15.27 17.53-39.25 26.74-39.5 26.84a8 8 0 0 0-3.85 11.93c.74 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.68 0 129.72-54.42 135.76-124.44l29.9-29.9a8 8 0 0 0 1.73-8.72m-45 29.41a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08c11.52-6.25 27.56-17 37.88-32.48a8 8 0 0 0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54 124.11 48 100.38 48 73.09c16 13 45.25 33.18 78.69 38.8A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A30.89 30.89 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 0 0 7.33 4.79h16Z"></path>
                </g>
              </svg>
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
          <div className="flex h-10">
            <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M176 32H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-48 136a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
                    opacity=".2"
                  ></path>
                  <path d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Zm-88-96a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m64-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></path>
                </g>
              </svg>
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
          <div className="flex h-10">
            <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M208 104v8a48 48 0 0 1-48 48h-24a32 32 0 0 1 32 32v40h-64v-40a32 32 0 0 1 32-32h-24a48 48 0 0 1-48-48v-8a49.28 49.28 0 0 1 8.51-27.3A51.92 51.92 0 0 1 76 32a52 52 0 0 1 43.83 24h32.34A52 52 0 0 1 196 32a51.92 51.92 0 0 1 3.49 44.7A49.28 49.28 0 0 1 208 104"
                    opacity=".2"
                  ></path>
                  <path d="M208.3 75.68A59.74 59.74 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58 58 0 0 0-7.7-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.76 41.76 0 0 1 7 22.52Z"></path>
                </g>
              </svg>
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
          <div className="flex h-10">
            <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M88 200v-65.13l44.37 38.91l-30.61 31.76A8 8 0 0 1 88 200M230.63 32.07L28 111.38a6.23 6.23 0 0 0 1 11.92l59 11.57L232 33.22a1 1 0 0 0-1.37-1.15"
                    opacity=".2"
                  ></path>
                  <path d="M236.88 26.19a9 9 0 0 0-9.16-1.57L25.06 103.93a14.22 14.22 0 0 0 2.43 27.21L80 141.45V200a15.92 15.92 0 0 0 10 14.83a15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L173 220a15.88 15.88 0 0 0 10.51 4a16.3 16.3 0 0 0 5-.79a15.85 15.85 0 0 0 10.67-11.63L239.77 35a9 9 0 0 0-2.89-8.81m-61.14 36l-89.59 64.16l-49.61-9.73ZM96 200v-47.48l24.79 21.74Zm87.53 8l-82.68-72.5l119-85.29Z"></path>
                </g>
              </svg>
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
          <div className="flex h-10">
            <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M224 40v176a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
                    opacity=".2"
                  ></path>
                  <path d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></path>
                </g>
              </svg>
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
          <div className="flex h-10">
            <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="icon w-5 h-5"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
                data-v-6e89ca90=""
              >
                <g fill="currentColor">
                  <path d="m224 56l-96 88l-96-88Z" opacity=".2"></path>
                  <path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"></path>
                </g>
              </svg>
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
          <div className="flex h-10">
            <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M226.59 71.53a16 16 0 0 0-9.63-11C183.48 47.65 128 48 128 48s-55.48-.35-89 12.58a16 16 0 0 0-9.63 11C27.07 80.54 24 98.09 24 128s3.07 47.46 5.41 56.47A16 16 0 0 0 39 195.42C72.52 208.35 128 208 128 208s55.48.35 89-12.58a16 16 0 0 0 9.63-10.95c2.34-9 5.41-26.56 5.41-56.47s-3.11-47.46-5.45-56.47M112 160V96l48 32Z"
                    opacity=".2"
                  ></path>
                  <path d="m164.44 121.34l-48-32A8 8 0 0 0 104 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 145.05V111l25.58 17Zm114.33-75.53a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-15.49 113a8 8 0 0 1-4.77 5.49c-31.65 12.22-85.48 12-86.12 12s-54.37.18-86-12a8 8 0 0 1-4.77-5.49C34.8 173.39 32 156.57 32 128s2.8-45.39 5.16-54.47A8 8 0 0 1 41.93 68c31.65-12.18 85.47-12 86.12-12s54.37-.18 86 12a8 8 0 0 1 4.77 5.49C221.2 82.61 224 99.43 224 128s-2.8 45.39-5.16 54.47Z"></path>
                </g>
              </svg>
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
          <div className="flex h-10">
            <span className="bg-gray-100 inline-flex items-center p-4 border border-gray-300 -mr-1 rounded-s-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.5 20h3q.2 0 .35-.15t.15-.35q0-.2-.15-.35T13.5 19h-3q-.2 0-.35.15t-.15.35q0 .2.15.35t.35.15M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5v3h10v-3zm0-2h10V6H7zM7 4h10V3H7zm0 14v3zM7 4V3z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              name="phoneNumber"
              placeholder="+959 445 539 703"
              value={inputs.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-e-md placeholder:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
