import { encode, decode } from "js-base64";
import { InputProps } from "./definitions";

export const encodeData = (query: InputProps) => encode(JSON.stringify(query));

export const decodeData = (base64: string | null) => {
  if (base64) {
    return JSON.parse(decode(base64));
  }
};
