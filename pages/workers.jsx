import CommonContact from "@/components/contact"
import WorkersHero from "@/components/workers-page/hero"
import WorkersInfo from "@/components/workers-page/info"
import WorkersTable from "@/components/workers-page/table"
import WorkersPopup from "@/components/workers-page/popup"
import React, { useState } from "react"

export default function Workers() {
    const [PopupState, setPopupState] = useState (null);

    return (
        <section className="w-full h-auto">
            <WorkersHero />
            <WorkersInfo />
            <WorkersTable setPopupState={setPopupState} PopupState={PopupState}  />
            <CommonContact />
            {PopupState && (
                <WorkersPopup setPopupState={setPopupState} PopupState={PopupState}  />
            )}
        </section>
    )
}