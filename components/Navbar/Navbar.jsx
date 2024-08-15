"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { SvgIcon } from "../SvgIcon/SvgIcon";

export default function Navbar() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <div className={styles.leftSide}>
          <SvgIcon color="#B4F046" />
          <div className={styles.subLogo}>
            <hr className={styles.line} />
            <span>Based in Peru</span>
          </div>
        </div>

        <div className={styles.rightSide}>
          <ul>
            <li>
              <Link
                href="/"
                className={
                  pathname === "/" ? styles.activeLink : styles.navLink
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  pathname === "/about" ? styles.activeLink : styles.navLink
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/approach"
                className={
                  pathname === "/approach" ? styles.activeLink : styles.navLink
                }
              >
                Approach
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className={
                  pathname === "/portfolio" ? styles.activeLink : styles.navLink
                }
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  pathname === "/contact" ? styles.activeLink : styles.navLink
                }
              >
                Contact
              </Link>
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
            <Link
              href="/"
              className={pathname === "/" ? styles.activeLink : styles.navLink}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                pathname === "/about" ? styles.activeLink : styles.navLink
              }
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/approach"
              className={
                pathname === "/approach" ? styles.activeLink : styles.navLink
              }
              onClick={toggleMenu}
            >
              Approach
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={
                pathname === "/portfolio" ? styles.activeLink : styles.navLink
              }
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                pathname === "/contact" ? styles.activeLink : styles.navLink
              }
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Button
              sx={{
                bgcolor: theme.palette.primary.main,
                color: "black",
                borderRadius: "20px",
                fontFamily: "BDSans",
                paddingLeft: "7px",
                paddingRight: "7px",
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
