"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { decodeData } from "@/utils/transform";
import { InputProps, PageProps } from "@/utils/definitions";

export default function Page({ params, searchParams }: PageProps) {
  //   const searchParams = useSearchParams();
  const decodedQuery: InputProps = decodeData(searchParams?.data);

  /* useEffect(() => {
    const decodedQuery = decodeData(searchParams.get("data"));
    console.log(decodedQuery);
  }, [params.id]); */

  return (
    <>
      <h1>user page {params.id}</h1>
      <p>{decodedQuery.name}</p>
      <p>{decodedQuery.about}</p>
      <p>{decodedQuery.url}</p>
    </>
  );
}
