"use client";
import { styled, Typography, Button, Box } from "@mui/material";

export const PitchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  background: "#F0F1F3",
  borderRadius: "20px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
  width: "100%",
  backgroundColor: "white",
  padding: "20px",
  boxSizing: "border-box",
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    padding: "40px",
  },
}));

export const PitchHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

export const PitchButton = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "B4F046",
  color: "black",
  "&:hover": {
    backgroundColor: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}));

export default function Pitch() {
  return (
    <PitchContainer>
      <PitchHeading sx={{ fontFamily: "BDSans" }} variant="h1">
        We invest in projects with a focus on healthcare IT
      </PitchHeading>
      <PitchButton variant="contained">Pitch Us!</PitchButton>
    </PitchContainer>
  );
}
