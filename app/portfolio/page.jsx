import React from "react";
import PortfolioHero from "./PortfolioHero";
import MainPortfolio from "./MainPortfolio";
import PortfolioContent from "./PortfolioContent";
import Pitch from "@/components/Pitch/Pitch";

export default function page() {
  return (
    <>
      <PortfolioHero />
      <MainPortfolio />
      <PortfolioContent />
      <Pitch />
    </>
  );
}
