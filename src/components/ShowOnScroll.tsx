"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function ShowOnScroll({ children }: Props) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowNavbar(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div
      style={{
        opacity: showNavbar ? 1 : 0,
        transition: "opacity .3s",
      }}
    >
      {children}
    </div>
  );
}
