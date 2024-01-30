import { InputProps } from "@/utils/definitions";
import Image from "next/image";

export default function PhoneMockup({ inputs }: { inputs: InputProps }) {
  return (
    <section className="sticky top-0 max-w-[485px] border-l border-gray-200 w-full h-screen flex justify-center items-center bg-white">
      <div className="phone relative w-[375px] h-[735px] border-8 border-black rounded-[55px] overflow-y-scroll px-2 py-4">
        <div className="notch absolute -top-2 left-1/2 -translate-x-1/2 bg-black w-40 h-8 rounded-b-2xl"></div>
        <div className="mt-12 text-center">
          <Image
            src={"https://i.postimg.cc/ydrdhbXG/chae.jpg"}
            width={85}
            height={85}
            alt={inputs.name}
            priority
            className="object-contain rounded-full border-2 border-slate-200 mx-auto"
          />
          <p>{inputs.name}</p>
          <p>{inputs.about}</p>
          <p>{inputs.url}</p>
          <p>{inputs.facebook}</p>
          <p>{inputs.instagram}</p>
          <p>{inputs.github}</p>
          <p>{inputs.twitter}</p>
          <p>{inputs.telegram}</p>
          <p>{inputs.phoneNumber}</p>
          <p>{inputs.linkedin}</p>
          <p>{inputs.email}</p>
        </div>
      </div>
    </section>
  );
}
