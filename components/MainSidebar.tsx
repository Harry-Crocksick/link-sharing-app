import Profile from "./Profile";
import SocialLinks from "./SocialLinks";
import Links from "./Links";

export default function MainSidebar() {
  return (
    <div className="flex-1 flex flex-col divide-y w-full min-h-screen p-6 bg-slate-100">
      <Profile />
      <SocialLinks />
      <Links />
    </div>
  );
}
