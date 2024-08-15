import React from "react";
import { Typography, Button, Box } from "@mui/material";
import {
  ContactUsContainer,
  ContactUsForm,
  StyledTextField,
  StyledButtonContainer,
} from "@/components/mui/Contact";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactUs() {
  return (
    <ContactUsContainer>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: { xs: 2, sm: 4 },
        }}
      >
        <Typography variant="h2" sx={{ mb: 2, fontFamily: "BDSans" }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Feel free to email us.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          hello@zltech.io
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Based in Peru.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Digitally located everywhere.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <FacebookIcon color="primary" />
          <InstagramIcon color="primary" />
          <LinkedInIcon color="primary" />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: 2, sm: 4 },
          width: "100%",
        }}
      >
        <ContactUsForm>
          <StyledTextField label="Name" variant="outlined" fullWidth />
          <StyledTextField label="Email" variant="outlined" fullWidth />
          <StyledTextField label="Phone Number" variant="outlined" fullWidth />
          <StyledTextField
            label="Country and City"
            variant="outlined"
            fullWidth
          />
          <StyledTextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
          <StyledButtonContainer>
            <Button variant="outlined" color="secondary">
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </StyledButtonContainer>
        </ContactUsForm>
      </Box>
    </ContactUsContainer>
  );
}
