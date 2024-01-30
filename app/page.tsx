"use client";

import { useState } from "react";
import { MainSidebar, PhoneMockup } from "@/components";
import { InputProps } from "@/utils/definitions";

export default function Home() {
  const [inputs, setInputs] = useState<InputProps>({
    name: "",
    about: "",
    url: "",
    facebook: "",
    twitter: "",
    instagram: "",
    github: "",
    telegram: "",
    linkedin: "",
    email: "",
    youtube: "",
    pinterest: "",
    phoneNumber: "",
    extra: [],
  });

  return (
    <main className="flex">
      <MainSidebar inputs={inputs} setInputs={setInputs} />
      <PhoneMockup inputs={inputs} />
    </main>
  );
}
