"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

export const RouteLoader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // simulate loading delay — you could replace this with actual transition logic
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // adjust for your animation length

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <Loader2 className="w-10 h-10 animate-spin text-primary z-60 relative" />
    </div>
  );
}
