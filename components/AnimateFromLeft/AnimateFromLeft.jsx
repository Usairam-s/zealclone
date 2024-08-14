"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimateFromLeft({ text }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: "-100vw", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        }
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
