"use client";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const MainContainer = styled(Box)(({ theme }) => ({
  padding: "16px",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("lg")]: {
    padding: "10px",
  },
}));

export const SecondContainer = styled(Box)(({ theme }) => ({
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
  color: "#B4F046",

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
    backgroundColor: "gray",
    color: "black",
  },
}));

export const ThirdContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  borderRadius: "20px",
  alignItems: "center",
  backgroundColor: "#B4F046",
  padding: "150px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "50px",
  },
}));

export const ThirdLeftSide = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: "600px",

  paddingRight: "20px",
  [theme.breakpoints.down("md")]: {
    paddingRight: "0",
  },
}));

export const ThirdRightSide = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    paddingTop: "20px",
  },
}));

export const ThirdStyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",

  color: "black",
  borderRadius: "20px",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: theme.palette.grey[300],
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "80vh",
  objectFit: "cover",
  borderRadius: "20px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
