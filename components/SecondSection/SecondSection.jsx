import { Box, Typography } from "@mui/material";
import { SecondContainer, RightSide, StyledButton } from "../mui/MainStyles";
import AnimateFromRight from "../AnimateFromRight/AnimateFromRight";

export default function SecondSection() {
  return (
    <SecondContainer>
      <Box flex={1} />
      <RightSide>
        <Typography variant="h6">
          <AnimateFromRight
            text="We are Zeal, an expert firm in healthcare information technology in
          Peru. Investing in projects that grow alongside"
          />
        </Typography>
        <StyledButton>Learn More</StyledButton>
      </RightSide>
    </SecondContainer>
  );
}
