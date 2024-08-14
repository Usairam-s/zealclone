"use client";
import { styled, Typography, Box, Button } from "@mui/material";

export const ApproachHero = styled(Box)(({ theme }) => ({
  height: "100vh",
  marginLeft: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  boxSizing: "border-box",
  textAlign: "left",
  [theme.breakpoints.up("sm")]: {
    width: "60%",
    padding: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    padding: "20px",
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

export const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export const ApproachFillerImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "80vh",
  backgroundImage: `url('/ApproachFillerImage.webp')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "20px",
}));
