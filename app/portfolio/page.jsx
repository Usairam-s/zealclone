"use client";
import React from "react";
import PortfolioHero from "./PortfolioHero";
import MainPortfolio from "./MainPortfolio";
import PortfolioContent from "./PortfolioContent";
import Pitch from "@/components/Pitch/Pitch";
import MobilePortfolio from "./MobilePortfolio";
import { useMediaQuery, useTheme } from "@mui/material";

export default function page() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <PortfolioHero />
      {isMobile ? <MobilePortfolio /> : <MainPortfolio />}
      <PortfolioContent />

      <Pitch />
    </>
  );
}
