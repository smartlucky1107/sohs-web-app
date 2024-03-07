import CommonContact from "@/components/contact"
import React, { useState } from "react"
import TestsHero from "@/components/test-page/hero"
import TestsInfo from "@/components/test-page/info"
import TestTable from "@/components/test-page/table"
import TestsPopup from "@/components/test-page/popup"
import TestsEditPopup from "@/components/test-page/editpopup"

export default function TestList() {
    const [PopupState, setPopupState] = useState (null);
    const [EditPopupState, setEditPopupState] = useState({
        visible: false,
        id: null
    });

    return (
        <section className="w-full h-auto">
            <TestsHero />
            <TestsInfo />
            <TestTable setPopupState={setPopupState} setEditPopupState={setEditPopupState} PopupState={PopupState}  />
            <CommonContact />
            {PopupState && (
                <TestsPopup setPopupState={setPopupState} PopupState={PopupState}  />
            )}
            {EditPopupState.visible && (
                <TestsEditPopup setEditPopupState={setEditPopupState} EditPopupState={EditPopupState}  />
            )}
        </section>
    )
}