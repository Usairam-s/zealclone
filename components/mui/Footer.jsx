"use client";
import { styled } from "@mui/material";

export const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: "#003C3C",
  overflowX: "hidden",
  height: "60vh",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6, 10),
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
}));
