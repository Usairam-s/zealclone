import { Typography } from "@mui/material";
import {
  ThirdContainer,
  ThirdLeftSide,
  ThirdRightSide,
  ThirdStyledButton,
} from "../mui/MainStyles";
export default function ThirdSection() {
  return (
    <ThirdContainer>
      <ThirdLeftSide>
        <Typography variant="h6" paragraph>
          We are in active search for ideas, fintech, and startups that are
          ready to make the leap to the next stage of development. We are ready
          to bring our expertise and support to your venture.
        </Typography>
        <Typography variant="body1" paragraph>
          If you think you have a great idea, fintech, startup on your hands, we
          want to hear from you. We would love to meet you and explore how we
          can contribute together to the success of your venture.
        </Typography>
      </ThirdLeftSide>
      <ThirdRightSide>
        <Typography variant="h1" component="div">
          🚀
        </Typography>
        <Typography variant="h4" component="div" style={{ margin: "20px 0" }}>
          Pitch to us!
        </Typography>
        <ThirdStyledButton>Contact Us</ThirdStyledButton>
      </ThirdRightSide>
    </ThirdContainer>
  );
}
