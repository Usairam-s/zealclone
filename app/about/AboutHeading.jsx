import React from "react";

import { AboutHeadingContainer, HeadingText } from "../../components/mui/About";

export default function AboutHeading() {
  return (
    <AboutHeadingContainer>
      <HeadingText sx={{ fontFamily: "BDSans" }}>
        We are <span style={{ color: "#B4F046" }}>ZEAL,</span>
        an expert firm in healthcare information technology established in Peru.
      </HeadingText>
    </AboutHeadingContainer>
  );
}
