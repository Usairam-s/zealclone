import React from "react";
import {
  PortfolioHeroContainer,
  PortfolioHeading,
  PortfolioText,
} from "@/components/mui/Portfolio";
import { Box } from "@mui/material";

export default function PortfolioContent() {
  return (
    <Box sx={{ marginTop: "3700px" }}>
      <PortfolioHeroContainer>
        <PortfolioHeading
          sx={{ color: "#aaaaeb", fontFamily: "BDSans" }}
          variant="h2"
        >
          There are great ideas out there and we want to hear from you.
        </PortfolioHeading>
        <PortfolioText>
          We are looking for great ideas, fintech, and startups to move to the
          next stage of development. We are ready to bring our expertise and
          support to your venture. <br /> <br />
          If you think you have a great idea, fintech, startup on your hands, we
          want to hear from you. We would love to meet you and explore how we
          can contribute together to the success of your venture.
        </PortfolioText>
      </PortfolioHeroContainer>
    </Box>
  );
}
