import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import {
  PortfolioWrapper,
  PortfolioCard,
  PortfolioContent,
} from "@/components/mui/Portfolio";

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

export default function MainPortfolio() {
  return (
    <Container>
      <Typography sx={{ marginTop: "10px", marginLeft: "40px" }}>
        Heleo
      </Typography>
      <PortfolioWrapper>
        {cardData.map((card, index) => (
          <Box
            key={index}
            sx={{ display: "flex", gap: "20px", marginBottom: "40px" }}
          >
            <PortfolioCard>
              <Image
                src={card.image}
                alt={card.subheading}
                layout="fill"
                objectFit="cover"
              />
            </PortfolioCard>

            <PortfolioCard
              sx={{ backgroundColor: card.bgColor, color: "white" }}
            >
              <PortfolioContent>
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
              </PortfolioContent>
            </PortfolioCard>
          </Box>
        ))}
      </PortfolioWrapper>
    </Container>
  );
}
