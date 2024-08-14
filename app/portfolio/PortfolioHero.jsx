import React from "react";
import {
  PortfolioHeroContainer,
  PortfolioHeading,
  PortfolioText,
} from "@/components/mui/Portfolio";
import AnimateFromLeft from "@/components/AnimateFromLeft/AnimateFromLeft";

export default function PortfolioHero() {
  return (
    <PortfolioHeroContainer>
      <PortfolioHeading
        sx={{ color: "#f07800", fontFamily: "BDSans" }}
        variant="h1"
      >
        <AnimateFromLeft text="Portfolio." />
      </PortfolioHeading>
      <PortfolioText>
        <AnimateFromLeft
          text=" Welcome to explore the heart of our company through projects that unfold
        our story of innovation and success. We persist in seeking new
        opportunities within healthcare."
        />
      </PortfolioText>
    </PortfolioHeroContainer>
  );
}
