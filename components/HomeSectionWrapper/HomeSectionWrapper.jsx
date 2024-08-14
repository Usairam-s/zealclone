// components/BackgroundContainer.js
import React from "react";
import { Box } from "@mui/material";

export const HomeSectionWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#325553",
        padding: "0",
      }}
    >
      {children}
    </Box>
  );
};
