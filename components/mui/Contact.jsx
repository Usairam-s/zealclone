"use client";
import { Box, Typography, Button, TextField, styled } from "@mui/material";

export const ContactUsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "80px",
  minHeight: "100vh",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
  padding: theme.spacing(4),
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
