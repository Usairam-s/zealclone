import React from "react";

import { AboutHeadingContainer, HeadingText } from "../../components/mui/About";
import AnimateFromBottom from "@/components/AnimateFromBottom/AnimateFromBottom";

export default function AboutHeading() {
  return (
    <AboutHeadingContainer>
      <HeadingText sx={{ fontFamily: "BDSans" }}>
        <AnimateFromBottom text=" We are ZEAL, an expert firm in healthcare information technology established in Peru." />
      </HeadingText>
    </AboutHeadingContainer>
  );
}
