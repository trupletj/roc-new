"use client";
import React, { useEffect, useState } from "react";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
function PreLoader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const current_color = "black";
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log("route changed to", url);
    };
    // router.events.on("routeChangeStart", handleRouteChange);

    console.log(router);
    return () => {
      // router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const url = pathname + searchParams.toString();
    console.log(url);
  }, [pathname, searchParams]);
  return (
    <div className="container flex items-center justify-center fixed">
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

export default PreLoader;
