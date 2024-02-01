import { ExtraProps, InputProps } from "./definitions";

export const prefillDemoData: InputProps = {
  name: "John Snow",
  about: "I'm John Snow, the king in the north. I know Nothing.",
  url: "https://i.insider.com/56743fad72f2c12a008b6cc0",
  facebook: "https://www.facebook.com/john_snow",
  twitter: "https://twitter.com/john_snow",
  instagram: "https://www.instagram.com/john_snow",
  email: "mail@john_snow.cc",
  github: "https://github.com/john_snow",
  telegram: "https://t.me/john_snow",
  youtube: "https://youtube.com/@john_snow",
  linkedin: "https://linkedin.com/john_snow",
  // pinterest: "https://pinterest.com/john_snow",
  discord: "https://discord.com/user/john_snow",
  extra: [],
};

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
