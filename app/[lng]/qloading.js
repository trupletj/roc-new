"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
function loading() {
  const [loading, setLoading] = useState(false);

  const current_color = "black";

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    console.log(url);
  }, [pathname, searchParams]);
  return (
    <div className="flex items-center justify-center fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50">
      <div className="relative">
     
        <div className="lds-ellipsis">
          <div style={{ backgroundColor: `${current_color} !important` }} />
          <div style={{ backgroundColor: `${current_color} !important` }} />
          <div style={{ backgroundColor: `${current_color} !important` }} />
          <div style={{ backgroundColor: `${current_color} !important` }} />
        
        </div>
      </div>
    </div>
  );
}

export default loading;
