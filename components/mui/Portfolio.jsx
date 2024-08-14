"use client";
import { styled, Typography, Box, Card } from "@mui/material";

export const PortfolioHeroContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "85vh",
  width: "100%",
  backgroundColor: "#f0f0f0",
  padding: "0 140px",
  boxSizing: "border-box",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    padding: "0 50px",
  },
}));

export const PortfolioHeading = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

export const PortfolioText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "thin",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export const PortfolioWrapper = styled(Box)(({ theme }) => ({
  padding: "20px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

export const PortfolioCard = styled(Card)(({ theme }) => ({
  width: "50%",
  height: "663px",
  position: "relative",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
  },
}));

export const PortfolioContent = styled(Box)(({ theme }) => ({
  padding: "50px 70px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  boxSizing: "border-box",
  position: "relative",
  "& .MuiButton-root": {
    position: "relative",
    bottom: "20px",
    right: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px",
    "& .MuiTypography-root": {
      textAlign: "center",
    },
    "& .MuiButton-root": {
      position: "static",
      marginTop: "20px",
    },
  },
}));
