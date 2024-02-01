import { ExtraProps, InputProps } from "./definitions";

export const extraDemoLinks: ExtraProps[] = [
  {
    id: 1,
    label: "My Website",
    iconKey: "ph:globe-duotone",
    url: "https://example.com",
  },
  {
    id: 2,
    label: "Amazon wishlist",
    iconKey: "ant-design:amazon-outlined",
    url: "https://amazon.in",
  },
  {
    id: 3,
    label: "React JS course",
    iconKey: "grommet-icons:reactjs",
    url: "https://reactjs.org/",
  },
  {
    id: 4,
    label: "Donate for our cause",
    iconKey: "iconoir:donate",
    url: "https://who.int",
  },
  {
    id: 5,
    label: "Download my resume",
    iconKey: "ph:file-pdf",
    url: "https://google.com",
  },
];

export const prefillDemoData: InputProps = {
  name: "Elon Musk",
  about: "I'm Elon Musk, CEO of the SpaceX and Tesla. I'm rich!.",
  url: "https://i.postimg.cc/sgwFCmyY/elonmusk.jpg",
  facebook: "https://www.facebook.com/elon_musk",
  twitter: "https://twitter.com/elonmusk",
  instagram: "https://www.instagram.com/elon_musk",
  email: "mail@elon_musk.com",
  github: "https://github.com/elon_musk",
  telegram: "https://t.me/elon_musk",
  youtube: "https://youtube.com/@elon_musk",
  linkedin: "https://linkedin.com/elon_musk",
  // pinterest: "https://pinterest.com/john_snow",
  discord: "https://discord.com/user/elon_musk",
  extra: [...extraDemoLinks],
};
