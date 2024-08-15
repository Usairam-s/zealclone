"use client";
import { Box, Typography, Button, TextField, styled } from "@mui/material";

export const ContactUsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-start",
  minHeight: "100vh",
  padding: theme.spacing(4),
  marginTop: "80px",
  gap: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ContactUsForm = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const StyledButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: theme.spacing(2),
}));
