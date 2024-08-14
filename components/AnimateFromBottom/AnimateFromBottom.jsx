"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function AnimateFromBottom({ text }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: "100px", opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
