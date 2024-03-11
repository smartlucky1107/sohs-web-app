import CommonContact from "@/components/contact";
import React, { useState } from "react";
import ResultHero from "@/components/test-result/hero";
import ResultInfo from "@/components/test-result/info";
import TestsResult from "@/components/test-result/result";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function TestResult() {
  const router = useRouter();

  useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  return (
    <section className="w-full h-auto">
      <ResultHero />
      <ResultInfo />
      <TestsResult />
      <CommonContact />
    </section>
  );
}
