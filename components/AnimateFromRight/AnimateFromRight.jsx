// components/AnimateFromRight.js

"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function AnimateFromRight({ text }) {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (textRef.current && isVisible) {
      gsap.fromTo(
        textRef.current,
        { x: "100vw", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        }
      );
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
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
