import { InputProps } from "./definitions";

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
  phoneNumber: "+918888888888",
  youtube: "https://youtube.com/@john_snow",
  linkedin: "https://linkedin.com/john_snow",
  pinterest: "https://pinterest.com/john_snow",
  extra: [
    {
      l: "My Website",
      i: "ph:globe-duotone",
      u: "https://example.com",
    },
    {
      l: "Amazon wishlist",
      i: "ant-design:amazon-outlined",
      u: "https://amazon.in",
    },
    {
      l: "React JS course",
      i: "grommet-icons:reactjs",
      u: "https://reactjs.org/",
    },
    {
      l: "Donate for our cause",
      i: "iconoir:donate",
      u: "https://who.int",
    },
    {
      l: "Download my resume",
      i: "ph:file-pdf",
      u: "https://google.com",
    },
  ],
};
