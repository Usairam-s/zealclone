import React from "react";
import AboutHeading from "./AboutHeading";
import AboutVideo from "./AboutVideo";
import { MainContainer } from "@/components/mui/MainStyles";

import RightContent from "./RightContent";
import WhatWeDo from "./WhatWeDo";
import AboutImageComponent from "./AboutImageComponent";
import AboutCulture from "./AboutCulture";

export default function page() {
  return (
    <>
      <AboutHeading />
      <MainContainer>
        <AboutVideo />
      </MainContainer>
      <RightContent />
      <MainContainer>
        <WhatWeDo />
      </MainContainer>
      <MainContainer>
        <AboutImageComponent />
      </MainContainer>
      <AboutCulture />
    </>
  );
}
