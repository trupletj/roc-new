"use client";
import { useTranslation } from "@/app/i18n/client";
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
function welcome({ lng }) {
  const { t } = useTranslation(lng, "header");

  const { user } = useContext(GlobalContext);
  return (
    <p>
      {t("hello")}
      {user && <span className="font-normal mx-1">{user.phone || user.email}</span>}
      {!user && ","}
      {t("welcome")}
    </p>
  );
}

export default welcome;
