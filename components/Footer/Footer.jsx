// components/Footer.js
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { StyledFooter } from "../mui/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <StyledFooter>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, sm: 4, md: 10 },
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{ flex: 1, textAlign: "left", mr: 2, color: "primary" }}
          >
            SAY HELLO 🖐 TO THE ZEAL TEAM
          </Typography>
          <Typography
            variant="h5"
            sx={{ flex: 1, textAlign: "left", ml: 2, color: "white" }}
          >
            We collaborate with ambitious people with creative minds, let's talk
            about your project and build something extraordinary together.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ mb: 2, color: "white" }}>
            Based in Peru. Digitally located everywhere.
            <br />© 2024 Zeal Company. All Rights Reserved
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton color="white">
              <FacebookIcon />
            </IconButton>
            <IconButton color="white">
              <InstagramIcon />
            </IconButton>
            <IconButton color="white">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </StyledFooter>
  );
}
