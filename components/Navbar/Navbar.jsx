"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";

export default function Navbar() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <div className={styles.leftSide}>
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <div className={styles.subLogo}>
            <hr className={styles.line} />
            <span>Based in Peru</span>
          </div>
        </div>

        <div className={styles.rightSide}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/approach">Approach</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <Button
            sx={{
              bgcolor: theme.palette.primary.main,
              color: "black",
              borderRadius: "20px",
            }}
          >
            English
          </Button>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <Menu />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`${styles.mobileNav} ${
          isOpen ? styles.showMobileNav : styles.hideMobileNav
        }`}
      >
        <button className={styles.closeBtn} onClick={toggleMenu}>
          ✕
        </button>
        <ul>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Approach
            </Link>
          </li>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Button
              sx={{
                bgcolor: theme.palette.primary.main,
                color: "black",
                borderRadius: "20px",
              }}
              onClick={toggleMenu}
            >
              English
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
