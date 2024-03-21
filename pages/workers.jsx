import CommonContact from "@/components/contact";
import WorkersHero from "@/components/workers-page/hero";
import WorkersInfo from "@/components/workers-page/info";
import WorkersTable from "@/components/workers-page/table";
import WorkersPopup from "@/components/workers-page/popup";
import React, { useState } from "react";
import WorkersEditPopup from "@/components/workers-page/editpopup";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Workers() {
  const router = useRouter();

  useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login?redirect=" + router.pathname);
    },
  });

  const [PopupState, setPopupState] = useState(null);
  const [EditPopupState, setEditPopupState] = useState({
    visible: false,
    id: null,
  });

  if (router.query.reload == "true") {
    window.location.href = "/workers";
  }

  return (
    <section className="w-full h-auto">
      <WorkersHero />
      <WorkersInfo />
      <WorkersTable
        setPopupState={setPopupState}
        setEditPopupState={setEditPopupState}
        EditPopupState={EditPopupState}
        PopupState={PopupState}
      />
      <CommonContact />
      {PopupState && (
        <WorkersPopup setPopupState={setPopupState} PopupState={PopupState} />
      )}
      {EditPopupState.visible && (
        <WorkersEditPopup
          setEditPopupState={setEditPopupState}
          EditPopupState={EditPopupState}
        />
      )}
    </section>
  );
}
