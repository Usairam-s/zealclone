"use client";
import { Box, Typography, styled, Button } from "@mui/material";
import { Card as MuiCard, CardContent as MuiCardContent } from "@mui/material";

export const AboutHeadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 60px",
  height: "100vh",
  width: "100vw",

  [theme.breakpoints.down("md")]: {
    padding: "0 30px",
  },
}));

export const HeadingText = styled(Typography)(({ theme }) => ({
  fontSize: "5rem",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

export const AboutVideoContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  "& .video": {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
  },
}));

export const RightContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "180px",
  [theme.breakpoints.down("lg")]: {
    padding: "120px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "left",
    padding: "100px",
  },
}));

export const RightSide = styled(Box)(({ theme }) => ({
  flex: 1,
  color: "black",
  maxWidth: "500px",
  paddingLeft: "16px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0",
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textDecoration: "underline",
  marginTop: "16px",
  padding: "6px 12px",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

export const Card = styled(MuiCard)(({ theme, bgColor }) => ({
  width: "100%",
  height: "70vh",
  marginBottom: "15px",
  overflowX: "hidden",
  display: "flex",
  alignItems: "flex-start",
  backgroundColor: bgColor,
  padding: "40px",
  boxSizing: "border-box",
}));

export const CardNumber = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  width: "50%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
    marginBottom: "10px",
  },
}));

export const CardContent = styled(MuiCardContent)(({ theme }) => ({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: 0,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const CardHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "auto",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    textAlign: "center",
  },
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  marginTop: "auto",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    textAlign: "center",
  },
}));

export const AboutImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "80vh",
  backgroundImage: `url('/AboutImage.webp')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "20px",
}));

export const CultureContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  height: "100vh",
  textAlign: "left",
  width: "60%",
  margin: "auto",
  padding: "20px",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    textAlign: "left",
    padding: "10px",
  },
}));

export const CultureHeading = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: "bold",
  marginTop: "50px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    textAlign: "left",
  },
}));

export const CultureSubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
    textAlign: "left",
  },
}));

export const CultureParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    textAlign: "left",
  },
}));
