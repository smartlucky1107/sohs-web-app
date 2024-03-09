import CommonContact from "@/components/contact"
import React, { useState } from "react"
import ResultHero from "@/components/test-result/hero"
import ResultInfo from "@/components/test-result/info"
import TestsResult from "@/components/test-result/result";

export default function TestResult() {
    return (
        <section className="w-full h-auto">
            <ResultHero />
            <ResultInfo /> 
            <TestsResult />
            <CommonContact />
        </section>
    )
}