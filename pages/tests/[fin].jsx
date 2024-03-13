import CommonContact from "@/components/contact";
import React, { useState } from "react";
import ResultHero from "@/components/test-result/hero";
import ResultInfo from "@/components/test-result/info";
import TestsResult from "@/components/edit-test/result";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function TestResult() {
  const router = useRouter();

  useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login?redirect=" + router.pathname);
    },
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="w-full h-auto">
      <ResultHero />

      <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-7 mt-5">
        <button
          onClick={handlePrint}
          className="ml-auto block bg-green-500 py-2 px-4 rounded text-white text-sm"
        >
          Print
        </button>
      </div>

      <div id="section-to-print">
        <ResultInfo />
        <TestsResult fin={router.query.fin} />
      </div>

      <CommonContact />
    </section>
  );
}
