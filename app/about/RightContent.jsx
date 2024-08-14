import { Box, Typography } from "@mui/material";
import {
  RightContainer,
  RightSide,
  StyledButton,
} from "../../components/mui/About";

export default function RightContent() {
  return (
    <RightContainer>
      <Box flex={1} /> {/* Left side is empty */}
      <RightSide>
        <Typography variant="h6">
          We are Zeal, an expert firm in healthcare information technology in
          Peru. Investing in projects that grow alongside
        </Typography>
        <StyledButton>Learn More</StyledButton>
      </RightSide>
    </RightContainer>
  );
}
