import React from "react";
import {
  Card,
  CardNumber,
  CardContent,
  CardHeading,
  CardDescription,
} from "../../components/mui/About";
import { Box, Typography } from "@mui/material";

const cardData = [
  {
    number: "01",
    heading: "WE BUILD",
    description: "We build simple products that can solve complex problems.",
    bgColor: "#97ACA7",
  },
  {
    number: "02",
    heading: "WE INVEST",
    description:
      "We invest in projects with innovative ideas and provide development support and financing.",
    bgColor: "#50BEAA",
  },
  {
    number: "03",
    heading: "WE PARTNER",
    description:
      "We partner strategically to scale together with existing distribution channels.",
    bgColor: "#FF9831",
  },
  {
    number: "04",
    heading: "WE TRAIN",
    description:
      "We train ourselves and train them to have an expert team in the field.",
    bgColor: "#B4F046",
  },
];

export default function WhatWeDo() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ marginLeft: "80px", marginBottom: "10px", fontFamily: "BDSans" }}
      >
        What we do?
      </Typography>

      {cardData.map((card, index) => (
        <Card key={index} bgColor={card.bgColor}>
          <CardNumber sx={{ fontFamily: "BDSans", fontWeight: "bold" }}>
            {card.number}
          </CardNumber>
          <CardContent>
            <Box>
              <CardHeading sx={{ fontFamily: "BDSans", fontWeight: "bold" }}>
                {card.heading}
              </CardHeading>
              <CardDescription>{card.description}</CardDescription>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
