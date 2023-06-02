"use client";
import { useFormContext } from "@/src/contexts/DataForm";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page1 = () => {
  const router = useRouter();
  const { form } = useFormContext();
  console.log({ form });
  return (
    <div className="flex flex-column">
      <span>Page 1</span>
      <Link href="page2">
        <span>Page 2</span>
      </Link>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // ...
//   const { resolvedUrl } = context
//   let initialForm = ""
//   const routeForm = ["page1", "page2"]

//   if (routeForm.includes(resolvedUrl)) {
//     initialForm = "Data Context Form"
//   }

//   return {
//     props: {
//       initialForm
//     }
//   }
// };

export default Page1;
