"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "200px",
  borderRadius: "12px",
  overflow: "hidden",
}));

const DetailsCard = styled(Box)(({ theme, bgColor }) => ({
  backgroundColor: bgColor || "#fff",
  color: "white",
  padding: theme.spacing(2),
  borderRadius: "12px",
  boxShadow: theme.shadows[2],
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  color: "#fff",
  backgroundColor: "#000",
  "&:hover": {
    backgroundColor: "#333",
  },
}));

const PrevButton = styled(NavigationButton)(({ theme }) => ({
  left: theme.spacing(1),
}));

const NextButton = styled(NavigationButton)(({ theme }) => ({
  right: theme.spacing(1),
}));

const MobilePortfolioWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  position: "relative",
}));

const cardData = [
  {
    image: "/app1.webp",
    heading: "United States",
    subheading: "ReferWell",
    description: "Health care’s last mile, solved.",
    details:
      "We leverage the referable moment to transform, simplify and integrate healthcare delivery so more people get the care they need.",
    bgColor: "#82cdc8",
  },
  {
    image: "/app2.webp",
    heading: "Peru",
    subheading: "Qhali",
    description: "Transforming medical access, promoting healthcare equality.",
    details:
      "We are revolutionizing medical access and promoting healthcare equality. Extending care beyond border.",
    bgColor: "#003c3c",
  },
  {
    image: "/app3.webp",
    heading: "Peru",
    subheading: "Chicho",
    description: "Empowering tech talents across Latin America.",
    details: "We recruit, manage and retain top tech talents in Latin America.",
    bgColor: "#aaaaeb",
  },
  {
    image: "/app4.webp",
    heading: "Peru",
    subheading: "Erde",
    description: "Green earth inspiring and fueling creativity.",
    details:
      "We create a green earth that allows nature to dictate inspiration and creativity. A space to leave the conventional and be part of a natural environment.",
    bgColor: "#3c1e0f",
  },
  {
    image: "/app5.webp",
    heading: "Peru",
    subheading: "Linku",
    description: "Communities and cultures that connect and inspire.",
    details:
      "Spaces that inspire. Communities and cultures that connect. Immerse yourself in an experience of constant exchange.",
    bgColor: "#91190F",
  },
  {
    image: "/app6.webp",
    heading: "Peru",
    subheading: "Cintamonos",
    description: "Promoting change through balance.",
    details:
      "Nonprofit Slackline Sports Association. Promotes and spreads the practice of the sport of Slackline in Peru.",
    bgColor: "#ff9831",
  },
];

export default function MobilePortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const card = cardData[currentIndex];

  return (
    <Container>
      <MobilePortfolioWrapper>
        <ImageBox>
          <Image
            src={card.image}
            alt={card.subheading}
            layout="fill"
            objectFit="cover"
          />
        </ImageBox>

        <DetailsCard bgColor={card.bgColor}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            {card.heading}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginBottom: "15px",
              fontFamily: "BDSans",
              fontWeight: "bold",
            }}
          >
            {card.subheading}
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: "20px", fontWeight: "thin" }}
          >
            {card.description}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "20px" }}>
            {card.details}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ alignSelf: "flex-end" }}
          >
            Read More
          </Button>
        </DetailsCard>

        <PrevButton onClick={handlePrev}>
          <ChevronLeftIcon />
        </PrevButton>
        <NextButton onClick={handleNext}>
          <ChevronRightIcon />
        </NextButton>
      </MobilePortfolioWrapper>
    </Container>
  );
}
