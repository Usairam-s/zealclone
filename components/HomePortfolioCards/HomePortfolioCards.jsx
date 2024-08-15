"use client";
import React, { useRef } from "react";
import { Box, Typography, Paper, Button, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const cardData = [
  {
    heading: "United States",
    subheading: "ReferWell",
    description: "Health care’s last mile, solved.",
  },
  {
    heading: "Peru",
    subheading: "Qhali",
    description: "Transforming medical  equality.",
  },
  {
    heading: "Peru",
    subheading: "Chicho",
    description: "Empowering talents  America.",
  },
  {
    heading: "Peru",
    subheading: "Erde",
    description: "Green earth fueling creativity.",
  },
];

const HomePortfolioCardsWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#008282",
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  padding: "120px",
}));

const CardsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "scroll",
  scrollSnapType: "x mandatory",
  gap: theme.spacing(2),
  scrollBehavior: "smooth",
  padding: theme.spacing(1),
  "&::-webkit-scrollbar": {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(3),
  },
}));

const Card = styled(Paper)(({ theme }) => ({
  flex: "0 0 auto",
  width: "100%",
  scrollSnapAlign: "start",
  padding: theme.spacing(2),
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    width: "calc(50% - 16px)",
  },
  [theme.breakpoints.up("md")]: {
    width: "calc(33.33% - 16px)",
  },
  [theme.breakpoints.up("lg")]: {
    width: "calc(25% - 16px)",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "space-between",
  alignItems: "flex-start",
  textAlign: "center",
}));

const NavigationButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  cursor: "pointer",
  zIndex: 1,
  padding: theme.spacing(1),
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
}));

const PrevButton = styled(NavigationButton)(({ theme }) => ({
  left: theme.spacing(1),
}));

const NextButton = styled(NavigationButton)(({ theme }) => ({
  right: theme.spacing(1),
}));

export default function HomePortfolioCards() {
  const scrollContainerRef = useRef(null);
  const theme = useTheme();

  const scroll = (direction) => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = current.clientWidth;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <HomePortfolioCardsWrapper>
      <Typography
        variant="h2"
        sx={{ fontFamily: "BDSans", marginBottom: "50px", color: "#B4F046" }}
      >
        Portfolio
      </Typography>
      <PrevButton onClick={() => scroll("left")}>
        <ArrowBackIosIcon />
      </PrevButton>
      <CardsContainer ref={scrollContainerRef}>
        {cardData.map((card, index) => (
          <Card key={index} elevation={3}>
            <ContentBox>
              <Box
                sx={{
                  // Placeholder logo background color
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: theme.spacing(2),
                }}
              >
                <Image src="/logo1.svg" alt="logo" width={50} height={50} />
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {card.subheading}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                {card.description}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "textSecondary", marginBottom: 2 }}
              >
                {card.heading}
              </Typography>
            </ContentBox>
            <Button
              sx={{
                alignSelf: "flex-start",
                marginTop: theme.spacing(2),
                bgcolor: "#CDFFCD",
                color: "black",

                paddingLeft: "30px",
                paddingRight: "30px",
                borderRadius: "20px",
              }}
            >
              Read More →
            </Button>
          </Card>
        ))}
      </CardsContainer>
      <NextButton onClick={() => scroll("right")}>
        <ArrowForwardIosIcon />
      </NextButton>
    </HomePortfolioCardsWrapper>
  );
}
