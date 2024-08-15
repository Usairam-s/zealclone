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
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#B4F046",
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              flex: 1,
              pr: 2,
            }}
          >
            SAY HELLO 🖐 TO THE ZEAL TEAM
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "right",
              flex: 1,
            }}
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
            textAlign: "center",
            gap: 2,
            px: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            Based in Peru. Digitally located everywhere.
            <br />© 2024 Zeal Company. All Rights Reserved
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              mt: 1,
            }}
          >
            <IconButton
              sx={{
                color: "white",
                "&:hover": {
                  transform: "scale(0.9)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                "&:hover": {
                  transform: "scale(0.9)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                "&:hover": {
                  transform: "scale(0.9)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </StyledFooter>
  );
}
