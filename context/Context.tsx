"use client";

import { useState, useContext, createContext } from "react";
import {
  ComponentProps,
  ExtraLinkContextTypes,
  ExtraProps,
  InputProps,
} from "@/utils/definitions";

export const ExtraLinkContext = createContext<ExtraLinkContextTypes | null>(
  null
);
export const InputsContext = createContext<ComponentProps | null>(null);

export function useInputsContext() {
  const inputsContext = useContext(InputsContext);
  if (!inputsContext) {
    throw new Error(
      "useInputsContext must be used within <InputsContext.Provider>"
    );
  }
  return inputsContext;
}

export function useExtraLinkContext() {
  const extraLinkContext = useContext(ExtraLinkContext);
  if (!extraLinkContext) {
    throw new Error(
      "useExtraLinkContext must be used within <ContextProvider.Provider>"
    );
  }
  return extraLinkContext;
}

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
    discord: "",
    extra: [],
  });
  const [data, setData] = useState<ExtraProps[]>([]);

  return (
    <InputsContext.Provider value={{ inputs, setInputs }}>
      <ExtraLinkContext.Provider value={{ data, setData }}>
        {children}
      </ExtraLinkContext.Provider>
    </InputsContext.Provider>
  );
}
