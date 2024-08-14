import React from "react";
import { Box } from "@mui/material";

export const ApproachSectionWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#CAFE6A",
        padding: "0",
      }}
    >
      {children}
    </Box>
  );
};
