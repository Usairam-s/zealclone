import React from "react";
import MainHeading from "./MainHeading";
import { MainContainer } from "@/components/mui/MainStyles";
import { ApproachFillerImage } from "@/components/mui/Approach";
import Pitch from "@/components/Pitch/Pitch";
import { ApproachSectionWrapper } from "../../components/ApproachSectionWrapper/ApproachSectionWrapper";

export default function page() {
  return (
    <ApproachSectionWrapper>
      <MainContainer>
        <MainHeading />
      </MainContainer>
      <MainContainer>
        <ApproachFillerImage />
      </MainContainer>
      <MainContainer>
        <Pitch />
      </MainContainer>
    </ApproachSectionWrapper>
  );
}
