import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import { Box, Typography } from "@mui/material";
import stylesHome from "./Home.module.css";
import SecondSection from "@/components/SecondSection/SecondSection";
import ThirdSection from "@/components/ThirdSection/ThirdSection";
import { MainContainer } from "@/components/mui/MainStyles";
import FourthSection from "@/components/FourthSection/FourthSection";
import { HomeSectionWrapper } from "@/components/HomeSectionWrapper/HomeSectionWrapper";

export default function Home() {
  return (
    <>
      <BackgroundVideo />

      <Box className={stylesHome.headingContainer}>
        <Typography
          sx={{
            fontFamily: "BDSans",
            color: "#B4F046",
          }}
          variant="h2"
          className={stylesHome.heading}
        >
          Raising Investments, <br /> Transforming
          <br /> Futures.
        </Typography>
      </Box>

      <HomeSectionWrapper>
        <SecondSection />

        <MainContainer>
          <ThirdSection />
        </MainContainer>

        <MainContainer>
          <FourthSection />
        </MainContainer>
      </HomeSectionWrapper>
    </>
  );
}
