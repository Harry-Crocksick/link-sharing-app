import { ComponentProps } from "@/utils/definitions";
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";

export default function MainSidebar({ inputs, setInputs }: ComponentProps) {
  return (
    <div className="flex-1 flex flex-col divide-y w-full min-h-screen p-6 pb-[1000px] bg-slate-100">
      <Profile inputs={inputs} setInputs={setInputs} />
      <SocialLinks inputs={inputs} setInputs={setInputs} />
    </div>
  );
}
