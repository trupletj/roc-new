"use client";
import React from "react";
import { useTranslation } from "@/app/i18n/client";

function Paths({ lng }) {
  const { t } = useTranslation(lng, "client");
  return (
    <div className="flex flex-row container py-2 text-gray-500 border-b border-b-gray-900">
      <span>Сагс</span>
      <span className="mx-1">-</span>

      <span className="text-[#F0B450]">Захиалгын хаяг</span>
      <span className="mx-1">-</span>

      <span>Баталгаажуулах</span>
      <span className="mx-1">-</span>

      <span>Захиалгын мэдээлэл</span>
    </div>
  );
}

export default Paths;
